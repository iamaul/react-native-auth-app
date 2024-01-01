import React from 'react';
import Svg, {Path} from 'react-native-svg';

export interface ArrowNarrowLeftIconProps {
  width?: number | string;
  height?: number | string;
}

const ArrowNarrowLeftIcon = (props: ArrowNarrowLeftIconProps): JSX.Element => {
  const {width, height} = props;

  return (
    <Svg
      width={width || 32}
      height={height || 32}
      viewBox="0 0 32 32"
      fill="none">
      <Path
        d="M9.333 21.333L4 16m0 0l5.333-5.333M4 16h24"
        stroke="#111827"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowNarrowLeftIcon;
