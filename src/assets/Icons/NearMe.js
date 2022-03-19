import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function NearMe({size, color}) {
  return (
    <Svg
      width={size || 24}
      height={size || 24}
      fill="#000"
      viewBox="0 0 171 171"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M143.754,36.46575c2.24438,-5.77837 -3.4485,-11.47125 -9.21975,-9.21975l-109.782,42.68587c-2.03775,0.798 -3.37725,2.75738 -3.37725,4.94475v0c0,2.12325 1.26112,4.03987 3.21337,4.8735l46.66163,19.99988l19.99988,46.66162c0.83362,1.95225 2.75025,3.21338 4.8735,3.21338v0c2.18738,0 4.14675,-1.3395 4.94475,-3.38438z"
        fill={color||"#3498db"}
      />
    </Svg>
  );
}
export default NearMe;
