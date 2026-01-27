import React, { useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Animated, 
  Dimensions 
} from 'react-native';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const translateYAnim = useRef(new Animated.Value(30)).current;
  const ringScale = useRef(new Animated.Value(0)).current;
  const ringOpacity = useRef(new Animated.Value(0)).current;
  const progressWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animation sequence
    Animated.parallel([
      // Main content animation
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      // Ring animation
      Animated.sequence([
        Animated.delay(400),
        Animated.parallel([
          Animated.timing(ringScale, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(ringOpacity, {
            toValue: 0.5,
            duration: 600,
            useNativeDriver: true,
          }),
        ]),
      ]),
      // Progress bar animation (without native driver)
      Animated.timing(progressWidth, {
        toValue: 200, // full width
        duration: 1600,
        useNativeDriver: false, // Important: set to false for width animation
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('Permissions');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Animated Rings */}
      <Animated.View 
        style={[
          styles.ring,
          styles.ringOuter,
          {
            transform: [{ scale: ringScale }],
            opacity: ringOpacity,
          }
        ]} 
      />
      <Animated.View 
        style={[
          styles.ring,
          styles.ringInner,
          {
            transform: [{ scale: ringScale }],
            opacity: ringOpacity,
          }
        ]} 
      />

      {/* Main Content */}
      <Animated.View 
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [
              { scale: scaleAnim },
              { translateY: translateYAnim },
            ],
          },
        ]}
      >
        {/* Icon/Logo */}
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <Text style={styles.iconText}>📱</Text>
          </View>
          <View style={styles.iconWave}>
            <View style={[styles.wave, styles.wave1]} />
            <View style={[styles.wave, styles.wave2]} />
            <View style={[styles.wave, styles.wave3]} />
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>Call Recorder</Text>
        
        {/* Subtitle with Features */}
        <Text style={styles.subtitle}>Simple • Secure • Offline</Text>

        {/* Feature Tags */}
        <View style={styles.featuresContainer}>
          <View style={styles.featureTag}>
            <Text style={styles.featureText}>🔒 Encrypted</Text>
          </View>
          <View style={styles.featureTag}>
            <Text style={styles.featureText}>💾 Local Storage</Text>
          </View>
          <View style={styles.featureTag}>
            <Text style={styles.featureText}>🎤 Auto Record</Text>
          </View>
        </View>

        {/* Loading Indicator */}
        <View style={styles.loadingContainer}>
          <View style={styles.loadingBar}>
            <Animated.View 
              style={[
                styles.loadingProgress,
                {
                  width: progressWidth, // Use animated value directly
                },
              ]}
            />
          </View>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </Animated.View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.version}>Version 1.0.0</Text>
        <Text style={styles.copyright}>© 2024 Call Recorder</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  ring: {
    position: 'absolute',
    borderRadius: 500,
    borderWidth: 1,
  },
  ringOuter: {
    width: 300,
    height: 300,
    borderColor: 'rgba(96, 165, 250, 0.2)',
  },
  ringInner: {
    width: 200,
    height: 200,
    borderColor: 'rgba(96, 165, 250, 0.3)',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  iconContainer: {
    position: 'relative',
    marginBottom: 30,
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(96, 165, 250, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(96, 165, 250, 0.3)',
  },
  iconText: {
    fontSize: 36,
  },
  iconWave: {
    position: 'absolute',
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wave: {
    position: 'absolute',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(96, 165, 250, 0.2)',
  },
  wave1: {
    width: 100,
    height: 100,
  },
  wave2: {
    width: 120,
    height: 120,
  },
  wave3: {
    width: 140,
    height: 140,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 8,
    letterSpacing: 1,
    textShadowColor: 'rgba(96, 165, 250, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#cbd5f5',
    marginBottom: 30,
    letterSpacing: 0.5,
    fontWeight: '500',
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 40,
  },
  featureTag: {
    backgroundColor: 'rgba(96, 165, 250, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(96, 165, 250, 0.2)',
  },
  featureText: {
    fontSize: 12,
    color: '#cbd5f5',
    fontWeight: '500',
  },
  loadingContainer: {
    alignItems: 'center',
    width: '100%',
  },
  loadingBar: {
    width: 200,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 12,
  },
  loadingProgress: {
    height: '100%',
    backgroundColor: '#60a5fa',
    borderRadius: 2,
  },
  loadingText: {
    fontSize: 13,
    color: '#94a3b8',
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  version: {
    fontSize: 12,
    color: 'rgba(148, 163, 184, 0.6)',
    marginBottom: 4,
  },
  copyright: {
    fontSize: 11,
    color: 'rgba(148, 163, 184, 0.4)',
  },
});