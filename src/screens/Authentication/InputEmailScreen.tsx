import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AuthLayout from '@layouts/AuthLayout';
import Form from '@components/Form';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '@config/navigation';
import Button from '@components/Button';

interface FormInput {
  email: string;
}

const schema = yup.object().shape({
  email: yup.string().email().lowercase().required(),
});

const InputEmailScreen = ({
  navigation,
}: NativeStackScreenProps<NavigationParamList, 'InputEmail'>): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid, isDirty, isLoading},
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
    mode: 'all',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: FormInput): void => {
    navigation.navigate('InputOTP', {email: data.email});
  };

  return (
    <AuthLayout title="Hey there 👋">
      <Controller
        name="email"
        defaultValue=""
        control={control}
        render={({field: {onChange, value}}) => (
          <Form
            placeholder="What is your email address?"
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

export default InputEmailScreen;
