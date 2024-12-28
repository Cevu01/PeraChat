import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { ChatProvider } from "../state/ChatContext";
import { AudioProvider } from "../state/AudioContext";
import { SelectedOptionProvider } from "../state/SelectedOptionContext";
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
  return (
    <SelectedOptionProvider>
      <AudioProvider>
        <ChatProvider>
          <Stack screenOptions={{ headerShown: false, animation: "none" }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="(secondPage)"
              options={{ headerShown: false }}
            />
          </Stack>
        </ChatProvider>
      </AudioProvider>
    </SelectedOptionProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
