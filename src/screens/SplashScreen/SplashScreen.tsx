import React from 'react';
import DashboardLayout from 'layouts/DashboardLayout';
import {HStack, Image, Spinner, Text, VStack} from 'native-base';
import {colors} from '@common/styles/colors';
import image from 'assets/image';

const SplashScreen = () => {
  return (
    <DashboardLayout statusBarBackground="white" statusBarStyle="dark-content">
      <VStack
        h="100%"
        justifyContent="center"
        alignItems="center"
        bgColor={colors.white}
        safeArea>
        <Image
          source={image.logoFull}
          alt="logo-full"
          width="94px"
          height="22px"
          resizeMode="cover"
        />
        <HStack mt="16px">
          <Spinner size="sm" mr="8px" />
          <Text>Loading...</Text>
        </HStack>
      </VStack>
    </DashboardLayout>
  );
};

export default SplashScreen;
