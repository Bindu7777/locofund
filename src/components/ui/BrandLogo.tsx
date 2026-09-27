import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { COLORS } from '../../constants/theme';

const logoSource = require('../../../assets/images/locofund_logo.png');

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  variant?: 'dark' | 'light';
  layout?: 'row' | 'column' | 'name-first';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  size = 'md', 
  showSubtitle = false,
  variant = 'dark',
  layout = 'row'
}) => {
  const iconSize = size === 'sm' ? 34 : size === 'lg' ? 68 : 44;
  const fontSize = size === 'sm' ? 20 : size === 'lg' ? 38 : 28;

  const isLight = variant === 'light';

  if (layout === 'name-first' || layout === 'column') {
    return (
      <View style={styles.containerColumn}>
        {/* Brand Name on Top */}
        <View style={styles.textContainerCenter}>
          <Text style={[
            styles.brandName, 
            { fontSize },
            isLight && { color: '#FFFFFF' }
          ]}>
            Loco<Text style={{ color: isLight ? '#FFFFFF' : COLORS.primary.main }}>Fund</Text>
          </Text>
          {showSubtitle && (
            <Text style={[
              styles.subtitle,
              isLight && { color: '#BFDBFE' }
            ]}>
              GROWTH NETWORK
            </Text>
          )}
        </View>

        {/* Logo Image Below Brand Name */}
        <View style={[
          styles.iconWrapper, 
          { width: iconSize + 10, height: iconSize + 10 },
          isLight && styles.iconWrapperLight
        ]}>
          <Image
            source={logoSource}
            style={{ width: iconSize, height: iconSize, borderRadius: 12 }}
            contentFit="contain"
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={[
        styles.iconWrapper, 
        { width: iconSize + 6, height: iconSize + 6 },
        isLight && styles.iconWrapperLight
      ]}>
        <Image
          source={logoSource}
          style={{ width: iconSize, height: iconSize, borderRadius: 8 }}
          contentFit="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={[
          styles.brandName, 
          { fontSize },
          isLight && { color: '#FFFFFF' }
        ]}>
          Loco<Text style={{ color: isLight ? '#FFFFFF' : COLORS.primary.main }}>Fund</Text>
        </Text>
        {showSubtitle && (
          <Text style={[
            styles.subtitle,
            isLight && { color: '#BFDBFE' }
          ]}>
            GROWTH NETWORK
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  containerColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 14,
  },
  textContainerCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
    padding: 3,
  },
  iconWrapperLight: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  textContainer: {
    justifyContent: 'center',
  },
  brandName: {
    fontWeight: '800',
    color: COLORS.text.primary,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.primary.main,
    letterSpacing: 1.5,
    marginTop: -2,
  }
});

