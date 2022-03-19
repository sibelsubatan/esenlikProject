import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function OfferIcon({size, color}) {
  return (
    <Svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="#000"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M21 13c.6 0 1.1.2 1.4.6.4.4.6.9.6 1.4l-8 3-7-2V7h1.9l7.3 2.7c.5.2.8.6.8 1.1 0 .3-.1.6-.3.8-.2.2-.5.4-.9.4H14l-1.7-.7-.3.9 2 .8h7zM2 7h4v11H2V7z"
        fill={color || '#E3BA6A'}
      />
    </Svg>
  );
}

export default OfferIcon;
