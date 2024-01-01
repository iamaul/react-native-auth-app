import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '@config/navigation';
import {Text, VStack, Center} from 'native-base';
import {fontFamily} from '@common/styles/fonts';
import Button from '@components/Button';
import {useAuthContext} from '@contexts/authContext';
import {AsyncStorageKey} from '@common/constants/asyncStorageKey.constant';
import {removeItemAsyncStorage} from '@common/utils';

const DashboardScreen = ({
  navigation,
}: NativeStackScreenProps<NavigationParamList, 'Home'>): JSX.Element => {
  const {nextState} = useAuthContext();

  const handleLogout = () => {
    nextState({isAuthenticated: false});
    removeItemAsyncStorage(AsyncStorageKey.AUTH_STATE);

    navigation.navigate('Login');
  };

  return (
    <VStack
      paddingTop="230px"
      paddingX="28px"
      position="absolute"
      bottom="28px"
      width="100%">
      <Center>
        <Text
          paddingTop="4px"
          fontSize={12}
          fontFamily={fontFamily.bold}
          marginBottom="10px">
          Welcome
        </Text>
      </Center>
      <Button width="100%" onPress={handleLogout}>
        Logout
      </Button>
    </VStack>
  );
};

export default DashboardScreen;
