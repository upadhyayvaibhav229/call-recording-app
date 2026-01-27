import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// type Props = {
//   title: string;
//   children: React.ReactNode;
// };

const AppNavigation = ({ }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>testing</Text>
      {/* <View>{children}</View> */}
    </View>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#334155',
  },
});
