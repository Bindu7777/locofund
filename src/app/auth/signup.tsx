import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, StatusBar, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
  FadeInUp,
} from 'react-native-reanimated';
import { BrandLogo } from '../../components/ui/BrandLogo';

export default function SignUpScreen() {
  const router = useRouter();

  // Falling Blue Dew Particle Shared Values
  const dew1Y = useSharedValue(-20);
  const dew2Y = useSharedValue(-40);
  const dew3Y = useSharedValue(-60);
  const dew4Y = useSharedValue(-30);
  const dew5Y = useSharedValue(-50);
  const dew6Y = useSharedValue(-70);
  const dew7Y = useSharedValue(-25);
  const dew8Y = useSharedValue(-45);
  const dew9Y = useSharedValue(-65);
  const dew10Y = useSharedValue(-35);

  useEffect(() => {
    dew1Y.value = withRepeat(withTiming(760, { duration: 4500, easing: Easing.linear }), -1, false);
    dew2Y.value = withRepeat(withTiming(760, { duration: 5800, easing: Easing.linear }), -1, false);
    dew3Y.value = withRepeat(withTiming(760, { duration: 3900, easing: Easing.linear }), -1, false);
    dew4Y.value = withRepeat(withTiming(760, { duration: 5200, easing: Easing.linear }), -1, false);
    dew5Y.value = withRepeat(withTiming(760, { duration: 4800, easing: Easing.linear }), -1, false);
    dew6Y.value = withRepeat(withTiming(760, { duration: 6200, easing: Easing.linear }), -1, false);
    dew7Y.value = withRepeat(withTiming(760, { duration: 4100, easing: Easing.linear }), -1, false);
    dew8Y.value = withRepeat(withTiming(760, { duration: 5500, easing: Easing.linear }), -1, false);
    dew9Y.value = withRepeat(withTiming(760, { duration: 4600, easing: Easing.linear }), -1, false);
    dew10Y.value = withRepeat(withTiming(760, { duration: 5900, easing: Easing.linear }), -1, false);
  }, [dew1Y, dew2Y, dew3Y, dew4Y, dew5Y, dew6Y, dew7Y, dew8Y, dew9Y, dew10Y]);

  // Blue Dew Particle Styles
  const dew1Style = useAnimatedStyle(() => ({ transform: [{ translateY: dew1Y.value }] }));
  const dew2Style = useAnimatedStyle(() => ({ transform: [{ translateY: dew2Y.value }] }));
  const dew3Style = useAnimatedStyle(() => ({ transform: [{ translateY: dew3Y.value }] }));
  const dew4Style = useAnimatedStyle(() => ({ transform: [{ translateY: dew4Y.value }] }));
  const dew5Style = useAnimatedStyle(() => ({ transform: [{ translateY: dew5Y.value }] }));
  const dew6Style = useAnimatedStyle(() => ({ transform: [{ translateY: dew6Y.value }] }));
  const dew7Style = useAnimatedStyle(() => ({ transform: [{ translateY: dew7Y.value }] }));
  const dew8Style = useAnimatedStyle(() => ({ transform: [{ translateY: dew8Y.value }] }));
  const dew9Style = useAnimatedStyle(() => ({ transform: [{ translateY: dew9Y.value }] }));
  const dew10Style = useAnimatedStyle(() => ({ transform: [{ translateY: dew10Y.value }] }));

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
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Falling Blue Dew Particles from Absolute Top */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <Animated.View style={[styles.blueDewDot, { left: '6%', width: 5, height: 5, opacity: 0.7 }, dew1Style]} />
        <Animated.View style={[styles.blueDewDot, { left: '16%', width: 4, height: 4, opacity: 0.5 }, dew2Style]} />
        <Animated.View style={[styles.blueDewDot, { left: '26%', width: 6, height: 6, opacity: 0.8 }, dew3Style]} />
        <Animated.View style={[styles.blueDewDot, { left: '36%', width: 4, height: 4, opacity: 0.6 }, dew4Style]} />
        <Animated.View style={[styles.blueDewDot, { left: '46%', width: 5, height: 5, opacity: 0.75 }, dew5Style]} />
        <Animated.View style={[styles.blueDewDot, { left: '56%', width: 4, height: 4, opacity: 0.5 }, dew6Style]} />
        <Animated.View style={[styles.blueDewDot, { left: '66%', width: 6, height: 6, opacity: 0.8 }, dew7Style]} />
        <Animated.View style={[styles.blueDewDot, { left: '76%', width: 4, height: 4, opacity: 0.6 }, dew8Style]} />
        <Animated.View style={[styles.blueDewDot, { left: '86%', width: 5, height: 5, opacity: 0.75 }, dew9Style]} />
        <Animated.View style={[styles.blueDewDot, { left: '94%', width: 4, height: 4, opacity: 0.55 }, dew10Style]} />
      </View>

      <View style={styles.container}>
        
        {/* Center Section: Static Logo Card */}
        <View style={styles.centerSection}>
          <View style={styles.logoCard}>
            <BrandLogo size="lg" variant="dark" layout="name-first" showSubtitle={false} />
          </View>
        </View>

        {/* Bottom Section: Sign Up Action Buttons in Blue Color */}
        <Animated.View 
          entering={FadeInUp.delay(100).duration(700).springify()}
          style={styles.bottomSection}
        >
          <View style={styles.buttonsGroup}>
            {/* Sign Up as Business Owner */}
            <Pressable
              onPress={handleSelectBusiness}
              style={({ pressed }) => [
                styles.btnPrimaryBlue,
                pressed && styles.btnPrimaryPressed,
              ]}
            >
              <Text style={styles.btnPrimaryText}>Sign Up as Business Owner</Text>
            </Pressable>

            {/* Sign Up as Investor */}
            <Pressable
              onPress={handleSelectInvestor}
              style={({ pressed }) => [
                styles.btnSecondaryBlue,
                pressed && styles.btnSecondaryPressed,
              ]}
            >
              <Text style={styles.btnSecondaryText}>Sign Up as Investor</Text>
            </Pressable>
          </View>

          {/* Sign In Link Footer */}
          <View style={styles.footerRow}>
            <Pressable onPress={handleDirectLogin} hitSlop={12}>
              <Text style={styles.footerText}>
                Already have an account? <Text style={styles.footerLink}>Log In</Text>
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
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    paddingTop: 36,
    paddingBottom: 68, // Lifted buttons up
    overflow: 'hidden',
  },
  
  /* Falling Blue Dew Particle Dots */
  blueDewDot: {
    position: 'absolute',
    top: 0,
    borderRadius: 999,
    backgroundColor: 'rgba(15, 82, 186, 0.45)', // Vibrant blue dew drop tint
    shadowColor: '#0F52BA',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },

  /* Center Section */
  centerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoCard: {
    paddingHorizontal: 36,
    paddingVertical: 26,
    borderRadius: 28,
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
    alignItems: 'center',
  },

  /* Bottom Section */
  bottomSection: {
    width: '100%',
    gap: 20,
    marginBottom: 16,
  },
  buttonsGroup: {
    width: '100%',
    gap: 14,
  },

  /* Primary Button - Vibrant Royal Blue */
  btnPrimaryBlue: {
    width: '100%',
    backgroundColor: '#0F52BA',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#0F52BA',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 14,
    elevation: 4,
  },
  btnPrimaryPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.985 }],
  },
  btnPrimaryText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: -0.3,
  },

  /* Secondary Button - Soft Blue Bordered */
  btnSecondaryBlue: {
    width: '100%',
    backgroundColor: '#EFF6FF',
    borderWidth: 2,
    borderColor: '#0F52BA',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSecondaryPressed: {
    backgroundColor: '#DBEAFE',
    transform: [{ scale: 0.985 }],
  },
  btnSecondaryText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F52BA',
    letterSpacing: -0.3,
  },

  /* Footer */
  footerRow: {
    alignItems: 'center',
    paddingTop: 4,
  },
  footerText: {
    fontSize: 14,
    color: '#475569',
    fontWeight: '500',
  },
  footerLink: {
    color: '#0F52BA',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
