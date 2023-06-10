import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {FontFamily} from '../GlobalStyles';
import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from '@thirdweb-dev/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EthCrypto from 'eth-crypto';
import {
  donPublicKey,
  privateKey,
  githubApiToken,
} from '../screens/environments';
const encryptWithSignature = async (
  signerPrivateKey: string,
  readerPublicKey: string,
  message: string,
) => {
  const signature = EthCrypto.sign(
    signerPrivateKey,
    EthCrypto.hash.keccak256(message),
  );
  const payload = {
    message,
    signature,
  };
  const encrypted = await EthCrypto.encryptWithPublicKey(
    readerPublicKey,
    JSON.stringify(payload),
  );
  return EthCrypto.cipher.stringify(encrypted);
};

function getMintTime(lastTimestamp: string) {
  const currentTime = Date.now();
  const timeDiff = currentTime - Number(lastTimestamp);
  if (timeDiff > 86400000) {
    return 0;
  } else {
    return timeDiff;
  }
}
const Countdown = () => {
  const address = useAddress();

  const [isPlaying, setIsPlaying] = React.useState(true);
  const [mintable, setMintable] = React.useState(true);
  const {contract, isLoading: isLoadingContract} = useContract(
    '0x995A39d59484676643c631a785726534ce3CE659',
  );
  const {mutateAsync: mintTokens, isLoading: isLoadingMintTokens} =
    useContractWrite(contract, 'mintTokens');
  const {data: lastClaimTimestamp, isLoading: isLoadingLastClaim} =
    useContractRead(contract, 'getLastClaimed', [
      address != null ? address : '',
    ]);
  const [timeRemaining, setTimeRemaining] = React.useState(-1);
  React.useEffect(() => {
    if (lastClaimTimestamp) {
      const timeDiff = Date.now() - Number(lastClaimTimestamp);
      if (timeDiff > 86400000) {
        setTimeRemaining(0);
      } else {
        setTimeRemaining(timeDiff);
      }
    }
  }, [lastClaimTimestamp]);
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute'}}>
        {lastClaimTimestamp != undefined && timeRemaining != -1 && (
          <CountdownCircleTimer
            initialRemainingTime={timeRemaining}
            isGrowing={true}
            isPlaying={isPlaying}
            duration={24 * 60 * 60}
            colors={'#FF6079'}
            onComplete={() => setMintable(false)}
            updateInterval={1}>
            {({remainingTime}) => {
              const hours = Math.floor(remainingTime / 3600);
              const minutes = Math.floor((remainingTime % 3600) / 60);
              const seconds = remainingTime % 60;
              return (
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: FontFamily.poppinsRegular,
                    }}>
                    Next mint in
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: FontFamily.poppinsRegular,
                      alignContent: 'center',
                      textAlign: 'center',
                    }}>{`${hours}:${minutes}:${seconds}`}</Text>
                </View>
              );
            }}
          </CountdownCircleTimer>
        )}
      </View>
      <Button
        mode="elevated"
        disabled={mintable}
        buttonColor="#FEE9EC"
        textColor="#000000"
        style={{top: 240, left: 115}}
        onPress={async () => {
          try {
            const accessToken = await AsyncStorage.getItem('accessToken');
            console.log('Access token retrieved:', accessToken);
            const offchainSecrets = {};

            offchainSecrets['0x0'] = Buffer.from(
              await encryptWithSignature(
                privateKey,
                donPublicKey,
                JSON.stringify({accessToken: accessToken}),
              ),
              'hex',
            ).toString('base64');
            console.log('Encrypted secrets:', offchainSecrets);

            const response = await fetch('https://api.github.com/gists', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${githubApiToken}`,
              },
              body: JSON.stringify({
                public: false,
                files: {
                  [`encrypted-functions-request-data-${Date.now()}.json`]: {
                    content: JSON.stringify(offchainSecrets),
                  },
                },
              }),
            });
            console.log('Gist created:');
            const res = await response.json();
            const secretsUrl = res.html_url + '/raw';
            console.log('Secrets URL:', secretsUrl);

            const secretUrlHexEncrypted = EthCrypto.cipher.stringify(
              await EthCrypto.encryptWithPublicKey(donPublicKey, secretsUrl),
            );
            console.log('Secrets URL hex encrypted:', secretUrlHexEncrypted);
            console.log('LastTimestamp' + lastClaimTimestamp.toString());
            await mintTokens({
              args: [secretUrlHexEncrypted, 1803, 300000],
            });
          } catch (e) {
            console.log(e);
          }
        }}>
        Mint
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    left: -10,
    top: -210,
  },
});

export default Countdown;
