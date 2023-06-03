import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login1 = () => {
  const [accessToken,setAccessToken]=React.useState(null);
  const navigation = useNavigation();
  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId: '415611441023-v7b2kh5tiamoib28l5eiks0h6ulkm1gt.apps.googleusercontent.com',
      offlineAccess: true,
      scopes: ['email', 'profile', "https://www.googleapis.com/auth/fitness.activity.read","https://www.googleapis.com/auth/fitness.heart_rate.read"]
    });
  }, []);
  React.useEffect(() => {
    // Obtain the access token
    const receivedAccessToken = accessToken;
    // Store the access token
    const storeAccessToken = async (accessToken1: string) => {
      if(accessToken!==null){
      try {

        await AsyncStorage.setItem('accessToken', accessToken1);
        console.log('Access token stored successfully.');
      } catch (error) {
        console.error('Error storing access token:', error);
      }}
    };

    storeAccessToken(receivedAccessToken);
  }, [accessToken]);
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const info = await GoogleSignin.signIn();
      // console.log('Access Token:', accessToken);
      // console.log('ID Token:', idToken);
      setAccessToken(info.idToken);
      console.log(info);
      navigation.navigate("Login");
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Google Sign-In cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Google Sign-In is already in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Google Play Services is not available');
      } else {
        console.log('Google Sign-In error:', error.message);
      }
    }
  };
  return (
    <View style={styles.login}>
      <Image
        style={[styles.illustrationIcon, styles.illustrationIconPosition]}
        source={require("../assets/illustration2.png")}
      />
      <Image
        style={styles.groupIcon}
        source={require("../assets/group.png")}
      />
      <Text style={[styles.fithouse, styles.getClr]}>Burn To Earn</Text>
      <Text style={[styles.getFitGet, styles.getClr]}>Turning steps into savings, one token at a time!</Text>
      <Pressable
        style={styles.loginbutton}
        // onPress={() => navigation.navigate("Login")}
        onPress={handleGoogleSignIn}
      >
        <View style={styles.buttonShape} />
        <View style={[styles.loginText, styles.loginTextLayout]}>
          <Text style={[styles.continueWithGooglefit, styles.loginTextLayout]}>
            Continue with GoogleFit
          </Text>
          <Image
            style={styles.googleFitIcon20181}
            source={require("../assets/google-fit-icon-2018-1.png")}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  illustrationIconPosition: {
    left: -100,
    top: 0,
  },
  getClr: {
    color: Color.colorsWhite100,
    textAlign: "center",
    position: "absolute",
  },
  loginTextLayout: {
    height: 24,
    position: "absolute",
  },
  illustrationIcon: {
    width: 700,
    height: 700,
    position: "absolute",
  },
  groupIcon: {
    left: 300,
    width: 220,
    height: 220,
    top: -90,
    position: "absolute",
  },
  fithouse: {
    position: "absolute",
    top: 199,
    left: 30,
    fontSize: FontSize.size_29xl,
    letterSpacing: 0,
    lineHeight: 50,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    width: 350,
    height: 118,
    textAlign: "center",
  },
  getFitGet: {
    top: 260,
    left: 40,
    fontSize: FontSize.headline07_size,
    lineHeight: 24,
    fontFamily: FontFamily.poppinsRegular,
    width: 326,
    textAlign: "center",
  },
  buttonShape: {
    height: "100%",
    top: "90%",
    right: "10%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_base,
    backgroundColor: Color.colorsWhite100,
    position: "absolute",
    width: "100%",
  },
  continueWithGooglefit: {
    fontSize: FontSize.size_mid,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.black,
    width: 217,
    textAlign: "center",
    left: 2,
    top: 45,
  },
  googleFitIcon20181: {
    top: 45,
    left: 230,
    width: 25,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  loginText: {
    top: 19,
    left: 13,
    width: 242,
  },
  loginbutton: {
    height: "7.64%",
    width: "70.93%",
    top: "36.45%",
    right: "14.4%",
    bottom: "55.91%",
    left: "14.67%",
    position: "absolute",
  },
  login: {
    backgroundColor: Color.lightcoral,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login1;