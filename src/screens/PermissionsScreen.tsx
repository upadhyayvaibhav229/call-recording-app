import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  SafeAreaView 
} from 'react-native';
import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';

const PermissionsScreen = ({ navigation }: any) => {
  const permissions = [
    {
      icon: '📞',
      title: 'Phone Access',
      description: 'Access to manage calls and receive call notifications',
      required: true,
    },
    {
      icon: '🎤',
      title: 'Microphone',
      description: 'Access to record audio during phone calls',
      required: true,
    },
    {
      icon: '💾',
      title: 'Storage Access',
      description: 'Save recordings locally on your device',
      required: true,
    },
    {
      icon: '🔔',
      title: 'Notifications',
      description: 'Receive alerts about new recordings',
      required: false,
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header 
          title="Permissions Required" 
          showBackButton={false}
        />
        
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Hero Section */}
          <View style={styles.heroSection}>
            <View style={styles.iconContainer}>
              <Text style={styles.heroIcon}>🔐</Text>
            </View>
            <Text style={styles.heroTitle}>Secure Recording Access</Text>
            <Text style={styles.heroSubtitle}>
              To provide the best call recording experience, we need the following permissions
            </Text>
          </View>

          {/* Permissions List */}
          <View style={styles.permissionsContainer}>
            {permissions.map((permission, index) => (
              <View key={index} style={styles.permissionCard}>
                <View style={styles.permissionHeader}>
                  <View style={styles.permissionIcon}>
                    <Text style={styles.permissionIconText}>{permission.icon}</Text>
                  </View>
                  <View style={styles.permissionInfo}>
                    <Text style={styles.permissionTitle}>{permission.title}</Text>
                    <Text style={styles.permissionDescription}>
                      {permission.description}
                    </Text>
                  </View>
                  {permission.required ? (
                    <View style={styles.requiredBadge}>
                      <Text style={styles.requiredText}>Required</Text>
                    </View>
                  ) : (
                    <View style={styles.optionalBadge}>
                      <Text style={styles.optionalText}>Optional</Text>
                    </View>
                  )}
                </View>
              </View>
            ))}
          </View>

          {/* Privacy Note */}
          <View style={styles.privacyCard}>
            <View style={styles.privacyHeader}>
              <Text style={styles.privacyIcon}>🛡️</Text>
              <Text style={styles.privacyTitle}>Your Privacy Matters</Text>
            </View>
            <Text style={styles.privacyText}>
              • We only record when you make or receive calls{'\n'}
              • All recordings are stored locally on your device{'\n'}
              • No data is sent to external servers{'\n'}
              • You can delete recordings anytime
            </Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionsContainer}>
            <PrimaryButton
              label="Grant All Permissions"
              onPress={() => navigation.replace('MainTabs')}
              variant="primary"
              size="large"
              fullWidth
            />
            
            <PrimaryButton
              label="Continue with Limited Access"
              onPress={() => navigation.replace('MainTabs')}
              variant="outline"
              fullWidth
            />
          </View>

          {/* Terms */}
          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              By continuing, you agree to our{' '}
              <Text style={styles.linkText}>Terms of Service</Text>{' '}
              and{' '}
              <Text style={styles.linkText}>Privacy Policy</Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PermissionsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  heroSection: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#E0E7FF',
  },
  heroIcon: {
    fontSize: 36,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
  },
  permissionsContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  permissionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  permissionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  permissionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0F9FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  permissionIconText: {
    fontSize: 20,
  },
  permissionInfo: {
    flex: 1,
  },
  permissionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  permissionDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  requiredBadge: {
    backgroundColor: '#FEF2F2',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FECACA',
    marginLeft: 8,
    alignSelf: 'flex-start',
  },
  requiredText: {
    fontSize: 11,
    color: '#DC2626',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  optionalBadge: {
    backgroundColor: '#F0FDF4',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#BBF7D0',
    marginLeft: 8,
    alignSelf: 'flex-start',
  },
  optionalText: {
    fontSize: 11,
    color: '#16A34A',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  privacyCard: {
    backgroundColor: '#F0F9FF',
    marginHorizontal: 16,
    marginBottom: 24,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E0F2FE',
  },
  privacyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  privacyIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  privacyTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#0369A1',
  },
  privacyText: {
    fontSize: 14,
    color: '#0C4A6E',
    lineHeight: 22,
  },
  actionsContainer: {
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 20,
  },
  termsContainer: {
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  termsText: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 18,
  },
  linkText: {
    color: '#2563EB',
    fontWeight: '600',
  },
});