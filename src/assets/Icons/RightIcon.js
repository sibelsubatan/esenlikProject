import * as React from "react";
import Svg, { Path } from "react-native-svg";

function RightIcon({ size, color }) {
  return (
    <Svg
      width={size || 24}
      height={size || 24}
      fill="#000"
      viewBox="0 0 32 32" >
      <Path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"
            fill={color || "#000"}/>
    </Svg>
  );
}

export default RightIcon;

