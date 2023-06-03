import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const InviteFriendsCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <View style={styles.base} />
        <View style={[styles.text, styles.textPosition]}>
          <Text style={[styles.inviteYourFriends, styles.invitePosition]}>
            Invite your friends to get a free token right away
          </Text>
          <View style={[styles.title, styles.textPosition]}>
            <Text style={[styles.inviteYourFriends1, styles.invitePosition]}>
              Invite your friends
            </Text>
          </View>
        </View>
        <Image
          style={[styles.icon, styles.textPosition]}
          source={require("../assets/add.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    top: "50%",
    position: "absolute",
  },
  invitePosition: {
    width: 191,
    textAlign: "left",
    top: "50%",
    left: 0,
    position: "absolute",
  },
  base: {
    height: "101.39%",
    width: "100.46%",
    top: "-0.69%",
    right: "-0.23%",
    bottom: "-0.69%",
    left: "-0.23%",
    borderRadius: Border.br_5xl,
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1.5,
    opacity: 0.2,
    position: "absolute",
  },
  inviteYourFriends: {
    marginTop: -12,
    fontSize: FontSize.headline06_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.headline06,
    color: Color.colorsBlack100,
  },
  inviteYourFriends1: {
    marginTop: -8,
    fontSize: FontSize.headline07_size,
    lineHeight: 16,
    fontFamily: FontFamily.paragraph03,
    color: Color.gray_100,
  },
  title: {
    right: 0,
    height: 16,
    opacity: 0.6,
    marginTop: -36,
    top: "50%",
    left: 0,
  },
  text: {
    right: 24,
    left: 112,
    height: 72,
    marginTop: -36,
    top: "50%",
  },
  icon: {
    marginTop: -32,
    left: 24,
    width: 64,
    height: 64,
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
    top: 372,
    width: 327,
    height: 108,
    left: 0,
    position: "absolute",
  },
});

export default InviteFriendsCard;
