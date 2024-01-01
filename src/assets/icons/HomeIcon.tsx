import React from 'react';
import Svg, {Path} from 'react-native-svg';

export interface HomeIconProps {
  width?: number | string;
  height?: number | string;
}

const HomeIcon = (props: HomeIconProps): JSX.Element => {
  const {width, height} = props;

  return (
    <Svg width={width || 24} height={height || 24} fill="none">
      <Path
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        stroke="#111827"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default HomeIcon;
