import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView,
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';

const CallDetailScreen = ({ route }: any) => {
  const { callId } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header 
          title="Call Details" 
          showBackButton={true}
        />
        
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Main Info Card */}
          <View style={styles.mainCard}>
            {/* Call ID Section */}
            <View style={styles.callIdSection}>
              <View style={styles.idHeader}>
                <Text style={styles.idLabel}>CALL IDENTIFIER</Text>
                <TouchableOpacity style={styles.copyButton}>
                  <Text style={styles.copyText}>COPY</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.idValueContainer}>
                <Text style={styles.idValue} numberOfLines={1}>{callId}</Text>
              </View>
            </View>

            <View style={styles.divider} />

            {/* Call Metadata */}
            <View style={styles.metadataGrid}>
              <MetadataItem 
                label="Date" 
                value="Today" 
                icon="📅"
              />
              <MetadataItem 
                label="Time" 
                value="10:30 AM" 
                icon="🕐"
              />
              <MetadataItem 
                label="Duration" 
                value="5:42" 
                icon="⏱️"
              />
              <MetadataItem 
                label="Type" 
                value="Incoming" 
                icon="📥"
                type="success"
              />
            </View>

            <View style={styles.divider} />

            {/* Recording Section */}
            <View style={styles.recordingSection}>
              <View style={styles.recordingHeader}>
                <Text style={styles.recordingIcon}>🎤</Text>
                <View style={styles.recordingInfo}>
                  <Text style={styles.recordingTitle}>Audio Recording</Text>
                  <Text style={styles.recordingSubtitle}>MP3 • 5.2 MB • Available</Text>
                </View>
                <View style={styles.recordingStatus}>
                  <View style={styles.statusBadge}>
                    <Text style={styles.statusText}>READY</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Waveform Visualization */}
          <View style={styles.waveformCard}>
            <Text style={styles.waveformLabel}>Waveform Preview</Text>
            <View style={styles.waveformContainer}>
              {[30, 60, 45, 80, 55, 70, 40, 65, 50, 35, 75, 40].map((height, index) => (
                <View 
                  key={index}
                  style={[styles.waveformBar, { height }]}
                />
              ))}
            </View>
            <View style={styles.waveformTime}>
              <Text style={styles.timeText}>0:00</Text>
              <Text style={styles.timeText}>2:45</Text>
              <Text style={styles.timeText}>5:42</Text>
            </View>
          </View>

          {/* Playback Controls */}
          <View style={styles.controlsCard}>
            <View style={styles.controlsHeader}>
              <Text style={styles.controlsTitle}>Playback Controls</Text>
              <Text style={styles.duration}>5:42</Text>
            </View>
            
            <View style={styles.controlButtons}>
              <ControlButton 
                icon="⏪" 
                label="15s"
                onPress={() => {}}
              />
              <ControlButton 
                icon="⏸️" 
                label="Pause"
                onPress={() => {}}
                primary
              />
              <ControlButton 
                icon="⏩" 
                label="15s"
                onPress={() => {}}
              />
            </View>
          </View>

          {/* Actions Section */}
          <View style={styles.actionsCard}>
            <View style={styles.actionHeader}>
              <Text style={styles.actionTitle}>Actions</Text>
              <Text style={styles.actionSubtitle}>Available options for this recording</Text>
            </View>
            
            <View style={styles.actionsGrid}>
              <ActionButton 
                icon="▶️" 
                label="Play"
                onPress={() => {}}
                primary
              />
              <ActionButton 
                icon="💾" 
                label="Save"
                onPress={() => {}}
              />
              <ActionButton 
                icon="📤" 
                label="Share"
                onPress={() => {}}
              />
              <ActionButton 
                icon="🗑️" 
                label="Delete"
                onPress={() => {}}
                danger
              />
            </View>
          </View>

          {/* Main Action Button */}
          <PrimaryButton
            label="▶ Start Playback"
            onPress={() => {}}
            size="large"
            fullWidth
            style={styles.mainAction}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

