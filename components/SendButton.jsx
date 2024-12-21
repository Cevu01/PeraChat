import * as React from "react";
import Svg, {
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const SendButton = (props) => (
  <Svg
    width={46}
    height={46}
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={23} cy={23} r={23} fill="url(#paint0_linear_9_836)" />
    <Path
      d="M23.5269 23.0026H17.0132H23.5269ZM16.8286 23.8304L15.7524 26.9467C15.163 28.6534 14.8683 29.5068 15.0798 30.0323C15.2635 30.4887 15.6579 30.8347 16.1447 30.9664C16.7052 31.118 17.5517 30.7487 19.2448 30.0102L30.0993 25.275C31.7519 24.5541 32.5782 24.1937 32.8336 23.6929C33.0555 23.2579 33.0555 22.7473 32.8336 22.3123C32.5782 21.8116 31.7519 21.4511 30.0993 20.7302L19.2261 15.9869C17.5381 15.2506 16.6941 14.8824 16.1342 15.0334C15.6479 15.1646 15.2535 15.5097 15.0692 15.9652C14.857 16.4897 15.1485 17.3413 15.7316 19.0443L16.8307 22.2543C16.9308 22.5468 16.9809 22.6931 17.0007 22.8426C17.0182 22.9754 17.018 23.1098 17.0001 23.2425C16.98 23.392 16.9295 23.5381 16.8286 23.8304Z"
      fill="#FBFBFB"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_9_836"
        x1={46}
        y1={23}
        x2={0}
        y2={23}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4CB8C4" />
        <Stop offset={1} stopColor="#3CD3AD" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SendButton;
