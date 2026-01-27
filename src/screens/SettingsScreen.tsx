import React from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ScrollView,
  SafeAreaView,
  Switch,
  Alert 
} from 'react-native';
import Header from '../components/Header';

const SettingsScreen = ({ navigation }: any) => {
  const [autoRecord, setAutoRecord] = React.useState(true);
  const [saveToGallery, setSaveToGallery] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);

  const settingsSections = [
    {
      title: "Recording",
      icon: "🎤",
      items: [
        {
          icon: "⚡",
          title: "Auto Record",
          subtitle: "Automatically record incoming/outgoing calls",
          type: "switch",
          value: autoRecord,
          onPress: () => setAutoRecord(!autoRecord),
        },
        {
          icon: "💾",
          title: "Save to Gallery",
          subtitle: "Save recordings to device gallery",
          type: "switch",
          value: saveToGallery,
          onPress: () => setSaveToGallery(!saveToGallery),
        },
        {
          icon: "🎵",
          title: "Audio Quality",
          subtitle: "High (MP3 128kbps)",
          type: "info",
          onPress: () => Alert.alert("Audio Quality", "Currently set to High Quality (MP3 128kbps)"),
        },
      ],
    },
    {
      title: "Notifications",
      icon: "🔔",
      items: [
        {
          icon: "📢",
          title: "Push Notifications",
          subtitle: "Receive alerts for new recordings",
          type: "switch",
          value: notifications,
          onPress: () => setNotifications(!notifications),
        },
        {
          icon: "🔕",
          title: "Silent Mode",
          subtitle: "Mute notification sounds",
          type: "switch",
          value: false,
          onPress: () => Alert.alert("Silent Mode", "This feature is coming soon"),
        },
      ],
    },
    {
      title: "Storage",
      icon: "💾",
      items: [
        {
          icon: "🗑️",
          title: "Auto Cleanup",
          subtitle: "Delete recordings older than 30 days",
          type: "switch",
          value: false,
          onPress: () => Alert.alert("Auto Cleanup", "Enable to auto-delete old recordings"),
        },
        {
          icon: "📊",
          title: "Storage Usage",
          subtitle: "1.2 GB used of 5 GB",
          type: "info",
          onPress: () => Alert.alert("Storage", "1.2 GB of 5 GB storage used"),
        },
        {
          icon: "📁",
          title: "Export Location",
          subtitle: "Internal Storage/CallRecords",
          type: "info",
          onPress: () => Alert.alert("Export Location", "Files saved to Internal Storage/CallRecords"),
        },
      ],
    },
    {
      title: "App Settings",
      icon: "⚙️",
      items: [
        {
          icon: "ℹ️",
          title: "About App",
          subtitle: "Version 1.0.0 • Build 2301",
          type: "navigate",
          onPress: () => navigation.navigate('About'),
        },
        {
          icon: "🔄",
          title: "Check for Updates",
          subtitle: "You're on the latest version",
          type: "action",
          onPress: () => Alert.alert("Updates", "You're using the latest version"),
        },
        {
          icon: "🛡️",
          title: "Privacy Policy",
          subtitle: "Read our privacy terms",
          type: "action",
          onPress: () => Alert.alert("Privacy Policy", "Privacy policy information"),
        },
      ],
    },
  ];

  const quickActions = [
    { 
      icon: "🧹", 
      label: "Clear Cache", 
      onPress: () => Alert.alert("Clear Cache", "Cache cleared successfully") 
    },
    { 
      icon: "📤", 
      label: "Export All", 
      onPress: () => Alert.alert("Export", "Export feature coming soon") 
    },
    { 
      icon: "🔒", 
      label: "Lock App", 
      onPress: () => Alert.alert("App Lock", "App lock feature coming soon") 
    },
  ];

  const handleCheckUpdates = () => {
    Alert.alert(
      "Update Check",
      "You're using the latest version of Call Recorder",
      [
        { text: "OK", style: "default" }
      ]
    );
  };

  const handleClearCache = () => {
    Alert.alert(
      "Clear Cache",
      "Are you sure you want to clear app cache?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Clear", 
          style: "destructive",
          onPress: () => Alert.alert("Success", "Cache cleared successfully")
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header 
          title="Settings"
          showBackButton={true}
        />
        
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Quick Actions */}
          <View style={styles.quickActions}>
            {quickActions.map((action, index) => (
              <TouchableOpacity
                key={index}
                style={styles.quickActionButton}
                onPress={action.onPress}
                activeOpacity={0.7}
              >
                <Text style={styles.quickActionIcon}>{action.icon}</Text>
                <Text style={styles.quickActionLabel}>{action.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Settings Sections */}
          {settingsSections.map((section, sectionIndex) => (
            <View key={sectionIndex} style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionIcon}>{section.icon}</Text>
                <Text style={styles.sectionTitle}>{section.title}</Text>
              </View>
              
              <View style={styles.sectionContent}>
                {section.items.map((item, itemIndex) => (
                  <TouchableOpacity
                    key={itemIndex}
                    style={styles.settingItem}
                    onPress={item.onPress}
                    activeOpacity={0.7}
                  >
                    <View style={styles.settingLeft}>
                      <Text style={styles.itemIcon}>{item.icon}</Text>
                      <View style={styles.itemContent}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                      </View>
                    </View>
                    
                    <View style={styles.settingRight}>
                      {item.type === "switch" ? (
                        <Switch
                          value={item.value}
                          onValueChange={item.onPress}
                          trackColor={{ false: '#E2E8F0', true: '#2563EB' }}
                          thumbColor="#FFFFFF"
                          ios_backgroundColor="#E2E8F0"
                        />
                      ) : item.type === "navigate" ? (
                        <Text style={styles.arrowIcon}>›</Text>
                      ) : (
                        <Text style={styles.infoIcon}>i</Text>
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}

          {/* Account Section */}
          <View style={styles.accountSection}>
            <View style={styles.accountHeader}>
              <Text style={styles.accountTitle}>Account</Text>
              <Text style={styles.accountStatus}>Free Plan</Text>
            </View>
            
            <View style={styles.storageBar}>
              <View style={styles.storageProgress}>
                <View style={[styles.storageFill, { width: '24%' }]} />
              </View>
              <Text style={styles.storageText}>1.2 GB of 5 GB used</Text>
            </View>
          </View>

          {/* App Info */}
          <View style={styles.appInfo}>
            <Text style={styles.appName}>Call Recorder</Text>
            <Text style={styles.appVersion}>Version 1.0.0 • Build 2301</Text>
            <Text style={styles.appCopyright}>© 2024 • All rights reserved</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

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
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 24,
  },
  quickActionButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    marginHorizontal: 4,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  quickActionIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  quickActionLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  sectionIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
  },
  sectionContent: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemIcon: {
    fontSize: 20,
    marginRight: 16,
    opacity: 0.8,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 2,
  },
  itemSubtitle: {
    fontSize: 13,
    color: '#64748B',
  },
  settingRight: {
    marginLeft: 12,
  },
  arrowIcon: {
    fontSize: 20,
    color: '#94A3B8',
  },
  infoIcon: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2563EB',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#EFF6FF',
    textAlign: 'center',
    lineHeight: 24,
  },
  accountSection: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 24,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  accountHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  accountTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1F2937',
  },
  accountStatus: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2563EB',
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  storageBar: {
    marginTop: 4,
  },
  storageProgress: {
    height: 6,
    backgroundColor: '#F1F5F9',
    borderRadius: 3,
    marginBottom: 8,
    overflow: 'hidden',
  },
  storageFill: {
    height: '100%',
    backgroundColor: '#2563EB',
    borderRadius: 3,
  },
  storageText: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
  },
  appInfo: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  appName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  appVersion: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 8,
  },
  appCopyright: {
    fontSize: 12,
    color: '#94A3B8',
  },
});