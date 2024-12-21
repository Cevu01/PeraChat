import * as React from "react";
import Svg, {
  G,
  Path,
  Mask,
  Rect,
  Defs,
  Pattern,
  Use,
  LinearGradient,
  Stop,
  ClipPath,
  Image,
} from "react-native-svg";
const LogoSmall = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <G clipPath="url(#clip0_6_208)">
      <Path
        d="M27.6667 0H2.33333C1.04467 0 0 1.04467 0 2.33333V27.6667C0 28.9553 1.04467 30 2.33333 30H27.6667C28.9553 30 30 28.9553 30 27.6667V2.33333C30 1.04467 28.9553 0 27.6667 0Z"
        fill="url(#paint0_linear_6_208)"
      />
      <Path
        d="M15.0366 17.8734L12.0433 8.70336L10.2033 12.18H5.33325V10.8467H9.39992L12.3333 5.29669L15.2166 14.1267L17.9466 7.87003L20.1966 10.8467H24.3333V12.18H19.5333L18.2566 10.4934L15.0366 17.8734Z"
        fill="#FBFBFB"
      />
      <Mask
        id="mask0_6_208"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={5}
        y={5}
        width={20}
        height={13}
      >
        <Path
          d="M15.0366 17.8734L12.0433 8.70336L10.2033 12.18H5.33325V10.8467H9.39992L12.3333 5.29669L15.2166 14.1267L17.9466 7.87003L20.1966 10.8467H24.3333V12.18H19.5333L18.2566 10.4934L15.0366 17.8734Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask0_6_208)">
        <Rect
          x={5.03662}
          y={5.29669}
          width={19.3333}
          height={12.6667}
          fill="url(#pattern0_6_208)"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.83 18.3333C19.9 20.6766 17.6133 22.3333 14.94 22.3333C12.2666 22.3333 9.97995 20.6766 9.04995 18.3333H7.28662C8.28662 21.6133 11.3333 24 14.94 24C18.5466 24 21.5966 21.6133 22.5933 18.3333H20.83Z"
        fill="#FBFBFB"
      />
      <Mask
        id="mask1_6_208"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={7}
        y={18}
        width={16}
        height={6}
      >
        <Path
          d="M20.83 18.3333C19.9 20.6766 17.6133 22.3333 14.94 22.3333C12.2666 22.3333 9.97995 20.6766 9.04995 18.3333H7.28662C8.28662 21.6133 11.3333 24 14.94 24C18.5466 24 21.5966 21.6133 22.5933 18.3333H20.83Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask1_6_208)">
        <Rect
          x={7.03662}
          y={18.2966}
          width={15.6667}
          height={6}
          fill="url(#pattern1_6_208)"
        />
      </G>
    </G>
    <Defs>
      <Pattern
        id="pattern0_6_208"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_6_208" transform="scale(0.0172414 0.0263158)" />
      </Pattern>
      <Pattern
        id="pattern1_6_208"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image1_6_208" transform="scale(0.0212766 0.0555556)" />
      </Pattern>
      <LinearGradient
        id="paint0_linear_6_208"
        x1={0}
        y1={15}
        x2={30}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
      <ClipPath id="clip0_6_208">
        <Rect width={30} height={30} fill="white" />
      </ClipPath>
      <Image
        id="image0_6_208"
        width={58}
        height={38}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAmCAYAAACVr4jIAAAACXBIWXMAAAsSAAALEgHS3X78AAAAS0lEQVRoge3PQQ3AMBDAsLb8Gd9jZbFJmY0g2TPzrB84Xwe8xWiN0RqjNUZrjNYYrTFaY7TGaI3RGqM1RmuM1hitMVpjtMZojdGaC3HfBDyMdeE8AAAAAElFTkSuQmCC"
      />
      <Image
        id="image1_6_208"
        width={47}
        height={18}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAASCAYAAADLw4ffAAAACXBIWXMAAAsSAAALEgHS3X78AAAAM0lEQVRIie3OsQ0AMAgEsZD9N/4ChqA4IZ0ncCXpd9SnAxvmKeYp5inmKeYp5inmKeYpA0kbBBT/j/X4AAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);
export default LogoSmall;
