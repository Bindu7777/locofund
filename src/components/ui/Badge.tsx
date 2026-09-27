import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

interface BadgeProps {
  label: string;
  variant?: 'primary' | 'neutral';
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = 'primary' }) => {
  const isPrimary = variant === 'primary';

  return (
    <View style={[
      styles.badge,
      { backgroundColor: isPrimary ? COLORS.primary.soft : '#F1F5F9' }
    ]}>
      <View style={[
        styles.dot,
        { backgroundColor: isPrimary ? COLORS.primary.main : '#64748B' }
      ]} />
      <Text style={[
        styles.label,
        { color: isPrimary ? COLORS.primary.main : '#475569' }
      ]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});
