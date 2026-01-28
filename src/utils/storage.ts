import AsyncStorage from '@react-native-async-storage/async-storage';

const PERMISSION_KEY = 'PERMISSIONS_COMPLETED';

export const setPermissionsCompleted = async () => {
  await AsyncStorage.setItem(PERMISSION_KEY, 'true');
};

export const isPermissionsCompleted = async (): Promise<boolean> => {
  const value = await AsyncStorage.getItem(PERMISSION_KEY);
  return value === 'true';
};

export const clearPermissions = async () => {
  await AsyncStorage.removeItem(PERMISSION_KEY);
};
