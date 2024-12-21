import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import SendButton from "../components/SendButton";

const MessageInput = ({ value, onChangeText, onSend }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Write a message"
        placeholderTextColor="#B0B0B0"
        style={styles.input}
        value={value} // Povezuje unos sa stanjem
        onChangeText={onChangeText} // Prati promene unosa
      />
      <TouchableOpacity style={styles.sendButton} onPress={onSend}>
        <SendButton />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#30303B", // bg-background-light
    borderRadius: 50,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 40,
  },
  input: {
    flex: 1,
    color: "#FBFBFB", // text-white
    fontSize: 16, // text-base
    marginLeft: 24,
    fontSize: 12,
    fontFamily: "Poppins Regular",
  },
  sendButton: {
    padding: 4,
  },
});

export default MessageInput;
