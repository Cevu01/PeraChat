import React from "react";
import { Stack } from "expo-router";

const SecondPageLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="textToSpeach" options={{ headerShown: false }} />
    </Stack>
  );
};

export default SecondPageLayout;
