import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "react-native";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const ContainerCard = () => {
  return (
    <View style={styles.card}>
      <View style={[styles.cardHeader, styles.cardHeaderFlexBox]}>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={styles.text}>854</Text>
          <View style={[styles.stadistic, styles.parentFlexBox]}>
            <Image
              style={styles.bxUpArrowAltsvgIcon}
              contentFit="cover"
              source={require("../assets/bxuparrowaltsvg.png")}
            />
            <Text style={[styles.upward, styles.upwardTypo]} />
          </View>
        </View>
        <View style={styles.icons}>
          <Image
            style={styles.vectorIconLayout}
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            source={require("../assets/vector1.png")}
          />
        </View>
      </View>
      <View style={[styles.cardBody, styles.cardFlexBox]}>
        <View style={styles.cardHeaderFlexBox}>
          <View style={styles.barLayout}>
            <View style={styles.childPosition1} />
            <View style={[styles.bar1Item, styles.itemPosition]} />
          </View>
          <View style={styles.barLayout}>
            <View style={styles.bar2Child} />
            <View style={[styles.bar2Item, styles.itemPosition]} />
          </View>
          <View style={styles.barLayout}>
            <View style={styles.childPosition} />
            <View style={[styles.bar3Item, styles.itemPosition]} />
          </View>
          <View style={styles.barLayout}>
            <View style={styles.bar4Child} />
            <View style={[styles.bar4Item, styles.itemPosition]} />
          </View>
          <View style={styles.barLayout}>
            <View style={styles.childPosition1} />
            <View style={[styles.bar5Item, styles.itemPosition]} />
          </View>
          <View style={styles.barLayout}>
            <View style={styles.childPosition1} />
            <View style={[styles.bar6Item, styles.itemPosition]} />
          </View>
          <View style={styles.barLayout}>
            <View style={styles.childPosition} />
            <View style={[styles.bar7Item, styles.itemPosition]} />
          </View>
        </View>
      </View>
      <View style={[styles.cardFooter, styles.cardFlexBox]}>
        <Text style={styles.text}>Vertical bar</Text>
        <Text style={[styles.minimDolorIn, styles.upwardTypo]}>
          Minim dolor in amet nulla laboris enim dolore consequatt...
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardHeaderFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  upwardTypo: {
    fontFamily: FontFamily.bodyBody1,
    fontSize: FontSize.bodyBody1_size,
    textAlign: "left",
  },
  vectorIconLayout: {
    height: 4,
    width: 4,
  },
  cardFlexBox: {
    alignSelf: "stretch",
    padding: Padding.p_6xl,
  },
  itemPosition: {
    backgroundColor: Color.lightcoral,
    borderRadius: Border.br_41xl,
    left: "0%",
    top: "0%",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    position: "absolute",
  },
  text: {
    fontSize: FontSize.headlineBoldH4_size,
    fontWeight: "700",
    fontFamily: FontFamily.headlineBoldH4,
    textAlign: "left",
    color: Color.black,
  },
  bxUpArrowAltsvgIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  upward: {
    color: Color.darkcyan,
  },
  stadistic: {
    marginLeft: 5,
  },
  parent: {
    display: "none",
  },
  vectorIcon1: {
    marginTop: 4,
  },
  icons: {
    borderRadius: Border.br_31xl,
    width: 40,
    height: 40,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  cardHeader: {
    display: "none",
    padding: Padding.p_6xl,
    alignItems: "center",
  },
  childPosition1: {
    backgroundColor: Color.aliceblue,
    borderRadius: Border.br_41xl,
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    bottom: "0%",
    height: "100%",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    position: "absolute",
  },
  bar1Item: {
    width: "59.23%",
    right: "40.77%",
    bottom: "0%",
    height: "100%",
    backgroundColor: Color.lightcoral,
  },
  barLayout: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    height: 16,
    width: 146,
  },
  bar2Child: {
    right: "0.28%",
    left: "0.01%",
    bottom: "3.21%",
    top: "-2.64%",
    height: "99.43%",
    width: "99.71%",
    backgroundColor: Color.aliceblue,
    borderRadius: Border.br_41xl,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    position: "absolute",
  },
  bar2Item: {
    width: "31.51%",
    right: "68.49%",
    bottom: "0%",
    height: "100%",
    backgroundColor: Color.lightcoral,
  },
  childPosition: {
    left: "0.06%",
    right: "0.23%",
    bottom: "3.21%",
    top: "-2.64%",
    width: "99.71%",
    height: "99.43%",
    backgroundColor: Color.aliceblue,
    borderRadius: Border.br_41xl,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    position: "absolute",
  },
  bar3Item: {
    width: "75.34%",
    right: "24.66%",
    bottom: "0%",
    height: "100%",
    backgroundColor: Color.lightcoral,
  },
  bar4Child: {
    height: "99.15%",
    top: "-2.63%",
    right: "0.2%",
    bottom: "3.48%",
    left: "0.09%",
    width: "99.71%",
    backgroundColor: Color.aliceblue,
    borderRadius: Border.br_41xl,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    position: "absolute",
  },
  bar4Item: {
    height: "99.72%",
    width: "50.68%",
    right: "49.32%",
    bottom: "0.28%",
  },
  bar5Item: {
    width: "69.23%",
    right: "30.77%",
    bottom: "0%",
    height: "100%",
    backgroundColor: Color.lightcoral,
  },
  bar6Item: {
    width: "90.77%",
    right: "9.23%",
    bottom: "0%",
    height: "100%",
    backgroundColor: Color.lightcoral,
  },
  bar7Item: {
    width: "55.48%",
    right: "44.52%",
    bottom: "0%",
    height: "100%",
    backgroundColor: Color.lightcoral,
  },
  cardBody: {
    padding: Padding.p_6xl,
  },
  minimDolorIn: {
    letterSpacing: 1,
    lineHeight: 23,
    marginTop: 10,
    color: Color.black,
    fontFamily: FontFamily.bodyBody1,
    fontSize: FontSize.bodyBody1_size,
    alignSelf: "stretch",
  },
  cardFooter: {
    display: "none",
    padding: Padding.p_6xl,
    overflow: "hidden",
  },
  card: {
    top: 217,
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorsWhite100,
    width: 321,
    height: 170,
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
});

export default ContainerCard;
