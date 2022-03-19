import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PhoneIcon = ({size, color}) => (
  <Svg
    width={size || 18}
    height={size || 18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="m17.487 14.14-4.065-3.696a1 1 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L3.859.513A1 1 0 0 0 2.468.426L.298 2.287a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C8.305 17.707 13.323 18 14.705 18c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39Z"
      fill={color || '#000'}
    />
  </Svg>
);

export default PhoneIcon;
