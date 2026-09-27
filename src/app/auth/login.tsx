import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Lock, Mail, Smartphone } from 'lucide-react-native';
import { Container } from '../../components/ui/Container';
import { BrandLogo } from '../../components/ui/BrandLogo';
import { COLORS } from '../../constants/theme';
import { PrimaryButton } from '../../components/ui/PrimaryButton';

export default function LoginScreen() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState('');
  const [method, setMethod] = useState<'phone' | 'email'>('phone');

  return (
    <Container scrollable style={styles.container}>
      {/* Header Bar */}
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

      {/* Main Login Form Mock */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Welcome back to LocoFund</Text>
        <Text style={styles.subtitle}>
          Log in to manage your business postings, investments, or ongoing collaborations.
        </Text>

        {/* Method Toggle */}
        <View style={styles.tabContainer}>
          <Pressable
            onPress={() => setMethod('phone')}
            style={[styles.tab, method === 'phone' && styles.activeTab]}
          >
            <Smartphone size={16} color={method === 'phone' ? COLORS.primary.main : COLORS.text.secondary} />
            <Text style={[styles.tabText, method === 'phone' && styles.activeTabText]}>Mobile Number</Text>
          </Pressable>

          <Pressable
            onPress={() => setMethod('email')}
            style={[styles.tab, method === 'email' && styles.activeTab]}
          >
            <Mail size={16} color={method === 'email' ? COLORS.primary.main : COLORS.text.secondary} />
            <Text style={[styles.tabText, method === 'email' && styles.activeTabText]}>Email Address</Text>
          </Pressable>
        </View>

        {/* Input Field */}
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>
            {method === 'phone' ? 'Enter Mobile Number' : 'Enter Email Address'}
          </Text>
          <View style={styles.inputBox}>
            {method === 'phone' ? (
              <Text style={styles.prefix}>+91</Text>
            ) : (
              <Mail size={18} color={COLORS.text.muted} />
            )}
            <TextInput
              style={styles.input}
              placeholder={method === 'phone' ? '98765 43210' : 'name@example.com'}
              placeholderTextColor={COLORS.text.muted}
              value={identifier}
              onChangeText={setIdentifier}
              keyboardType={method === 'phone' ? 'phone-pad' : 'email-address'}
              autoCapitalize="none"
            />
          </View>
        </View>

        <PrimaryButton
          title="Get Verification OTP"
          onPress={() => alert('V0.1 Prototype: Backend authentication will be connected in next version.')}
          variant="primary"
          style={{ marginTop: 12 }}
        />

        <View style={styles.infoBadge}>
          <Lock size={14} color={COLORS.primary.main} />
          <Text style={styles.infoText}>Secured login placeholder for LocoFund V0.1</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Pressable onPress={() => router.push('/auth/signup')}>
          <Text style={styles.backLink}>{"Don't have an account?"} <Text style={{ textDecorationLine: 'underline' }}>Sign Up</Text></Text>
        </Pressable>
        <Pressable onPress={() => router.back()} style={{ marginTop: 12 }}>
          <Text style={[styles.backLink, { color: COLORS.text.secondary }]}>← Return to Selection Screen</Text>
        </Pressable>
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
    marginBottom: 28,
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
  formContainer: {
    paddingVertical: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.text.primary,
    letterSpacing: -0.6,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.text.secondary,
    lineHeight: 22,
    marginBottom: 24,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    borderRadius: 14,
    padding: 4,
    marginBottom: 24,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    gap: 8,
  },
  activeTab: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text.secondary,
  },
  activeTabText: {
    color: COLORS.primary.main,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.text.primary,
    marginBottom: 8,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 52,
    gap: 10,
  },
  prefix: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text.primary,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: COLORS.text.primary,
  },
  infoBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary.soft,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginTop: 20,
    gap: 8,
  },
  infoText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary.main,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  backLink: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary.main,
  },
});
