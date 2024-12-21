import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const BackButton = (props) => (
  <Svg
    width={55}
    height={55}
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_9_800)">
      <Path
        d="M10 14C10 11.7909 11.7909 10 14 10H41C43.2091 10 45 11.7909 45 14V41C45 43.2091 43.2091 45 41 45H14C11.7909 45 10 43.2091 10 41V14Z"
        fill="#26262E"
      />
      <Path
        d="M35.6667 26.9167H20.5M20.5 26.9167L27.5 33.3333M20.5 26.9167L27.5 20.5"
        stroke="#FBFBFB"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default BackButton;
