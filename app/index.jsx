import { TouchableOpacity, View, Text } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function App() {
  return (
    <View>
      <TouchableOpacity
        onPress={() => router.push("/(secondPage)/textToSpeach")}
      >
        <Text>Klikni me</Text>
      </TouchableOpacity>
    </View>
  );
}
