// Theme constants based on the MenuFit design screenshots
export const COLORS = {
  // Primary colors
  primary: '#000000',
  secondary: '#6B7280',
  accent: '#3B82F6',
  
  // Background colors
  background: '#FFFFFF',
  backgroundSecondary: '#F9FAFB',
  backgroundGray: '#F3F4F6',
  
  // Text colors
  textPrimary: '#000000',
  textSecondary: '#6B7280',
  textTertiary: '#9CA3AF',
  
  // Button colors
  buttonPrimary: '#000000',
  buttonSecondary: '#F3F4F6',
  buttonText: '#FFFFFF',
  buttonTextSecondary: '#000000',
  
  // Status colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  
  // Nutrition colors
  protein: '#3B82F6',
  carbs: '#F59E0B',
  fat: '#8B5CF6',
  
  // Score colors
  excellent: '#10B981',
  good: '#84CC16',
  fair: '#F59E0B',
  poor: '#EF4444',
  
  // Border colors
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
};

export const FONTS = {
  // Font families
  primary: 'System',
  
  // Font sizes
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
  
  // Font weights
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
};

export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  full: 9999,
};

export const SHADOWS = {
  sm: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
};
