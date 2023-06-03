import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Image
        style={[styles.illustrationIcon, styles.metamaskWalletPosition]}
        source={require("../assets/illustration1.png")}
      />
      <Image
        style={styles.groupIcon}
        source={require("../assets/group.png")}
      />
      <Text style={styles.syncYourWallet}>Sync Your Wallet</Text>
      <Pressable
        style={styles.loginbutton}
        onPress={() => navigation.navigate("HomeScroll3")}
      >
        <View style={styles.buttonShape} />
        <View style={[styles.loginText, styles.loginTextLayout]}>
          <Text style={[styles.metamaskWallet, styles.loginTextLayout]}>
            Metamask Wallet
          </Text>
        </View>
      </Pressable>
      <Image
        style={styles.metamaskFox2Icon}
        source={require("../assets/metamask-fox-21.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  metamaskWalletPosition: {
    left: -100,
    top: 0,
  },
  loginTextLayout: {
    height: 24,
    width: 217,
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
    textAlign: "center",
    position: "absolute",
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
  metamaskWallet: {
    fontSize: FontSize.size_mid,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.black,
    width: 217,
    textAlign: "center",
    left: 2,
    top: 40,
  },
  loginText: {
    top: 19,
    left: 13,
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
  metamaskFox2Icon: {
    top: 292,
    left: 285,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  login: {
    backgroundColor: Color.lightcoral,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
