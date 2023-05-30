import * as React from "react";
import { StyleSheet, View, Text,  } from "react-native";
import { Image } from "react-native";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";
const ProgressContainer = () => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.line} />
        <View style={styles.text}>
          <Text style={styles.keepParticipatingI}>
           Mint your tokens now
          </Text>
          <Text style={styles.letsKeepGoing}>Cash-in exciting rewards</Text>
        </View>
        <Text style={{fontFamily:FontFamily.dMSansBold,top:20,lineHeight:20,height:100,width:200,left:100}}>Today's Avaiable points:</Text>
          <View style={styles.title}>
            <Text style={[styles.text1]}>58</Text>
          </View>
          <Image
            style={styles.icon}
            source={require("../assets/silvertoken.png")}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text1Typo: {
    lineHeight: 26,
    fontSize: FontSize.headline07_size,
    color: Color.colorsBlack100,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  line: {
    height: "100.85%",
    width: "100.46%",
    top: "-0.43%",
    right: "-0.23%",
    bottom: "-0.43%",
    left: "-0.23%",
    borderRadius: Border.br_5xl,
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1.5,
    opacity: 0.2,
    position: "absolute",
  },
  keepParticipatingI: {
    top: 32,
    fontSize: FontSize.headline06_size,
    lineHeight: 24,
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.paragraph03,
    left: 0,
    width: 279,
    position: "absolute",
  },
  letsKeepGoing: {
    fontSize: FontSize.headline04_size,
    lineHeight: 28,
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    width: 279,
    top: 0,
    position: "absolute",
  },
  text: {
    top: 96,
    bottom: 24,
    width: 279,
    left: 24,
    position: "absolute",
  },
  text1: {
    left:0,
    top:15,
    fontFamily: FontFamily.poppinsRegular,
    fontWeight: "700",
    lineHeight: 30,
    fontSize:30,
  },
  offset:{
    top:-15,
    left:-20
  },
  steps: {
    lineHeight: 26,
    fontSize: FontSize.bodyBody1_size,
    fontFamily: FontFamily.paragraph03,
    left: -7,
  },
  title: {
    top: 39,
    left: 104,
    width:200,
    height: 26,
    position: "absolute",
  },
  icon: {
    top: 24,
    width: 56,
    height: 56,
    left: 24,
    position: "absolute",
  },
  content: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  card: {
    left: 1,
    width: 327,
    height: 176,
    top: 160,
    position: "absolute",
  },
});

export default ProgressContainer;
