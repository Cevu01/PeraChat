// RadialCircle.js
import React from "react";
import { Svg, Defs, RadialGradient, Stop, Circle } from "react-native-svg";

export default function RadialCircle() {
  return (
    <Svg height="230" width="230" style={{ position: "absolute" }}>
      <Defs>
        <RadialGradient
          id="grad"
          cx="50%"
          cy="50%"
          r="50%"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor="#4CB8C4" stopOpacity="1" />
          <Stop offset="100%" stopColor="#3CD3AD" stopOpacity="0" />
        </RadialGradient>
      </Defs>
      <Circle cx="115" cy="115" r="115" fill="url(#grad)" />
    </Svg>
  );
}
