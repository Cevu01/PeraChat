import * as React from "react";
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SettingsButton = (props) => (
  <Svg
    width={70}
    height={70}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_6_367)">
      <Circle cx={35} cy={35} r={25} fill="#30303B" />
      <Path
        d="M23.0952 29.0476H46.9047"
        stroke="url(#paint0_linear_6_367)"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M23.0952 35H40.9524"
        stroke="url(#paint1_linear_6_367)"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M23.0952 40.9524H35"
        stroke="url(#paint2_linear_6_367)"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_6_367"
        x1={46.9047}
        y1={29.5476}
        x2={23.0952}
        y2={29.5476}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_6_367"
        x1={40.9524}
        y1={35.5}
        x2={23.0952}
        y2={35.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_6_367"
        x1={35}
        y1={41.4524}
        x2={23.0952}
        y2={41.4524}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SettingsButton;
