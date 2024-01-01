import React from 'react';
import {StatusBar, VStack} from 'native-base';
import {colors} from '@common/styles/colors';
import {ColorValue, StatusBarStyle} from 'react-native';

export interface DashboardLayoutProps {
  children?: React.ReactNode;
  translucent?: boolean;
  statusBarBackground?: ColorValue;
  statusBarStyle?: StatusBarStyle;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (
  props,
): JSX.Element => {
  const {children, translucent, statusBarBackground, statusBarStyle} = props;

  return (
    <VStack position="relative" height="100%" backgroundColor={colors.white}>
      <StatusBar
        barStyle={statusBarStyle || 'default'}
        translucent={translucent || false}
        backgroundColor={statusBarBackground}
      />
      {children}
    </VStack>
  );
};

export default DashboardLayout;
