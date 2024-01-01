import AsyncStorage from '@react-native-async-storage/async-storage';

export const getItemAsyncStorage = async (key: string): Promise<string> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
    return '';
  } catch (err) {
    console.error(`Error getting item from AsyncStorage: ${err}`);
    throw err;
  }
};

export const setItemAsyncStorage = async ({
  key,
  value,
}: {
  key: string;
  value: string;
}) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (err) {
    console.error(`Error setting item in AsyncStorage: ${err}`);
    throw err;
  }
};

export const removeItemAsyncStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    console.error(`Error removing item from AsyncStorage: ${err}`);
    throw err;
  }
};

export const clearItemAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (err) {
    console.error(`Error clearing all items in AsyncStorage: ${err}`);
    throw err;
  }
};

export const otpCountdownTimer = (
  number: number,
  padString: string = '0',
  length: number = 2,
) => {
  const str = number.toString();
  return padString.repeat(Math.max(0, length - str.length)) + str;
};
