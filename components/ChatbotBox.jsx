import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LogoSmall from "../assets/svg/LogoSmall";

const HeaderWithLogo = () => {
  return (
    <View style={styles.container}>
      <LogoSmall />
      <Text style={styles.text}>Chatbot</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  text: {
    fontSize: 18, // text-[18px]
    color: "#FBFBFB", // text-text-color
    fontWeight: "500", // font-medium
    fontFamily: "Poppins Medium",
    lineHeight: 27,
  },
});

export default HeaderWithLogo;
