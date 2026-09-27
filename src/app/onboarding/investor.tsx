import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Compass, CheckCircle2 } from 'lucide-react-native';
import { Container } from '../../components/ui/Container';
import { BrandLogo } from '../../components/ui/BrandLogo';
import { COLORS } from '../../constants/theme';
import { PrimaryButton } from '../../components/ui/PrimaryButton';

export default function InvestorOnboardingScreen() {
  const router = useRouter();

  return (
    <Container scrollable style={styles.container}>
      {/* Header Bar with Back Button */}
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.backButtonPressed,
          ]}
          hitSlop={12}
        >
          <ArrowLeft size={22} color={COLORS.text.primary} />
        </Pressable>
        <BrandLogo size="sm" />
      </View>

      {/* Main Content Area */}
      <View style={styles.content}>
        <View style={styles.iconBox}>
          <Compass size={40} color={COLORS.primary.main} strokeWidth={2} />
        </View>

        <Text style={styles.title}>Investor onboarding coming next.</Text>
        
        <Text style={styles.subtitle}>
          Discover high-potential Indian businesses, micro-enterprises, and innovation projects where you can invest capital, offer mentorship, or contribute skills.
        </Text>

        {/* Feature List Preview */}
        <View style={styles.featureBox}>
          <Text style={styles.featureBoxTitle}>Upcoming Investor Capabilities:</Text>

          <View style={styles.featureItem}>
            <CheckCircle2 size={18} color={COLORS.primary.main} />
            <Text style={styles.featureText}>Browse curated Indian business opportunities</Text>
          </View>

          <View style={styles.featureItem}>
            <CheckCircle2 size={18} color={COLORS.primary.main} />
            <Text style={styles.featureText}>Filter by industry, location & collaboration type</Text>
          </View>

          <View style={styles.featureItem}>
            <CheckCircle2 size={18} color={COLORS.primary.main} />
            <Text style={styles.featureText}>Engage directly with founders & business builders</Text>
          </View>
        </View>
      </View>

      {/* Footer CTA */}
      <View style={styles.footer}>
        <PrimaryButton
          title="Back to Role Selection"
          onPress={() => router.back()}
          variant="outline"
          showArrow={false}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 32,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonPressed: {
    backgroundColor: '#E2E8F0',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  iconBox: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: COLORS.primary.soft,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.text.primary,
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.text.secondary,
    textAlign: 'center',
    lineHeight: 23,
    marginBottom: 32,
  },
  featureBox: {
    width: '100%',
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 14,
  },
  featureBoxTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.text.primary,
    marginBottom: 4,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  featureText: {
    fontSize: 14,
    color: COLORS.text.primary,
    fontWeight: '500',
  },
  footer: {
    marginTop: 40,
  },
});
