import React from 'react';
import {Button as NativeButton, IButtonProps} from 'native-base';

export interface ButtonProps extends IButtonProps {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props): JSX.Element => {
  const {children, isLoadingText, ...other} = props;

  return (
    <NativeButton isLoadingText={isLoadingText || 'Loading'} {...other}>
      {children}
    </NativeButton>
  );
};

export default Button;
