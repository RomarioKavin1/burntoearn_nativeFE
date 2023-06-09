import * as React from 'react';
import {Image} from 'react-native';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontSize, FontFamily, Color, Border} from '../GlobalStyles';
import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from '@thirdweb-dev/react-native';
import EthCrypto from 'eth-crypto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {privateKey, donPublicKey, githubApiToken} from './environments';
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

const Login = () => {
  const {contract} = useContract('0xD99c9590f0c459bEc0c8eF4bcaFA129214b54a04');
  const navigation = useNavigation();
  const address = useAddress();
  const {data: emailAddress, isLoading} = useContractRead(
    contract,
    'getUserEmail',
    [address != null ? address : ''],
  );
  React.useEffect(() => {
    console.log('Email Address: ', emailAddress);
  })
  const {mutateAsync: registerAccount, isLoading: isLoadingRegister} =
    useContractWrite(contract, 'registerAccount');
  return (
    <View style={styles.login}>
      <Image
        style={[styles.illustrationIcon, styles.metamaskWalletPosition]}
        source={require('../assets/illustration1.png')}
      />
      <Image style={styles.groupIcon} source={require('../assets/group.png')} />
      <Text style={styles.syncYourWallet}>Sync Your Wallet</Text>
      <View style={styles.loginbutton}>
        <ConnectWallet />
        {!isLoading && (emailAddress.toString() != '') ? (
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate('HomeScroll3');
            }}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        ) : (
          !isLoading &&
          address != null && (
            <Pressable
              style={styles.button}
              onPress={async () => {
                try {
                  const accessToken = await AsyncStorage.getItem('accessToken');
                  const filename=`encrypted-functions-request-data-${Date.now()}.json`;
                  console.log('Access token retrieved:', accessToken);
                  const encryptedSecrets = await encryptWithSignature(
                    privateKey,
                    donPublicKey,
                    JSON.stringify({accessToken: accessToken}),
                  );
                  console.log('Encrypted secrets:', encryptedSecrets);
    
                  const response = await fetch('https://api.github.com/gists', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: `token ${githubApiToken}`,
                    },
                    body: JSON.stringify({
                      public: false,
                      files: {
                        [filename]:
                          {
                            content: JSON.stringify(encryptedSecrets),
                          },
                      },
                    }),
                  });
                  console.log('Gist created:', await response.json());
                  const secretsUrl = (await response.json())["files"][filename]["html_url"];
                  console.log('Secrets URL:', secretsUrl);
                  const secretsUrlHex = `0x${Buffer.from(
                    secretsUrl + '/raw',
                  ).toString('hex')}`;
                  console.log('Secrets URL hex:', secretsUrlHex);
                  const data = await registerAccount({
                    args: [[], secretsUrlHex, 1792, 300000],
                  });
                  console.info('contract call successs', data);
                } catch (err) {
                  console.error('contract call failure', err);
                }
              }}>
              <Text style={styles.buttonText}>Register Email</Text>
            </Pressable>
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 30,
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
  metamaskWalletPosition: {
    left: -100,
    top: 0,
  },
  loginTextLayout: {
    height: 24,
    width: 217,
    position: 'absolute',
  },
  illustrationIcon: {
    width: 700,
    height: 700,
    position: 'absolute',
  },
  groupIcon: {
    left: 300,
    width: 220,
    height: 220,
    top: -90,
    position: 'absolute',
  },
  syncYourWallet: {
    top: 215,
    left: 25,
    fontSize: 40,
    letterSpacing: -2,
    lineHeight: 59,
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.colorsWhite100,
    width: 350,
    height: 118,
    textAlign: 'center',
    position: 'absolute',
  },
  buttonShape: {
    height: '100%',
    top: '90%',
    right: '10%',
    bottom: '0%',
    left: '0%',
    borderRadius: Border.br_base,
    backgroundColor: Color.colorsWhite100,
    position: 'absolute',
    width: '100%',
  },
  metamaskWallet: {
    fontSize: FontSize.size_mid,
    lineHeight: 26,
    fontWeight: '600',
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.black,
    width: 217,
    textAlign: 'center',
    left: 2,
    top: 40,
  },
  loginText: {
    top: 19,
    left: 13,
  },
  loginbutton: {
    height: '7.64%',
    width: '70.93%',
    top: '45.45%',
    right: '14.4%',
    bottom: '55.91%',
    left: '14.67%',
    position: 'absolute',
  },
  metamaskFox2Icon: {
    top: 292,
    left: 285,
    width: 40,
    height: 40,
    position: 'absolute',
    overflow: 'hidden',
  },
  login: {
    backgroundColor: Color.lightcoral,
    flex: 1,
    height: 812,
    overflow: 'hidden',
    width: '100%',
  },
});

export default Login;
