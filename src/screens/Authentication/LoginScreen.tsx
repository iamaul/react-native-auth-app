import React from 'react';
import {VStack, Image, Center, HStack, Text} from 'native-base';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';
import {fontFamily} from '@common/styles/fonts';
import image from 'assets/image';
import {Alert, StyleSheet} from 'react-native';
import Form from '@components/Form';
import Button from '@components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '@config/navigation';
import {User} from '@common/types/user';
import {getItemAsyncStorage, setItemAsyncStorage} from '@common/utils';
import {AsyncStorageKey} from '@common/constants/asyncStorageKey.constant';
import {useAuthContext} from '@contexts/authContext';

interface FormInput {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().lowercase().required(),
  password: yup.string().required('Password is required'),
});

const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<NavigationParamList, 'Login'>): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid, isDirty, isLoading},
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
    mode: 'all',
    reValidateMode: 'onChange',
  });

  const {nextState} = useAuthContext();

  const onSubmit = async (data: FormInput): Promise<void> => {
    let userData: User[] = [];

    const getUsers = await getItemAsyncStorage(AsyncStorageKey.USERS);

    if (getUsers) {
      userData = JSON.parse(getUsers);
    }

    const isUserExists = userData.find(
      u => u.email === data.email && u.password === data.password,
    );

    if (isUserExists) {
      nextState({isAuthenticated: true});

      await setItemAsyncStorage({
        key: AsyncStorageKey.AUTH_STATE,
        value: JSON.stringify({isAuthenticated: true}),
      });

      Alert.alert('Success', 'You have successfully logged in', [{text: 'OK'}]);

      navigation.navigate('Home', {email: data.email});
    } else {
      Alert.alert('Error', 'User not found', [{text: 'OK'}]);
    }
  };

  return (
    <VStack safeArea position="relative" height="100%">
      <Image
        height="636px"
        resizeMode="cover"
        source={image.loginBackground}
        alt="login-background"
      />
      <LinearGradient
        style={styles.gradient}
        locations={[0, 0.5]}
        colors={['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 1)']}>
        <VStack
          paddingTop="230px"
          paddingX="28px"
          position="absolute"
          bottom="28px"
          width="100%">
          <HStack space={2} justifyContent="center" bottom="230px">
            <Text fontSize={18} fontFamily={fontFamily.semibold}>
              Welcome to
            </Text>
            <Image
              source={image.logoFull}
              alt="logo-full"
              width="94px"
              height="22px"
              resizeMode="cover"
            />
          </HStack>
          <Center>
            <VStack width="100%" marginBottom="10">
              <Controller
                name="email"
                defaultValue=""
                control={control}
                render={({field: {onChange, value}}) => (
                  <Form
                    placeholder="What is your email?"
                    variant="underlined"
                    value={value}
                    errorMessage={errors.email?.message}
                    onChangeText={onChange}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoFocus
                  />
                )}
              />
              <Controller
                name="password"
                defaultValue=""
                control={control}
                render={({field: {onChange, value}}) => (
                  <Form
                    placeholder="Password"
                    variant="underlined"
                    value={value}
                    errorMessage={errors.password?.message}
                    onChangeText={onChange}
                    type="password"
                    autoCapitalize="none"
                    autoFocus
                  />
                )}
              />
              <Button
                width="100%"
                disabled={!isDirty || !isValid || isLoading}
                isLoading={isLoading}
                onPress={handleSubmit(onSubmit)}>
                Sign In
              </Button>
            </VStack>
            <Text
              fontSize={12}
              fontFamily={fontFamily.light}
              bottom="20px"
              alignContent="center">
              OR
            </Text>
            <Button
              width="100%"
              onPress={() => navigation.navigate('InputEmail')}>
              Sign Up
            </Button>
          </Center>
        </VStack>
      </LinearGradient>
    </VStack>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: '70%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});

export default LoginScreen;
