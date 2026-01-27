import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  StatusBar,
  Platform 
} from 'react-native';

type Props = {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightAction?: {
    icon: string;
    onPress: () => void;
  };
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  elevated?: boolean;
};

const Header: React.FC<Props> = ({ 
  title,
  showBackButton = false,
  onBackPress,
  rightAction,
  subtitle,
  backgroundColor = '#0f172a',
  textColor = '#ffffff',
  elevated = true
}) => {
  return (
    <View style={[
      styles.wrapper,
      { backgroundColor },
      elevated && styles.elevated
    ]}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={backgroundColor} 
      />
      
      <View style={styles.statusBarSpacer} />
      
      <View style={styles.container}>
        {/* Left Section */}
        <View style={styles.leftSection}>
          {showBackButton && (
            <TouchableOpacity 
              style={styles.backButton}
              onPress={onBackPress}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              activeOpacity={0.7}
            >
              <Text style={[styles.backIcon, { color: textColor }]}>←</Text>
              <Text style={[styles.backText, { color: textColor }]}>Back</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Center Section */}
        <View style={styles.centerSection}>
          <Text 
            style={[
              styles.title,
              { color: textColor },
              subtitle && styles.titleWithSubtitle
            ]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
          
          {subtitle && (
            <Text 
              style={[styles.subtitle, { color: `${textColor}99` }]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {subtitle}
            </Text>
          )}
        </View>

        {/* Right Section */}
        <View style={styles.rightSection}>
          {rightAction && (
            <TouchableOpacity 
              style={styles.rightButton}
              onPress={rightAction.onPress}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              activeOpacity={0.7}
            >
              <Text style={[styles.rightIcon, { color: textColor }]}>
                {rightAction.icon}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    zIndex: 100,
  },
  elevated: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  statusBarSpacer: {
    height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    minHeight: 56,
  },
  leftSection: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerSection: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  backIcon: {
    fontSize: 20,
    fontWeight: '600',
    marginRight: 4,
  },
  backText: {
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  titleWithSubtitle: {
    fontSize: 17,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  rightButton: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  rightIcon: {
    fontSize: 22,
    fontWeight: '400',
  },
});