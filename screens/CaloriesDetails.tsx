import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";

const CaloriesDetails = () => {
  return (
    <ScrollView style={{backgroundColor:  '#FFFFFF'}}>
      <View style={{backgroundColor: '#FFFFFF',top:-100}}>
      <View style={styles.caloriesdetails}>
        <View style={{top:0}} />
          <Image
            style={[styles.baseIcon, styles.iconPosition]}
            source={require("../assets/base.png")}
          />
          <View style={styles.kilometers}>
              <View style={[styles.body1, styles.bodyPosition]}>
                <Text style={[styles.points1, styles.homeFlexBox]}>Kilometers</Text>
              </View>
              <Text style={[styles.text, styles.textTypo4]}>4.84</Text>
          </View>
          <View style={[styles.body5, styles.body5Position]}>
            <Text style={[styles.points1, styles.homeFlexBox]}>Time</Text>
          </View>
          <Text style={[styles.text10, styles.body5Position]}>24:06</Text>
          <View style={[styles.body6, styles.body6Position]}>
            <Text style={[styles.points1, styles.homeFlexBox]}>Calories</Text>
          </View>
          <Text style={[styles.text11, styles.body6Position]}>480</Text>
          <Image
            style={[styles.chartIcon, styles.iconPosition]}
            source={require("../assets/chart1.png")}
          />
          <Text
            style={[styles.totalKilocalories1, styles.datePosition]}
          >{`Total Kilocalories `}</Text>
          <Text style={[styles.text12, styles.datePosition]}>4880</Text>

          <View style={[styles.date, styles.datePosition]}>
            <Text style={[styles.today, styles.textFlexBox]}>Today</Text>
            <Text style={[styles.thu08July, styles.textFlexBox]}>Thu, 08 July</Text>
          </View>
          <View style={styles.tab}>
            <View style={[styles.base5, styles.baseBg]} />
            <View style={[styles.item11, styles.itemPosition]}>
              <View style={[styles.content, styles.basePosition]}>
                <View style={[styles.base6, styles.basePosition]} />
                <Text style={[styles.active1, styles.normalPosition]}>Daily</Text>
              </View>
            </View>
            <View style={[styles.item2, styles.itemPosition]}>
              <View style={[styles.content, styles.basePosition]}>
                <View style={[styles.base7, styles.basePosition]} />
                <Text style={[styles.normal, styles.normalPosition]}>Weekly</Text>
              </View>
            </View>
            <View style={[styles.item3, styles.itemPosition]}>
              <View style={[styles.content, styles.basePosition]}>
                <View style={[styles.base7, styles.basePosition]} />
                <Text style={[styles.normal, styles.normalPosition]}>Monthly</Text>
              </View>
            </View>
          </View>
          <View style={[styles.title1, styles.datePosition]}>
            <View style={[styles.body7, styles.bodyPosition]}>
              <Text style={[styles.steps2, styles.totalTypo]}>1 240 Steps</Text>
            </View>
            <Text style={[styles.steps3, styles.steps3Typo]}>Steps</Text>
          </View>
          <View style={[styles.base9, styles.baseBg]} />
          <Image
            style={styles.vectorIcon}
            source={require("../assets/vector2.png")}
          />
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bodyPosition1: {
    left: 0,
    top: 0,
  },
  stepsPosition: {
    width: "33.33%",
    marginTop: -26,
    height: 52,
    top: "50%",
    position: "absolute",
  },
  bodyPosition: {
    opacity: 0.6,
    left: "0%",
    right: "0%",
    top: "50%",
    position: "absolute",
    width: "100%",
  },
  homeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  textTypo4: {
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
  },
  text2Position: {
    left: "0.26%",
    right: "14.81%",
    width: "84.94%",
    top: "50%",
    position: "absolute",
  },
  totalTypo: {
    lineHeight: 26,
    fontSize: FontSize.bodyBody1_size,
    textAlign: "center",
    color: Color.gray_100,
    fontFamily: FontFamily.paragraph03,
  },
  kcalTypo: {
    lineHeight: 46,
    fontSize: FontSize.headline01_size,
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    textAlign: "center",
  },
  baseLayout: {
    width: "100%",
    left: "0%",
  },
  textTypo3: {
    width: "7.34%",
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.headline06_size,
    marginTop: -12,
    top: "50%",
    position: "absolute",
  },
  basePosition: {
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  steps3Typo: {
    lineHeight: 34,
    fontSize: FontSize.headline02_size,
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    left: "0%",
    top: "50%",
    width: "100%",
  },
  iconPosition: {
    width: 400,
    left: -10,
    position: "absolute",
  },
  appbarLayout: {
    height: 105,
    width: 375,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    width: "16%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  body5Position: {
    left: "35.47%",
    width: "29.07%",
    top: "50%",
    position: "absolute",
  },
  base4Layout: {
    width: "3.2%",
    height: "1.48%",
  },
  baseShadowBox: {
    shadowColor: "rgba(255, 96, 121, 0.4)",
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.lightcoral,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  body6Position: {
    left: "6.4%",
    width: "29.07%",
    top: "50%",
    position: "absolute",
  },
  triangleIconLayout: {
    width: "2.13%",
    height: "0.74%",
    borderRadius: Border.br_12xs,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  datePosition: {
    width: "87.2%",
    left: "6.4%",
    top: "50%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  baseBg: {
    opacity: 0.1,
    backgroundColor: Color.lightcoral,
    position: "absolute",
  },
  itemPosition: {
    bottom: "5.88%",
    top: "5.88%",
    width: "32.88%",
    height: "88.24%",
    position: "absolute",
  },
  normalPosition: {
    left: "8.33%",
    width: "83.33%",
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.headline06_size,
    marginTop: -12,
    top: "50%",
    position: "absolute",
  },
  points1: {
    color: Color.gray_100,
    fontFamily: FontFamily.paragraph03,
    lineHeight: 24,
    fontSize: FontSize.headline06_size,
    left: "0%",
    top: "50%",
    width: "100%",
    marginTop: -12,
  },
  body1: {
    marginTop: 2,
    height: 24,
  },
  text: {
    color: Color.colorsBlack100,
    lineHeight: 28,
    fontSize: FontSize.headline04_size,
    fontWeight: "700",
    textAlign: "center",
    left: "0%",
    marginTop: -26,
    top: "50%",
    position: "absolute",
    width: "100%",
  },
  points: {
    left: "66.67%",
    right: "0%",
  },
  steps: {
    right: "33.33%",
    left: "33.33%",
  },
  distance: {
    right: "66.67%",
    left: "0%",
  },
  info: {
    marginTop: -88,
    height: 52,
    left: "0.26%",
    right: "14.81%",
    top: "50%",
    width: "84.94%",
    position: "absolute",
  },
  totalKilocalories: {
    marginTop: 12,
    left: "0%",
    top: "50%",
    position: "absolute",
    width: "100%",
  },
  kcal: {
    marginTop: -38,
    left: "0%",
    top: "50%",
    position: "absolute",
    width: "100%",
  },
  text2: {
    marginTop: -196,
    height: 76,
  },
  text3: {
    left: "0%",
  },
  text4: {
    left: "11.01%",
  },
  text5: {
    left: "22.02%",
  },
  text6: {
    left: "70.64%",
  },
  text7: {
    left: "81.65%",
  },
  text8: {
    left: "92.66%",
  },
  day: {
    opacity: 0.4,
    marginTop: -12,
    height: 24,
    left: "0%",
    right: "0%",
    top: "50%",
    position: "absolute",
  },
  base: {
    borderRadius: Border.br_base,
    backgroundColor: "#ffffff",
    opacity: 0.2,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "110%",
  },
  today8Jul: {
    width: "92.79%",
    left: "3.6%",
    color: Color.colorsBlack100,
    textAlign: "center",
    position: "absolute",
    lineHeight: 24,
    fontWeight: "700",
    fontSize: FontSize.headline06_size,
    marginTop: -12,
    top: "50%",
  },
  active: {
    width: "33.94%",
    right: "33.03%",
    left: "33.03%",
    position: "absolute",
  },
  calendar: {
    marginTop: -260,
    height: 32,
  },
  statistical: {
    top: 295,
    left: 23,
    width: 385,
    height: 520,
    position: "absolute",
  },
  yourActivities: {
    marginTop: 0,
    textAlign: "center",
    position: "absolute",
  },
  today8Jul1: {
    marginTop: -34,
    left: "0%",
    top: "50%",
    position: "absolute",
    width: "100%",
  },
  title: {
    marginTop: -220.5,
    width: "80.15%",
    right: "13.97%",
    left: "5.88%",
    height: 68,
    top: "50%",
    position: "absolute",
  },
  userIcon: {
    height: 187,
    top: 0,
    width: 375,
  },
  body: {
    width: 408,
    height: 815,
    position: "absolute",
  },
  base1: {
    borderRadius: Border.br_21xl,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorsWhite100,
    height: "100%",
  },
  item5Icon: {
    right: "5.33%",
    left: "78.67%",
    width: "16%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  item4Icon: {
    right: "22.67%",
    left: "61.33%",
    width: "16%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  playIcon: {
    height: "61.9%",
    width: "17.33%",
    right: "41.33%",
    bottom: "38.1%",
    left: "41.33%",
    top: "0%",
    maxWidth: "100%",
  },
  item2Icon: {
    right: "61.33%",
    left: "22.67%",
    width: "16%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  dotIcon: {
    height: "3.81%",
    width: "6.67%",
    top: "61.9%",
    right: "46.67%",
    bottom: "34.29%",
    left: "46.67%",
  },
  home: {
    marginTop: -11.5,
    width: "86.67%",
    left: "6.67%",
    color: Color.colorsBlack100,
    textAlign: "center",
    position: "absolute",
    lineHeight: 24,
    fontWeight: "700",
    fontSize: FontSize.headline06_size,
    top: "50%",
  },
  item1: {
    right: "78.67%",
    left: "5.33%",
    position: "absolute",
  },
  appbar1: {
    left: 0,
    top: 0,
  },
  appbar: {
    top: 707,
    left: -1,
  },
  caloriesdetailsChild: {
    backgroundColor: Color.black,
    opacity: 0.3,
    top: 0,
    width: 375,
    height: 812,
  },
  baseIcon: {
    top: 93,
    height: 732,
  },
  base2: {
    shadowColor: "#FFFFFF",
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.lightcoral,
    borderRadius: Border.br_3xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "120%",
  },
  triangleIcon: {
    height: "50%",
    width: "66.67%",
    top: "33.33%",
    right: "9.44%",
    bottom: "16.67%",
    left: "23.89%",
    borderRadius: Border.br_12xs,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  percent: {
    height: "23.08%",
    width: "11.01%",
    top: "11.54%",
    right: "17.43%",
    bottom: "65.38%",
    left: "71.56%",
    position: "absolute",
  },
  kilometers: {
    left: "64.53%",
    right: "6.4%",
    width: "29.07%",
    marginTop: 327,
    height: 52,
    top: "50%",
    position: "absolute",
  },
  body5: {
    right: "35.47%",
    marginTop: 355,
    opacity: 0.6,
    height: 24,
  },
  text10: {
    marginTop: 327,
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.headline04_size,
    textAlign: "center",
  },
  base3: {
    bottom: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  percent1: {
    top: "91.01%",
    right: "39.2%",
    bottom: "7.51%",
    left: "57.6%",
    position: "absolute",
  },
  body6: {
    right: "64.53%",
    marginTop: 355,
    opacity: 0.6,
    height: 24,
  },
  text11: {
    marginTop: 327,
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.headline04_size,
    textAlign: "center",
  },
  base4: {
    top: "91.26%",
    right: "68%",
    bottom: "7.27%",
    left: "28.8%",
    width: "3.2%",
    height: "1.48%",
  },
  triangleIcon2: {
    top: "91.6%",
    right: "68.3%",
    bottom: "7.66%",
    left: "29.56%",
  },
  chartIcon: {
    top: 525,
    height: 176,
  },
  totalKilocalories1: {
    marginTop: 269,
    lineHeight: 26,
    fontSize: FontSize.bodyBody1_size,
    textAlign: "center",
    color: Color.gray_100,
    fontFamily: FontFamily.paragraph03,
  },
  text12: {
    marginTop: 219,
    lineHeight: 46,
    fontSize: FontSize.headline01_size,
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    textAlign: "center",
  },
  text13: {
    marginTop: 243,
    left: "71.73%",
    color: Color.colorsWhite100,
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.headline07_size,
    fontFamily: FontFamily.headline06,
    top: "50%",
  },
  triangleIcon3: {
    top: "80.76%",
    right: "26.17%",
    bottom: "18.5%",
    left: "71.7%",
  },
  text14: {
    marginTop: 242,
    left: "72.53%",
    color: Color.colorsWhite100,
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.headline07_size,
    fontFamily: FontFamily.headline06,
    top: "50%",
  },
  today: {
    marginTop: -31,
    color: Color.gray_100,
    fontFamily: FontFamily.paragraph03,
    lineHeight: 24,
    fontSize: FontSize.headline06_size,
    left: "0%",
    top: "50%",
    width: "100%",
  },
  thu08July: {
    marginTop: -3,
    lineHeight: 34,
    fontSize: FontSize.headline02_size,
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    left: "0%",
    top: "50%",
    width: "100%",
  },
  date: {
    marginTop: 33,
    height: 62,
    right: "6.4%",
  },
  base5: {
    borderRadius: Border.br_81xl,
    bottom: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  base6: {
    borderRadius: Border.br_81xl,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorsWhite100,
    height: "100%",
  },
  active1: {
    color: Color.lightcoral,
  },
  content: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  item11: {
    right: "66.44%",
    left: "0.68%",
  },
  base7: {
    borderRadius: Border.br_81xl,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  normal: {
    color: Color.colorsBlack100,
  },
  item2: {
    right: "33.56%",
    left: "33.56%",
  },
  item3: {
    right: "0.68%",
    left: "66.44%",
  },
  tab: {
    top: 373,
    left: 24,
    width: 327,
    height: 34,
    position: "absolute",
  },
  steps2: {
    marginTop: -13,
    left: "0%",
    top: "50%",
    position: "absolute",
    width: "100%",
  },
  body7: {
    marginTop: 6,
    height: 26,
  },
  steps3: {
    marginTop: -32,
    textAlign: "center",
    position: "absolute",
  },
  title1: {
    marginTop: -121,
    height: 64,
    right: "6.4%",
  },
  base9: {
    top: 149,
    left: 128,
    borderRadius: Border.br_41xl,
    width: 120,
    height: 120,
  },
  vectorIcon: {
    top: 188,
    left: 166,
    width: 44,
    height: 41,
    position: "absolute",
  },
  caloriesdetailsItem: {
    top: 640,
    left: 241,
    width: 38,
    height: 17,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  caloriesdetailsInner: {
    top: 645,
    left: 249,
    width: 4,
    height: 7,
    position: "absolute",
  },
  text15: {
    top: 617,
    left: 447,
    color: Color.black,
    width: 21,
    height: 10,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.headline06_size,
  },
  text16: {
    top: 636,
    left: 257,
    fontSize: 8,
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorsWhite100,
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 24,
  },
  caloriesdetails: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    left:20,
    backgroundColor: Color.colorsWhite100,
  },
});

export default CaloriesDetails;
