import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BackButton({size, color}) {
  return (
    <Svg
      width={size || 11}
      height={size || 19}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
        fill={color || '#000'}
      />
    </Svg>
  );
}

export default BackButton;