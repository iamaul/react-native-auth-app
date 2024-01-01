import {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

type RestartCountDownType = (countdown?: number) => void;
type UseCountdownType = (
  seconds: number,
) => [number, number, RestartCountDownType];

const useCountdown: UseCountdownType = (seconds: number) => {
  const [countDownLeft, setCountDownLeft] = useState<number>(seconds);

  const restartCountDown: RestartCountDownType = (countdown = seconds) => {
    setCountDownLeft(countdown);
  };

  useFocusEffect(
    useCallback(() => {
      if (countDownLeft <= 0) {
        return;
      }

      const interval = setInterval(() => {
        setCountDownLeft(cd => cd - 1);
      }, 1000);

      return () => clearInterval(interval);
    }, [countDownLeft]),
  );

  const minutes = Math.floor(countDownLeft / 60);
  const secondsLeft = countDownLeft - minutes * 60;

  return [minutes, secondsLeft, restartCountDown];
};

export default useCountdown;
