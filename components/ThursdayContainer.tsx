import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ThursdayContainer = () => {
  return (
    <View style={[styles.header, styles.headerPosition]}>
      <Image
        style={[styles.buttonIcon, styles.iconLayout]}
        source={require("../assets/button.png")}
      />
      <View style={styles.title}>
        <Text style={[styles.thursday08July, styles.helloLinhPosition]}>
          Thursday, 08 July
        </Text>
        <Text style={[styles.helloLinh, styles.helloLinhPosition]}>
          Hello Linh!
        </Text>
      </View>
      <View style={[styles.avatar, styles.icon1Position]}>
        <Image
          style={styles.avatar6Icon}
          source={require("../assets/avatar-6.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.icon1, styles.icon1Position]}
        source={require("../assets/icon-1.png")}
      />
      <Image
        style={styles.icon}
        source={require("../assets/icon5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    left: 24,
    top: 79,
  },
  iconLayout: {
    height: 58,
    width: 58,
    position: "absolute",
  },
  helloLinhPosition: {
    textAlign: "left",
    left: "0%",
    width: "100%",
    top: "50%",
    position: "absolute",
  },
  icon1Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  buttonIcon: {
    top: 60,
    left: 270,
  },
  thursday08July: {
    marginTop: -2,
    fontSize: FontSize.headline04_size,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.headline06,
    color: Color.colorsBlack100,
  },
  helloLinh: {
    marginTop: -26,
    fontSize: FontSize.headline06_size,
    lineHeight: 24,
    fontFamily: FontFamily.paragraph03,
    color: Color.gray_100,
  },
  title: {
    marginTop: -27.5,
    width: "51.07%",
    right: "24.46%",
    left: "24.46%",
    height: 52,
    top: "50%",
    position: "absolute",
  },
  avatar6Icon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  avatar: {
    width: 56,
    height: 56,
  },
  vectorIcon: {
    left: 24,
    top: 79,
  },
  icon1: {
    width: 59,
    height: 59,
  },
  icon: {
    top: 40,
    left: 40,
    width: 16,
    height: 16,
    position: "absolute",
  },
  header: {
    width: 327,
    height: 59,
    position: "absolute",
  },
});

export default ThursdayContainer;
