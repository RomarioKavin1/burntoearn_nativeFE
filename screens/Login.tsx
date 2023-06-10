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
  const {contract} = useContract('0x995A39d59484676643c631a785726534ce3CE659');
  const navigation = useNavigation();
  const address = useAddress();
  const {data: emailAddress, isLoading} = useContractRead(
    contract,
    'getUserEmail',
    [address != null ? address : ''],
  );
  React.useEffect(() => {
    console.log('Email Address: ', emailAddress);
  });
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
        {!isLoading &&
        emailAddress != undefined &&
        emailAddress.toString() != '' ? (
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
                        [`encrypted-functions-request-data-${Date.now()}.json`]:
                          {
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
                    await EthCrypto.encryptWithPublicKey(
                      donPublicKey,
                      secretsUrl,
                    ),
                  );
                  console.log(
                    'Secrets URL hex encrypted:',
                    secretUrlHexEncrypted,
                  );
                  // SecretUrl looks something like => a70b02baa0f3ac19d59039c9b45042cd03ea8fb8722ef9cf362586455e5c92474dcce92553de14103109b805d7ffac73cf9d1fd89972f5bee1d1975b2592039745e55e83894a56109c5b60e2f8ec9384e30973a52046277b10b6b0e08611dabb4ad73775137e2350d922a76963d32fd593c64f20b1ef4bff85cf1a44ffec6a6c90fbf63c0c09bba93ca58b612ee9d74f7e9785aee03e653d209c068c463a36052fc9ea362217b9974b6379da7dc41941c9
                  // 356 characters in length

                  const data = await registerAccount({
                    args: [[], '0x' + secretUrlHexEncrypted, '1803', '300000'],
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
