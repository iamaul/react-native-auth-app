import React from 'react';
import {HStack, VStack, Pressable, Text, StatusBar} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import ArrowNarrowLeftIcon from '@assets/icons/ArrowLeftIcon';
import {colors} from '@common/styles/colors';

export interface AuthLayoutProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = (props): JSX.Element => {
  const {children, title} = props;
  const navigation = useNavigation();

  return (
    <VStack
      paddingX="28px"
      paddingY="24px"
      position="relative"
      height="100%"
      backgroundColor={colors.white}
      safeArea>
      <StatusBar barStyle="default" />
      <HStack>
        <Pressable onPress={() => navigation.goBack()}>
          <ArrowNarrowLeftIcon />
        </Pressable>
      </HStack>
      <Text
        paddingTop="26px"
        paddingBottom="24px"
        lineHeight="30px"
        fontSize="lg"
        fontFamily="Poppins-Medium">
        {title}
      </Text>
      {children}
    </VStack>
  );
};

export default AuthLayout;
