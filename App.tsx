/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './src/navigation/AppNavigation';
import { Text } from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SetupPopup from './src/components/RecordingMetaModal';
const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [showSetup, setShowSetup] = useState(false);

   useEffect(() => {
    const checkSetup = async () => {
      const done = await AsyncStorage.getItem('setupCompleted');
      
      if (!done) {
        setShowSetup(true);
      }
    };

    checkSetup();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <AppNavigator />
         <SetupPopup
          visible={showSetup}
          onDone={() => setShowSetup(false)}
        />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
