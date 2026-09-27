/**
 * LocoFund Design System & Theme Constants
 * Deep/royal blue identity for modern Indian startup ecosystem
 */

export const COLORS = {
  // Brand Primary Identity
  primary: {
    main: '#0F52BA',       // Deep / Royal Blue
    dark: '#0A3F93',        // Dark Blue for active states
    light: '#2563EB',       // Bright Royal Blue
    soft: '#EFF6FF',        // Very Light Blue background highlight
    border: '#DBEAFE',      // Light blue border
  },
  
  // Backgrounds & Surface Neutral Colors
  background: {
    screen: '#FFFFFF',      // Clean White
    surface: '#F8FAFC',     // Light slate tint
    card: '#FFFFFF',        // Card container
    cardHover: '#F1F5F9',
    subtleBadge: '#F0F7FF',
  },

  // Typography Colors
  text: {
    primary: '#0F172A',     // Dark Navy / Near Black
    secondary: '#475569',   // Cool Slate Subtext
    muted: '#94A3B8',       // Muted Text
    light: '#FFFFFF',       // Pure White Text
    link: '#0F52BA',        // Primary Link
  },

  // Subtle Accents & Status Indicators (Non-banking)
  accent: {
    indigo: '#4F46E5',
    teal: '#0D9488',
    sky: '#0284C7',
    badgeText: '#1E40AF',
    borderLight: '#E2E8F0',
    borderFocus: '#93C5FD',
  }
} as const;

export const TYPOGRAPHY = {
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },
  fontWeight: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
  },
  lineHeight: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
  }
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
} as const;

export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  full: 9999,
} as const;

export const SHADOWS = {
  card: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 2,
  },
  cardHover: {
    shadowColor: '#0F52BA',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 4,
  },
  button: {
    shadowColor: '#0F52BA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 3,
  }
} as const;

// Backward-compatible Aliases
export const Colors = COLORS;
export const Spacing = SPACING;
export const Fonts = TYPOGRAPHY;
export type ThemeColor = keyof typeof COLORS;
export const BottomTabInset = 16;
export const MaxContentWidth = 1200;

export default {
  colors: COLORS,
  typography: TYPOGRAPHY,
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  shadows: SHADOWS,
  Colors,
  Spacing,
  Fonts,
  BottomTabInset,
  MaxContentWidth,
};
