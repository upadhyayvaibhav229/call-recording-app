import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import CallListScreen from '../screens/CallListScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { BottomTabParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

// Custom Tab Icon Component
const TabIcon = ({ focused, icon, label }: { focused: boolean; icon: string; label: string }) => {
  return (
    <View style={styles.tabContainer}>
      <View style={[
        styles.iconContainer,
        focused && styles.iconContainerFocused
      ]}>
        <Text style={[
          styles.icon,
          focused && styles.iconFocused
        ]}>
          {icon}
        </Text>
      </View>
      <Text style={[
        styles.label,
        focused && styles.labelFocused
      ]}>
        {label}
      </Text>
      {focused && <View style={styles.activeIndicator} />}
    </View>
  );
};

const BottomTabs: React.FC = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBar,
      tabBarBackground: () => (
        <View style={styles.tabBarBackground} />
      ),
    }}
  >
    <Tab.Screen 
      name="Calls" 
      component={CallListScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabIcon 
            focused={focused} 
            icon="📞" 
            label="Calls" 
          />
        ),
      }}
    />
    <Tab.Screen 
      name="Settings" 
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabIcon 
            focused={focused} 
            icon="⚙️" 
            label="Settings" 
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabs;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    height: 80,
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 0,
    shadowColor: 'transparent',
  },
  tabBarBackground: {
    position: 'absolute',
    top: 0,
    left: 20,
    right: 20,
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 8,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  iconContainerFocused: {
    backgroundColor: '#2563EB',
    borderColor: '#FFFFFF',
    shadowColor: '#2563EB',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  icon: {
    fontSize: 20,
    color: '#64748B',
  },
  iconFocused: {
    color: '#FFFFFF',
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
    letterSpacing: 0.3,
  },
  labelFocused: {
    color: '#2563EB',
    fontWeight: '700',
  },
  activeIndicator: {
    position: 'absolute',
    top: -12,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#2563EB',
  },
});