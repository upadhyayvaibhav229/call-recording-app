import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Linking 
} from 'react-native';
import Header from '../components/Header';

const AboutScreen = () => {
  const appInfo = {
    version: '1.0.0',
    build: '2301',
    releaseDate: 'March 2024',
  };

  const features = [
    { icon: '🔒', title: 'Local Storage', desc: 'All recordings stored on your device' },
    { icon: '⚡', title: 'Auto Record', desc: 'Automatic call recording' },
    { icon: '🔍', title: 'Search & Organize', desc: 'Easy call management' },
    { icon: '🎵', title: 'Audio Quality', desc: 'High-quality MP3 recordings' },
  ];

  const links = [
    { title: 'Privacy Policy', url: 'https://example.com/privacy' },
    { title: 'Terms of Service', url: 'https://example.com/terms' },
    { title: 'Support', url: 'mailto:support@example.com' },
    { title: 'Rate App', action: () => {} },
  ];

  const openLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header 
          title="About"
          showBackButton={true}
        />
        
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Hero Section */}
          <View style={styles.heroSection}>
            <View style={styles.appIcon}>
              <Text style={styles.appIconText}>📱</Text>
            </View>
            <Text style={styles.appName}>Call Recorder</Text>
            <View style={styles.versionBadge}>
              <Text style={styles.versionText}>v{appInfo.version}</Text>
              <View style={styles.badgeDot} />
              <Text style={styles.buildText}>Build {appInfo.build}</Text>
            </View>
            <Text style={styles.releaseDate}>{appInfo.releaseDate}</Text>
          </View>

          {/* App Description */}
          <View style={styles.descriptionCard}>
            <Text style={styles.descriptionTitle}>About This App</Text>
            <Text style={styles.descriptionText}>
              A secure call recording application that stores all your recordings locally on your device. 
              No cloud sync, no external servers — complete privacy and control over your data.
            </Text>
          </View>

          {/* Features Grid */}
          <View style={styles.featuresSection}>
            <Text style={styles.sectionTitle}>Key Features</Text>
            <View style={styles.featuresGrid}>
              {features.map((feature, index) => (
                <View key={index} style={styles.featureCard}>
                  <Text style={styles.featureIcon}>{feature.icon}</Text>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                  <Text style={styles.featureDesc}>{feature.desc}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Tech Details */}
          <View style={styles.techCard}>
            <Text style={styles.techTitle}>Technical Information</Text>
            <View style={styles.techGrid}>
              <TechItem label="Audio Format" value="MP3 (128kbps)" />
              <TechItem label="Storage" value="Device Local Storage" />
              <TechItem label="Encryption" value="Device-Level" />
              <TechItem label="Compatibility" value="Android 8.0+" />
            </View>
          </View>

          {/* Links Section */}
          <View style={styles.linksSection}>
            <Text style={styles.sectionTitle}>Links & Resources</Text>
            <View style={styles.linksList}>
              {links.map((link, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.linkItem}
                  onPress={() => link.url ? openLink(link.url) : link.action?.()}
                  activeOpacity={0.7}
                >
                  <Text style={styles.linkText}>{link.title}</Text>
                  <Text style={styles.linkArrow}>›</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.copyright}>© 2024 Call Recorder</Text>
            <Text style={styles.rights}>All rights reserved</Text>
            <Text style={styles.tagline}>Privacy First • Local Storage • No Ads</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const TechItem = ({ label, value }: { label: string, value: string }) => (
  <View style={styles.techItem}>
    <Text style={styles.techLabel}>{label}</Text>
    <Text style={styles.techValue}>{value}</Text>
  </View>
);

export default AboutScreen;

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
    paddingVertical: 32,
    paddingHorizontal: 24,
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
  appIcon: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#E0E7FF',
  },
  appIconText: {
    fontSize: 36,
  },
  appName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1F2937',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  versionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  versionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563EB',
  },
  badgeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#94A3B8',
    marginHorizontal: 8,
  },
  buildText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748B',
  },
  releaseDate: {
    fontSize: 13,
    color: '#94A3B8',
    fontWeight: '500',
  },
  descriptionCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 24,
  },
  featuresSection: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
    paddingLeft: 8,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  featureCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  featureIcon: {
    fontSize: 24,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
    textAlign: 'center',
  },
  featureDesc: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 18,
  },
  techCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  techTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 20,
  },
  techGrid: {
    gap: 16,
  },
  techItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  techLabel: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  techValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  linksSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  linksList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    overflow: 'hidden',
  },
  linkItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  linkText: {
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '500',
  },
  linkArrow: {
    fontSize: 20,
    color: '#94A3B8',
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  copyright: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 4,
  },
  rights: {
    fontSize: 13,
    color: '#94A3B8',
    marginBottom: 12,
  },
  tagline: {
    fontSize: 12,
    color: '#CBD5E1',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
});