import * as React from "react";
import { StyleSheet, View,ScrollView, Pressable, Text } from "react-native";
// import { LinearGradient } from "react-native-linear-gradient";
import { Image } from "react-native";
import InviteFriendsCard from "../components/InviteFriendsCard";
import TodaysInformationContainer from "../components/TodaysInformationContainer";
import ConnectedContainer from "../components/ConnectedContainer";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";


const HomeScroll3 = () => {
  return (
    <ScrollView>
    <View style={styles.homescroll3}>
      
      <View style={styles.body}>
     
        <InviteFriendsCard />
        
        {/* <LinearGradient
          style={styles.base}
          locations={[0, 1]}
          colors={["#ff6079", "rgba(255, 96, 121, 0.49)"]}
        /> */}
        
        <TodaysInformationContainer />
        
        <Image
          style={[styles.icon, styles.iconLayout]}
          source={require("../assets/icon4.png")}
        />
        
      </View>
      
      <View style={styles.offset}>
      
      {/* <ThursdayContainer /> */}
      <ConnectedContainer />
      
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  offset:{
    left:23,
    top:12
  },
  itemIconPosition: {
    width: "16%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  homeTypo: {
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  base: {
    height: "13.33%",
    width: "19.57%",
    top: "82.29%",
    right: "74.62%",
    bottom: "4.38%",
    left: "5.81%",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorsWhite100,
    position: "absolute",
  },
  icon: {
    height: "7.5%",
    width: "11.01%",
    top: "85.63%",
    right: "78.9%",
    bottom: "6.88%",
    left: "10.09%",
    position: "absolute",
  },
  body: {
    top: 166,
    left: 50,
    width: 327,
    height: 480,
    position: "absolute",
  },
  icon2: {
    height: "85.71%",
    width: "7.34%",
    top: "7.14%",
    bottom: "7.14%",
    left: "92.66%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  weeklyStatus: {
    marginTop: -14,
    width: "87.77%",
    fontSize: FontSize.headline04_size,
    lineHeight: 28,
    textAlign: "left",
    left: "0%",
  },
  title: {
    height: "3.45%",
    width: "87.2%",
    top: "26.35%",
    right: "-2526.93%",
    bottom: "70.2%",
    left: "2539.73%",
    position: "absolute",
  },
  homescroll3: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorsWhite100,
  },
  bottomnav:{
     }
});

export default HomeScroll3;
