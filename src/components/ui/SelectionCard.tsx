import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import { Building2, Compass, Sparkles } from 'lucide-react-native';
import { COLORS, SHADOWS } from '../../constants/theme';
import { PrimaryButton } from './PrimaryButton';

interface SelectionCardProps {
  type: 'business' | 'investor';
  title: string;
  description: string;
  ctaText: string;
  badgeText: string;
  onPress: () => void;
}

export const SelectionCard: React.FC<SelectionCardProps> = ({
  type,
  title,
  description,
  ctaText,
  badgeText,
  onPress,
}) => {
  const [scaleAnim] = useState(() => new Animated.Value(1));
  const isBusiness = type === 'business';

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.985,
      useNativeDriver: true,
      speed: 40,
      bounciness: 3,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 40,
      bounciness: 3,
    }).start();
  };

  const IconComponent = isBusiness ? Building2 : Compass;

  return (
    <Animated.View style={[{ transform: [{ scale: scaleAnim }] }, styles.outerContainer]}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={({ pressed }) => [
          styles.card,
          pressed && styles.cardPressed,
        ]}
      >
        {/* Top Header Badge */}
        <View style={styles.topHeader}>
          <View style={styles.badgeContainer}>
            <View style={styles.iconCircle}>
              <IconComponent size={18} color={COLORS.primary.main} strokeWidth={2.2} />
            </View>
            <Text style={styles.badgeText}>{badgeText.toUpperCase()}</Text>
          </View>
          <View style={styles.sparkleTag}>
            <Sparkles size={12} color={COLORS.primary.main} />
          </View>
        </View>

        {/* Card Title */}
        <Text style={styles.title}>{title}</Text>

        {/* Card Description */}
        <Text style={styles.description}>{description}</Text>

        {/* Card Action Button */}
        <View style={styles.buttonWrapper}>
          <PrimaryButton
            title={ctaText}
            onPress={onPress}
            variant="primary"
            showArrow
          />
        </View>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    marginBottom: 20,
  },
  card: {
    backgroundColor: COLORS.background.card,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    ...SHADOWS.card,
  },
  cardPressed: {
    borderColor: COLORS.primary.main,
    backgroundColor: '#F8FAFC',
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary.soft,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 8,
  },
  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.primary.main,
    letterSpacing: 0.8,
  },
  sparkleTag: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: COLORS.primary.soft,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.text.primary,
    marginBottom: 10,
    letterSpacing: -0.4,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.text.secondary,
    lineHeight: 22,
    marginBottom: 24,
  },
  buttonWrapper: {
    marginTop: 'auto',
  },
});
