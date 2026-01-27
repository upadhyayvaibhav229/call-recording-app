import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  View 
} from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const PrimaryButton: React.FC<Props> = ({ 
  label, 
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  style,
  textStyle
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          container: styles.secondaryButton,
          text: styles.secondaryText,
          disabledContainer: styles.secondaryButtonDisabled,
          disabledText: styles.secondaryTextDisabled,
        };
      case 'outline':
        return {
          container: styles.outlineButton,
          text: styles.outlineText,
          disabledContainer: styles.outlineButtonDisabled,
          disabledText: styles.outlineTextDisabled,
        };
      case 'danger':
        return {
          container: styles.dangerButton,
          text: styles.dangerText,
          disabledContainer: styles.dangerButtonDisabled,
          disabledText: styles.dangerTextDisabled,
        };
      default:
        return {
          container: styles.primaryButton,
          text: styles.primaryText,
          disabledContainer: styles.primaryButtonDisabled,
          disabledText: styles.primaryTextDisabled,
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return { container: styles.smallButton, text: styles.smallText };
      case 'large':
        return { container: styles.largeButton, text: styles.largeText };
      default:
        return { container: styles.mediumButton, text: styles.mediumText };
    }
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  const containerStyle = [
    styles.baseButton,
    variantStyles.container,
    sizeStyles.container,
    fullWidth && styles.fullWidth,
    disabled && variantStyles.disabledContainer,
    style,
  ];

  const textStyleComposed = [
    styles.baseText,
    variantStyles.text,
    sizeStyles.text,
    disabled && variantStyles.disabledText,
    textStyle,
  ];

  const handlePress = () => {
    if (!disabled && !loading) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={handlePress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color={
            variant === 'outline' 
              ? '#2563eb' 
              : variant === 'secondary' 
                ? '#4b5563' 
                : '#ffffff'
          } 
        />
      ) : (
        <View style={styles.content}>
          {leftIcon && (
            <Text style={[styles.icon, variantStyles.text, disabled && variantStyles.disabledText]}>
              {leftIcon}
            </Text>
          )}
          <Text style={textStyleComposed} numberOfLines={1}>
            {label}
          </Text>
          {rightIcon && (
            <Text style={[styles.icon, variantStyles.text, disabled && variantStyles.disabledText]}>
              {rightIcon}
            </Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  baseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 2,
    overflow: 'hidden',
  },
  baseText: {
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  
  // Variant Styles
  primaryButton: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb',
  },
  primaryText: {
    color: '#ffffff',
  },
  primaryButtonDisabled: {
    backgroundColor: '#93c5fd',
    borderColor: '#93c5fd',
  },
  primaryTextDisabled: {
    color: '#dbeafe',
  },
  
  secondaryButton: {
    backgroundColor: '#f3f4f6',
    borderColor: '#f3f4f6',
  },
  secondaryText: {
    color: '#4b5563',
  },
  secondaryButtonDisabled: {
    backgroundColor: '#f9fafb',
    borderColor: '#f9fafb',
  },
  secondaryTextDisabled: {
    color: '#9ca3af',
  },
  
  outlineButton: {
    backgroundColor: 'transparent',
    borderColor: '#2563eb',
  },
  outlineText: {
    color: '#2563eb',
  },
  outlineButtonDisabled: {
    borderColor: '#93c5fd',
  },
  outlineTextDisabled: {
    color: '#93c5fd',
  },
  
  dangerButton: {
    backgroundColor: '#dc2626',
    borderColor: '#dc2626',
  },
  dangerText: {
    color: '#ffffff',
  },
  dangerButtonDisabled: {
    backgroundColor: '#fca5a5',
    borderColor: '#fca5a5',
  },
  dangerTextDisabled: {
    color: '#fef2f2',
  },
  
  // Size Styles
  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  smallText: {
    fontSize: 13,
  },
  
  mediumButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  mediumText: {
    fontSize: 15,
  },
  
  largeButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  largeText: {
    fontSize: 16,
  },
  
  // Other Styles
  fullWidth: {
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  icon: {
    fontSize: 18,
  },
});