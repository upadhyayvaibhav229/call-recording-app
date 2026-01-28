import { PermissionsAndroid, Platform } from 'react-native';

export const requestAllPermissions = async () => {
  if (Platform.OS !== 'android') return true;

  try {
    const result = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]);

    const allGranted = Object.values(result).every(
      status => status === PermissionsAndroid.RESULTS.GRANTED
    );

    return allGranted;
  } catch (error) {
    console.warn('Permission error:', error);
    return false;
  }
};
