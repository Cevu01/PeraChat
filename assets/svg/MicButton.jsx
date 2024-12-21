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
const MicButton = (props) => (
  <Svg
    width={120}
    height={120}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_6_354)">
      <Circle cx={60} cy={60} r={50} fill="#30303B" />
      <Path
        d="M26.6675 54.0479L26.6675 65.9526"
        stroke="url(#paint0_linear_6_354)"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M33 50L33 70"
        stroke="url(#paint1_linear_6_354)"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M38.5718 54.0479L38.5718 65.9526"
        stroke="url(#paint2_linear_6_354)"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M45 51L45 69"
        stroke="url(#paint3_linear_6_354)"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M50 49L50 71"
        stroke="url(#paint4_linear_6_354)"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M56 55L56 65"
        stroke="url(#paint5_linear_6_354)"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M62 47L62 73"
        stroke="url(#paint6_linear_6_354)"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M68 55L68 65"
        stroke="url(#paint7_linear_6_354)"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M74 51L74 69"
        stroke="url(#paint8_linear_6_354)"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M80 51L80 69"
        stroke="url(#paint9_linear_6_354)"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M86 56L86 64"
        stroke="url(#paint10_linear_6_354)"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M92 55L92 65"
        stroke="url(#paint11_linear_6_354)"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_6_354"
        x1={26.1675}
        y1={65.9526}
        x2={26.1675}
        y2={54.0479}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_6_354"
        x1={32.5}
        y1={70}
        x2={32.5}
        y2={50}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_6_354"
        x1={38.0718}
        y1={65.9526}
        x2={38.0718}
        y2={54.0479}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_6_354"
        x1={44.5}
        y1={69}
        x2={44.5}
        y2={51}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_6_354"
        x1={49.5}
        y1={71}
        x2={49.5}
        y2={49}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
      <LinearGradient
        id="paint5_linear_6_354"
        x1={55.5}
        y1={65}
        x2={55.5}
        y2={55}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
      <LinearGradient
        id="paint6_linear_6_354"
        x1={61.5}
        y1={73}
        x2={61.5}
        y2={47}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
      <LinearGradient
        id="paint7_linear_6_354"
        x1={67.5}
        y1={65}
        x2={67.5}
        y2={55}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
      <LinearGradient
        id="paint8_linear_6_354"
        x1={73.5}
        y1={69}
        x2={73.5}
        y2={51}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
      <LinearGradient
        id="paint9_linear_6_354"
        x1={79.5}
        y1={69}
        x2={79.5}
        y2={51}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
      <LinearGradient
        id="paint10_linear_6_354"
        x1={85.5}
        y1={64}
        x2={85.5}
        y2={56}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
      <LinearGradient
        id="paint11_linear_6_354"
        x1={91.5}
        y1={65}
        x2={91.5}
        y2={55}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default MicButton;
