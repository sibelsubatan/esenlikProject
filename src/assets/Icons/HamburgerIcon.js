import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HamburgerIcon({size, color}) {
  return (
    <Svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M21.188 3.75H2.813a.188.188 0 00-.188.188v1.5c0 .103.084.187.188.187h18.375a.188.188 0 00.187-.188v-1.5a.188.188 0 00-.188-.187zm0 14.625H2.813a.188.188 0 00-.188.188v1.5c0 .103.084.187.188.187h18.375a.188.188 0 00.187-.188v-1.5a.188.188 0 00-.188-.187zm0-7.313H2.813a.188.188 0 00-.188.188v1.5c0 .103.084.188.188.188h18.375a.188.188 0 00.187-.188v-1.5a.188.188 0 00-.188-.188z"
        fill={color || '#000'}
      />
    </Svg>
  );
}

export default HamburgerIcon;
