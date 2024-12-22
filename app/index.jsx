import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { router } from "expo-router";
import AnimatedSplash from "react-native-animated-splash-screen";
import LottieView from "lottie-react-native";
import { statusColor } from "../colors";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      router.replace("/firstPage");
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatedSplash
      isLoaded={isLoaded}
      backgroundColor={statusColor}
      customComponent={
        <View>
          <StatusBar backgroundColor={statusColor} />
          <View className="flex-1 items-center justify-center">
            <LottieView
              source={require("../assets/splashScreen.json")}
              autoPlay
              loop
              style={{ width: 200, height: 200 }}
            />
          </View>
        </View>
      }
    ></AnimatedSplash>
  );
}
