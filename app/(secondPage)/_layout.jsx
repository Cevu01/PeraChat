import React from "react";
import { Stack } from "expo-router";

const SecondPageLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="textToText" options={{ headerShown: false }} />
    </Stack>
  );
};

export default SecondPageLayout;
