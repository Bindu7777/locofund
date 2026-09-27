import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, StatusBar, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Defs, LinearGradient, RadialGradient, Stop, Rect } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
  FadeInUp,
} from 'react-native-reanimated';
import { BrandLogo } from '../components/ui/BrandLogo';

export default function LandingScreen() {
  const router = useRouter();

  // Little gentle falling snow/dew particles
  const snow1 = useSharedValue(-20);
  const snow2 = useSharedValue(-40);
  const snow3 = useSharedValue(-60);
  const snow4 = useSharedValue(-30);
  const snow5 = useSharedValue(-50);
  const snow6 = useSharedValue(-70);
  const snow7 = useSharedValue(-25);
  const snow8 = useSharedValue(-45);
  const snow9 = useSharedValue(-65);
  const snow10 = useSharedValue(-35);

  useEffect(() => {
    snow1.value = withRepeat(withTiming(760, { duration: 4500, easing: Easing.linear }), -1, false);
    snow2.value = withRepeat(withTiming(760, { duration: 5800, easing: Easing.linear }), -1, false);
    snow3.value = withRepeat(withTiming(760, { duration: 3900, easing: Easing.linear }), -1, false);
    snow4.value = withRepeat(withTiming(760, { duration: 5200, easing: Easing.linear }), -1, false);
    snow5.value = withRepeat(withTiming(760, { duration: 4800, easing: Easing.linear }), -1, false);
    snow6.value = withRepeat(withTiming(760, { duration: 6200, easing: Easing.linear }), -1, false);
    snow7.value = withRepeat(withTiming(760, { duration: 4100, easing: Easing.linear }), -1, false);
    snow8.value = withRepeat(withTiming(760, { duration: 5500, easing: Easing.linear }), -1, false);
    snow9.value = withRepeat(withTiming(760, { duration: 4600, easing: Easing.linear }), -1, false);
    snow10.value = withRepeat(withTiming(760, { duration: 5900, easing: Easing.linear }), -1, false);
  }, [snow1, snow2, snow3, snow4, snow5, snow6, snow7, snow8, snow9, snow10]);

  // Snow Particle Styles
  const snow1Style = useAnimatedStyle(() => ({ transform: [{ translateY: snow1.value }] }));
  const snow2Style = useAnimatedStyle(() => ({ transform: [{ translateY: snow2.value }] }));
  const snow3Style = useAnimatedStyle(() => ({ transform: [{ translateY: snow3.value }] }));
  const snow4Style = useAnimatedStyle(() => ({ transform: [{ translateY: snow4.value }] }));
  const snow5Style = useAnimatedStyle(() => ({ transform: [{ translateY: snow5.value }] }));
  const snow6Style = useAnimatedStyle(() => ({ transform: [{ translateY: snow6.value }] }));
  const snow7Style = useAnimatedStyle(() => ({ transform: [{ translateY: snow7.value }] }));
  const snow8Style = useAnimatedStyle(() => ({ transform: [{ translateY: snow8.value }] }));
  const snow9Style = useAnimatedStyle(() => ({ transform: [{ translateY: snow9.value }] }));
  const snow10Style = useAnimatedStyle(() => ({ transform: [{ translateY: snow10.value }] }));

  const handleSelectBusiness = () => {
    router.push('/onboarding/business');
  };

  const handleSelectInvestor = () => {
    router.push('/onboarding/investor');
  };

  const handleDirectLogin = () => {
    router.push('/auth/login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0A183D" />
      
      {/* Merged Multi-Shade Blue Background */}
      <View style={StyleSheet.absoluteFill}>
        <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
          <Defs>
            <LinearGradient id="mergedBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <Stop offset="0%" stopColor="#0A183D" />
              <Stop offset="30%" stopColor="#0F52BA" />
              <Stop offset="65%" stopColor="#2563EB" />
              <Stop offset="100%" stopColor="#0284C7" />
            </LinearGradient>
            <RadialGradient id="cyanMergeGlow" cx="50%" cy="40%" rx="75%" ry="75%">
              <Stop offset="0%" stopColor="#38BDF8" stopOpacity="0.32" />
              <Stop offset="50%" stopColor="#1D4ED8" stopOpacity="0.15" />
              <Stop offset="100%" stopColor="#0A183D" stopOpacity="0" />
            </RadialGradient>
          </Defs>
          <Rect x="0" y="0" width="100%" height="100%" fill="url(#mergedBlueGrad)" />
          <Rect x="0" y="0" width="100%" height="100%" fill="url(#cyanMergeGlow)" />
        </Svg>
      </View>

      {/* Falling Dew Particles from Absolute Top Edge */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <Animated.View style={[styles.snowDot, { left: '6%', width: 4, height: 4, opacity: 0.8 }, snow1Style]} />
        <Animated.View style={[styles.snowDot, { left: '16%', width: 3, height: 3, opacity: 0.5 }, snow2Style]} />
        <Animated.View style={[styles.snowDot, { left: '26%', width: 5, height: 5, opacity: 0.85 }, snow3Style]} />
        <Animated.View style={[styles.snowDot, { left: '36%', width: 3, height: 3, opacity: 0.6 }, snow4Style]} />
        <Animated.View style={[styles.snowDot, { left: '46%', width: 4, height: 4, opacity: 0.75 }, snow5Style]} />
        <Animated.View style={[styles.snowDot, { left: '56%', width: 3, height: 3, opacity: 0.5 }, snow6Style]} />
        <Animated.View style={[styles.snowDot, { left: '66%', width: 5, height: 5, opacity: 0.85 }, snow7Style]} />
        <Animated.View style={[styles.snowDot, { left: '76%', width: 3, height: 3, opacity: 0.6 }, snow8Style]} />
        <Animated.View style={[styles.snowDot, { left: '86%', width: 4, height: 4, opacity: 0.75 }, snow9Style]} />
        <Animated.View style={[styles.snowDot, { left: '94%', width: 3, height: 3, opacity: 0.55 }, snow10Style]} />
      </View>

      <View style={styles.container}>
        {/* Center Section: Clean Static Logo Badge in Vertical Middle */}
        <View style={styles.centerSection}>
          <View style={styles.logoCard}>
            <BrandLogo size="lg" variant="light" layout="name-first" showSubtitle={false} />
          </View>
        </View>

        {/* Bottom Section: Login Action Buttons */}
        <Animated.View 
          entering={FadeInUp.delay(100).duration(700).springify()}
          style={styles.bottomSection}
        >
          <View style={styles.buttonsGroup}>
            {/* Login as Business Owner */}
            <Pressable
              onPress={handleSelectBusiness}
              style={({ pressed }) => [
                styles.btnPrimary,
                pressed && styles.btnPressed,
              ]}
            >
              <Text style={styles.btnPrimaryText}>Login as Business Owner</Text>
            </Pressable>

            {/* Login as Investor */}
            <Pressable
              onPress={handleSelectInvestor}
              style={({ pressed }) => [
                styles.btnSecondary,
                pressed && styles.btnSecondaryPressed,
              ]}
            >
              <Text style={styles.btnSecondaryText}>Login as Investor</Text>
            </Pressable>
          </View>

          {/* Minimal Sign In Footer */}
          <View style={styles.footerRow}>
            <Pressable onPress={handleDirectLogin} hitSlop={12}>
              <Text style={styles.footerText}>
                Already have an account? <Text style={styles.footerLink}>Sign In</Text>
              </Text>
            </Pressable>
          </View>
        </Animated.View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0A183D',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    paddingTop: 36,
    paddingBottom: 68, // Lifted buttons up
    overflow: 'hidden',
  },

  /* Delicate Small Snow / Dew Particle Dots */
  snowDot: {
    position: 'absolute',
    top: 0,
    borderRadius: 999,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },

  /* Center Section (Logo clean and static in the middle) */
  centerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoCard: {
    paddingHorizontal: 36,
    paddingVertical: 26,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 5,
    alignItems: 'center',
  },

  /* Bottom Section */
  bottomSection: {
    width: '100%',
    gap: 20,
    marginBottom: 16, // Lifted buttons up
  },
  buttonsGroup: {
    width: '100%',
    gap: 14,
  },

  /* Primary Button - White Pill */
  btnPrimary: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 14,
    elevation: 4,
  },
  btnPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.985 }],
  },
  btnPrimaryText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1E6091',
    letterSpacing: -0.3,
  },

  /* Secondary Button - Glassmorphism */
  btnSecondary: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSecondaryPressed: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0.6)',
    transform: [{ scale: 0.985 }],
  },
  btnSecondaryText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: -0.3,
  },

  /* Footer */
  footerRow: {
    alignItems: 'center',
    paddingTop: 4,
  },
  footerText: {
    fontSize: 14,
    color: '#E0F2FE',
    fontWeight: '500',
  },
  footerLink: {
    color: '#FFFFFF',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});






