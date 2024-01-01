import React, {useCallback, useEffect} from 'react';
import AuthLayout from '@layouts/AuthLayout';
import Button from '@components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '@config/navigation';
import OTPForm from '@components/otp/OtpForm';
import {useState} from 'react';
import useCountdown from '@common/hooks/useCountdown';
import {otpCountdownTimer} from 'common/utils';
import {Text} from 'native-base';
import {fontFamily} from '@common/styles/fonts';

const OTP_COUNTDOWN = 30;
const OTP_CODE = '111111';

const InputOTPScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<NavigationParamList, 'InputOTP'>): JSX.Element => {
  const {email} = route.params;
  const [otp, setOtp] = useState<string>('');

  const [minute, second, restartCountdownTimer] = useCountdown(OTP_COUNTDOWN);
  const isCountdownEnded = minute + second <= 0;

  const renderErrors = useCallback((): string | undefined => {
    if (otp && otp.length < 6) {
      return 'OTP needs 6 characters';
    } else if (otp !== OTP_CODE) {
      return 'Incorrect OTP code';
    }
    return undefined;
  }, [otp]);

  useEffect(() => {
    if (otp === OTP_CODE) {
      navigation.push('InputPassword', {email});
    } else {
      renderErrors();
    }
  }, [email, navigation, otp, renderErrors]);

  const renderCountdownTimer = useCallback(
    (minutes: number, seconds: number) => (
      <Text fontFamily={fontFamily.light}>
        {`Resend OTP (${otpCountdownTimer(minutes, '0', 2)}:${otpCountdownTimer(
          seconds,
          '0',
          2,
        )})`}
      </Text>
    ),
    [],
  );

  return (
    <AuthLayout title="OTP Verification 🔐">
      <OTPForm
        label={`We have sent OTP to your ${email} email, please enter the OTP to set your new password.`}
        variant="underlined"
        onOTPChange={value => setOtp(value)}
        errorMessage={renderErrors()}
      />
      <Button
        position="absolute"
        bottom="28px"
        left="28px"
        right="28px"
        width="100%"
        disabled={otp.length < 6 || !isCountdownEnded}
        onPress={() => restartCountdownTimer()}>
        {renderCountdownTimer(minute, second)}
      </Button>
    </AuthLayout>
  );
};

export default InputOTPScreen;
