import React, {useEffect, useState} from 'react';
import {FormProps} from '@components/Form';
import {FormControl, HStack, Input, Stack} from 'native-base';
import {colors} from '@common/styles/colors';

export interface OTPFormProps extends FormProps {
  onOTPChange: (value: string) => void;
}

const OTPForm: React.FC<OTPFormProps> = (props): JSX.Element => {
  const {
    label,
    errorMessage,
    isRequired,
    isDisabled,
    isReadOnly,
    onOTPChange,
    ...input
  } = props;
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const inputs = Array<number>(6).fill(0);
  let otpTextInput: any[] = [];

  useEffect(() => {
    if (otpTextInput.length) {
      otpTextInput[0].focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const focusPrevious = (key: string, index: number): void => {
    if (key === 'Backspace' && index !== 0) {
      otpTextInput[index - 1].focus();
    }
  };

  const focusNext = (text: string, index: number): void => {
    if (index < otpTextInput.length - 1 && text) {
      otpTextInput[index + 1].focus();
    }
    if (index === otpTextInput.length - 1) {
      otpTextInput[index].blur();
    }

    const updatedOtp = otp;
    updatedOtp[index] = text;
    setOtp(updatedOtp);
    onOTPChange(updatedOtp.join(''));
  };

  return (
    <FormControl
      isRequired={isRequired}
      isInvalid={Boolean(errorMessage)}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}>
      <Stack>
        {label && <FormControl.Label>{label}</FormControl.Label>}
        <HStack paddingTop={0} paddingBottom={1} space={3}>
          {inputs.map((number, index) => (
            <Input
              key={index + 1}
              width="10"
              maxLength={1}
              blurOnSubmit={false}
              keyboardType="numeric"
              borderColor={colors.primary}
              onChangeText={e => focusNext(e, index)}
              onKeyPress={e => focusPrevious(e.nativeEvent.key, index)}
              ref={ref => (otpTextInput[index] = ref)}
              {...input}
            />
          ))}
        </HStack>
        {errorMessage && (
          <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
        )}
      </Stack>
    </FormControl>
  );
};

export default OTPForm;
