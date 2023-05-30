import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const CardContainer = () => {
  return (
    <View style={styles.cards}>
      <View style={[styles.item, styles.itemLayout]}>
        <View style={[styles.content, styles.contentPosition]}>
          <LinearGradient
            style={[styles.background, styles.contentPosition]}
            locations={[0, 1]}
            colors={["#65cf58", "rgba(101, 207, 88, 0.6)"]}
          />
          <View style={[styles.body, styles.bodyLayout]}>
            <Text style={[styles.dumbbell, styles.kcalPosition]}>Dumbbell</Text>
          </View>
          <View style={styles.title}>
            <Text style={[styles.kcal, styles.kcalTypo]}>Kcal</Text>
            <Text style={[styles.text, styles.textTypo]}>628</Text>
          </View>
          <Image
            style={[styles.icon, styles.bodyLayout]}
            source={require("../assets/icon6.png")}
          />
        </View>
      </View>
      <View style={[styles.item1, styles.itemLayout]}>
        <View style={[styles.content1, styles.contentPosition]}>
          <View style={[styles.base, styles.baseLayout]} />
          <View style={[styles.body, styles.bodyLayout]}>
            <Text style={[styles.treadmill, styles.kcal1Position]}>
              Treadmill
            </Text>
          </View>
          <View style={styles.title}>
            <Text style={[styles.kcal1, styles.kcal1Position]}>Kcal</Text>
            <Text style={[styles.text1, styles.kcal1Position]}>235</Text>
          </View>
          <Image
            style={[styles.icon, styles.bodyLayout]}
            source={require("../assets/icon7.png")}
          />
          <LinearGradient
            style={[styles.line, styles.baseLayout]}
            locations={[0, 1]}
            colors={["#fd371f", "#ff844b"]}
          />
        </View>
      </View>
      <View style={[styles.item2, styles.itemLayout]}>
        <View style={[styles.content1, styles.contentPosition]}>
          <View style={[styles.base, styles.baseLayout]} />
          <View style={[styles.body, styles.bodyLayout]}>
            <Text style={[styles.treadmill, styles.kcal1Position]}>Rope</Text>
          </View>
          <View style={styles.title}>
            <Text style={[styles.kcal1, styles.kcal1Position]}>Kcal</Text>
            <Text style={[styles.text1, styles.kcal1Position]}>432</Text>
          </View>
          <Image
            style={[styles.icon, styles.bodyLayout]}
            source={require("../assets/icons--bold--rope.png")}
          />
          <LinearGradient
            style={[styles.line, styles.baseLayout]}
            locations={[0, 1]}
            colors={["#8a24ff", "rgba(138, 36, 255, 0.4)"]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
    width: 112,
    top: 0,
    height: 112,
    position: "absolute",
  },
  contentPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  bodyLayout: {
    height: 24,
    position: "absolute",
  },
  kcalPosition: {
    textAlign: "left",
    color: Color.colorsWhite100,
    top: "50%",
    position: "absolute",
  },
  kcalTypo: {
    lineHeight: 16,
    fontSize: FontSize.headline07_size,
    left: 32,
    marginTop: -6,
    fontFamily: FontFamily.paragraph03,
  },
  textTypo: {
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    lineHeight: 26,
    fontSize: FontSize.bodyBody1_size,
    marginTop: -13,
    left: 0,
  },
  baseLayout: {
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  kcal1Position: {
    color: Color.colorsBlack100,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  background: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.new,
    position: "absolute",
  },
  dumbbell: {
    fontFamily: FontFamily.paragraph03,
    lineHeight: 24,
    fontSize: FontSize.headline06_size,
    marginTop: -12,
    left: "0%",
    width: "100%",
  },
  body: {
    marginTop: 16,
    width: "71.43%",
    right: "14.29%",
    left: "14.29%",
    opacity: 0.6,
    top: "50%",
  },
  kcal: {
    textAlign: "left",
    color: Color.colorsWhite100,
    top: "50%",
    position: "absolute",
  },
  text: {
    textAlign: "left",
    color: Color.colorsWhite100,
    top: "50%",
    position: "absolute",
  },
  title: {
    marginTop: -10,
    right: 40,
    height: 26,
    left: 16,
    top: "50%",
    position: "absolute",
  },
  icon: {
    top: 16,
    width: 24,
    left: 16,
  },
  content: {
    shadowColor: "rgba(101, 207, 88, 0.48)",
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowRadius: 42,
    elevation: 42,
    shadowOpacity: 1,
    position: "absolute",
  },
  item: {
    left: 0,
    width: 112,
  },
  base: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  treadmill: {
    fontFamily: FontFamily.paragraph03,
    lineHeight: 24,
    fontSize: FontSize.headline06_size,
    marginTop: -12,
    left: "0%",
    width: "100%",
  },
  kcal1: {
    lineHeight: 16,
    fontSize: FontSize.headline07_size,
    left: 32,
    marginTop: -6,
    fontFamily: FontFamily.paragraph03,
  },
  text1: {
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    lineHeight: 26,
    fontSize: FontSize.bodyBody1_size,
    marginTop: -13,
    left: 0,
  },
  line: {
    right: 16,
    height: 4,
    left: 16,
    backgroundColor: Color.new,
    top: 0,
    borderRadius: Border.br_11xs,
  },
  content1: {
    position: "absolute",
  },
  item1: {
    left: 136,
  },
  item2: {
    left: 272,
  },
  cards: {
    top: 408,
    left: 1,
    width: 384,
    height: 112,
    position: "absolute",
  },
});

export default CardContainer;
