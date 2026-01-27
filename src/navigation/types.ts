// src/navigation/types.ts

export type RootStackParamList = {
  Splash: undefined;
  Permissions: undefined;
  MainTabs: undefined;
  CallDetail: { callId: string };
  About: undefined;
};

export type BottomTabParamList = {
  Calls: undefined;
  Settings: undefined;
};
