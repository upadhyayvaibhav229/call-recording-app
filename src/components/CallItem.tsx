import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  name: string;
  time: string;
  onPress: () => void;
  type?: 'incoming' | 'outgoing' | 'missed';
  duration?: string;
  isSelected?: boolean;
};

const CallItem: React.FC<Props> = ({ 
  name, 
  time, 
  onPress, 
  type = 'incoming',
  duration,
  isSelected = false 
}) => {
  const getTypeConfig = () => {
    switch (type) {
      case 'incoming':
        return { icon: '↓', color: '#10B981', bgColor: '#D1FAE5', label: 'Incoming' };
      case 'outgoing':
        return { icon: '↑', color: '#3B82F6', bgColor: '#DBEAFE', label: 'Outgoing' };
      case 'missed':
        return { icon: '↓', color: '#EF4444', bgColor: '#FEE2E2', label: 'Missed' };
      default:
        return { icon: '•', color: '#6B7280', bgColor: '#F3F4F6', label: 'Call' };
    }
  };

  const { icon, color, bgColor, label } = getTypeConfig();

  return (
    <TouchableOpacity 
      style={[
        styles.container,
        isSelected && styles.selectedContainer,
        { borderLeftColor: color }
      ]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        {/* Left Section: Icon and Call Info */}
        <View style={styles.leftSection}>
          <View style={[styles.iconContainer, { backgroundColor: bgColor }]}>
            <Text style={[styles.icon, { color }]}>{icon}</Text>
          </View>
          
          <View style={styles.textContainer}>
            <Text 
              style={[
                styles.name,
                type === 'missed' && styles.missedName
              ]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {name}
            </Text>
            
            <View style={styles.metaContainer}>
              <Text style={styles.time}>{time}</Text>
              {duration && (
                <>
                  <Text style={styles.dot}>•</Text>
                  <Text style={styles.duration}>{duration}</Text>
                </>
              )}
            </View>
          </View>
        </View>

        {/* Right Section: Call Type and Additional Info */}
        <View style={styles.rightSection}>
          <View style={[styles.typeBadge, { backgroundColor: bgColor }]}>
            <Text style={[styles.typeText, { color }]}>{label}</Text>
          </View>
          
          {isSelected && (
            <View style={styles.selectedIndicator}>
              <Text style={styles.selectedIcon}>✓</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CallItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    marginBottom: 8,
    marginHorizontal: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  selectedContainer: {
    backgroundColor: '#F0F9FF',
    borderColor: '#0EA5E9',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 18,
    fontWeight: '700',
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 2,
  },
  missedName: {
    color: '#EF4444',
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '500',
  },
  dot: {
    fontSize: 10,
    color: '#9CA3AF',
    marginHorizontal: 6,
  },
  duration: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '500',
  },
  rightSection: {
    alignItems: 'flex-end',
    gap: 8,
  },
  typeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    minWidth: 70,
    alignItems: 'center',
  },
  typeText: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  selectedIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#0EA5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedIcon: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '700',
  },
});