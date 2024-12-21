import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const GradientBackground = ({
  children,
  colors = ["#4CB8C4", "#3CD3AD"],
  style,
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[
        {
          padding: 16,
          borderRadius: 10,
          marginLeft: 94,
        },
        style, // Allows additional styles to be merged
      ]}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