// Sub-components
const MetadataItem = ({ label, value, icon, type = 'default' }: any) => (
  <View style={styles.metadataItem}>
    <Text style={styles.metadataIcon}>{icon}</Text>
    <View style={styles.metadataContent}>
      <Text style={styles.metadataLabel}>{label}</Text>
      <Text style={[
        styles.metadataValue,
        type === 'success' && styles.metadataValueSuccess
      ]}>
        {value}
      </Text>
    </View>
  </View>
);

const ControlButton = ({ icon, label, onPress, primary = false }: any) => (
  <TouchableOpacity 
    style={[styles.controlButton, primary && styles.controlButtonPrimary]}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Text style={[
      styles.controlButtonIcon,
      primary && styles.controlButtonIconPrimary
    ]}>
      {icon}
    </Text>
    <Text style={[
      styles.controlButtonLabel,
      primary && styles.controlButtonLabelPrimary
    ]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const ActionButton = ({ icon, label, onPress, primary = false, danger = false }: any) => (
  <TouchableOpacity 
    style={[
      styles.actionButton,
      primary && styles.actionButtonPrimary,
      danger && styles.actionButtonDanger
    ]}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Text style={[
      styles.actionButtonIcon,
      primary && styles.actionButtonIconPrimary,
      danger && styles.actionButtonIconDanger
    ]}>
      {icon}
    </Text>
    <Text style={[
      styles.actionButtonLabel,
      primary && styles.actionButtonLabelPrimary,
      danger && styles.actionButtonLabelDanger
    ]}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default CallDetailScreen;

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
  mainCard: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    marginBottom: 12,
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  callIdSection: {
    marginBottom: 8,
  },
  idHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  idLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#64748B',
    textTransform: 'uppercase',
  },
  copyButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#F1F5F9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  copyText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#475569',
    letterSpacing: 0.5,
  },
  idValueContainer: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  idValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    fontFamily: 'monospace',
    letterSpacing: 0.5,
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginVertical: 20,
  },
  metadataGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  metadataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    gap: 12,
  },
  metadataIcon: {
    fontSize: 20,
    opacity: 0.8,
  },
  metadataContent: {
    flex: 1,
  },
  metadataLabel: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
    marginBottom: 2,
  },
  metadataValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1E293B',
  },
  metadataValueSuccess: {
    color: '#059669',
  },
  recordingSection: {
    marginTop: 4,
  },
  recordingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  recordingIcon: {
    fontSize: 24,
    backgroundColor: '#EEF2FF',
    padding: 12,
    borderRadius: 16,
  },
  recordingInfo: {
    flex: 1,
  },
  recordingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 2,
  },
  recordingSubtitle: {
    fontSize: 13,
    color: '#64748B',
  },
  recordingStatus: {
    alignItems: 'flex-end',
  },
  statusBadge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  statusText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#059669',
    letterSpacing: 0.5,
  },
  waveformCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  waveformLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 16,
  },
  waveformContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 80,
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  waveformBar: {
    width: 8,
    backgroundColor: '#60A5FA',
    borderRadius: 4,
    marginHorizontal: 2,
  },
  waveformTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '500',
  },
  controlsCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  controlsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  controlsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  duration: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
  },
  controlButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controlButton: {
    alignItems: 'center',
    padding: 16,
    minWidth: 80,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#F8FAFC',
  },
  controlButtonPrimary: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  controlButtonIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  controlButtonIconPrimary: {
    color: '#FFFFFF',
  },
  controlButtonLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569',
  },
  controlButtonLabelPrimary: {
    color: '#FFFFFF',
  },
  actionsCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  actionHeader: {
    marginBottom: 20,
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 13,
    color: '#64748B',
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    minWidth: '22%',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#F8FAFC',
  },
  actionButtonPrimary: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  actionButtonDanger: {
    backgroundColor: '#FEF2F2',
    borderColor: '#FECACA',
  },
  actionButtonIcon: {
    fontSize: 20,
    marginBottom: 8,
  },
  actionButtonIconPrimary: {
    color: '#FFFFFF',
  },
  actionButtonIconDanger: {
    color: '#DC2626',
  },
  actionButtonLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569',
  },
  actionButtonLabelPrimary: {
    color: '#FFFFFF',
  },
  actionButtonLabelDanger: {
    color: '#DC2626',
  },
  mainAction: {
    marginHorizontal: 16,
  },
});