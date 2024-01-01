import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InputEmailScreen from '@screens/Authentication/InputEmailScreen';
import LoginScreen from '@screens/Authentication/LoginScreen';
import InputOTPScreen from '@screens/Authentication/InputOtpScreen';
import InputPasswordScreen from '@screens/Authentication/InputPasswordScreen';
import DashboardScreen from '@screens/Dashboard/DashboardScreen';
import {useAuthContext} from '@contexts/authContext';
import {AsyncStorageKey} from '@common/constants/asyncStorageKey.constant';
import {getItemAsyncStorage} from '@common/utils';
import SplashScreen from '@screens/SplashScreen/SplashScreen';

export type NavigationParamList = {
  Login: undefined;
  InputEmail: undefined;
  InputOTP: {email: string};
  InputPassword: {email: string};
  Home: {email: string};
};

const NavigationStack = createNativeStackNavigator<NavigationParamList>();

const MainNavigator = () => {
  const {authState, nextState} = useAuthContext();
  const [authStateLoaded, setAuthStateLoaded] = useState(false);

  useEffect(() => {
    const loadAuthState = async () => {
      const authStateData = await getItemAsyncStorage(
        AsyncStorageKey.AUTH_STATE,
      );

      if (authStateData) {
        const parsedAuthState = JSON.parse(authStateData);
        if (parsedAuthState) {
          nextState(parsedAuthState);
        }
      }
      setAuthStateLoaded(true);
    };

    loadAuthState();
  }, [nextState]);

  if (!authStateLoaded) {
    return <SplashScreen />;
  }

  return (
    <NavigationStack.Navigator screenOptions={{headerShown: false}}>
      <>
        {authState.isAuthenticated ? (
          <NavigationStack.Screen name="Home" component={DashboardScreen} />
        ) : (
          <>
            <NavigationStack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                animationTypeForReplace: authState.isAuthenticated
                  ? 'push'
                  : 'pop',
              }}
            />
            <NavigationStack.Screen
              name="InputEmail"
              component={InputEmailScreen}
            />
            <NavigationStack.Screen
              name="InputOTP"
              component={InputOTPScreen}
            />
            <NavigationStack.Screen
              name="InputPassword"
              component={InputPasswordScreen}
            />
          </>
        )}
      </>
    </NavigationStack.Navigator>
  );
};

export default MainNavigator;
