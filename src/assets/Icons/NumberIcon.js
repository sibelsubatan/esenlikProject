import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function NumberIcon({size, color}) {
    return (
        <Svg
            width={size || 24}
            height={size || 24}
            fill="#000"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M10.926 7.213a.6.6 0 0 1 .46.713L11.029 9.6H14l.412-1.926a.6.6 0 1 1 1.174.252L15.228 9.6h.973a.6.6 0 0 1 0 1.2h-1.23l-.513 2.4H15.6a.6.6 0 0 1 0 1.2h-1.4l-.413 1.925a.6.6 0 0 1-1.174-.252l.359-1.673H10l-.413 1.926a.6.6 0 1 1-1.174-.252l.36-1.674H7.8a.6.6 0 1 1 0-1.2h1.229l.516-2.4H8.4a.6.6 0 1 1 0-1.2h1.4l.413-1.926a.6.6 0 0 1 .713-.46Zm-.67 5.987h2.973l.515-2.4H10.77l-.515 2.4ZM3.6 6.6a3 3 0 0 1 3-3h10.8a3 3 0 0 1 3 3v10.8a3 3 0 0 1-3 3H6.6a3 3 0 0 1-3-3V6.6Zm3-1.8a1.8 1.8 0 0 0-1.8 1.8v10.8a1.8 1.8 0 0 0 1.8 1.8h10.8a1.8 1.8 0 0 0 1.8-1.8V6.6a1.8 1.8 0 0 0-1.8-1.8H6.6Z"
                fill={color||"#E3BA6A"}
            />
        </Svg>
    );
}

export default NumberIcon;
