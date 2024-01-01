import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AuthLayout from '@layouts/AuthLayout';
import Form from '@components/Form';
import Button from '@components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '@config/navigation';
import {getItemAsyncStorage, setItemAsyncStorage} from '@common/utils';
import {AsyncStorageKey} from '@common/constants/asyncStorageKey.constant';
import {User} from '@common/types/user';
import {Alert} from 'react-native';

interface FormInput {
  password: string;
  password_confirmation: string;
}

const schema = yup.object().shape({
  password: yup.string().required('Password is required'),
  password_confirmation: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password'), ''], 'Password confirmation does not match'),
});

const InputPasswordScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<
  NavigationParamList,
  'InputPassword'
>): JSX.Element => {
  const {email} = route.params;

  const {
    control,
    handleSubmit,
    formState: {errors, isValid, isDirty, isLoading},
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
    mode: 'all',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: FormInput): Promise<void> => {
    let userData: User[] = [];

    const getUsers = await getItemAsyncStorage(AsyncStorageKey.USERS);

    if (getUsers) {
      userData = JSON.parse(getUsers);
    }

    const newUserData = [...userData, {email: email, password: data.password}];

    Alert.alert('Success', 'You have successfully signed up', [{text: 'OK'}]);

    navigation.navigate('Login');

    await setItemAsyncStorage({
      key: AsyncStorageKey.USERS,
      value: JSON.stringify(newUserData),
    });
  };

  return (
    <AuthLayout title="Set your password 🔒">
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
      <Controller
        name="password_confirmation"
        defaultValue=""
        control={control}
        render={({field: {onChange, value}}) => (
          <Form
            placeholder="Password confirmation"
            variant="underlined"
            value={value}
            errorMessage={errors.password_confirmation?.message}
            onChangeText={onChange}
            autoCapitalize="none"
            type="password"
          />
        )}
      />
      <Button
        position="absolute"
        bottom="28px"
        left="28px"
        right="28px"
        width="100%"
        disabled={!isDirty || !isValid || isLoading}
        isLoading={isLoading}
        onPress={handleSubmit(onSubmit)}>
        Continue
      </Button>
    </AuthLayout>
  );
};

export default InputPasswordScreen;
