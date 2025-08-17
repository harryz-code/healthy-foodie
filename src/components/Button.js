import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS, FONTS, SPACING, BORDER_RADIUS } from '../constants/theme';

const Button = ({
  title,
  onPress,
  variant = 'primary',
  size = 'large',
  disabled = false,
  loading = false,
  style,
  textStyle,
  ...props
}) => {
  const getButtonStyle = () => {
    const baseStyle = [styles.button];
    
    // Size styles
    if (size === 'large') {
      baseStyle.push(styles.large);
    } else if (size === 'medium') {
      baseStyle.push(styles.medium);
    } else if (size === 'small') {
      baseStyle.push(styles.small);
    }
    
    // Variant styles
    if (variant === 'primary') {
      baseStyle.push(styles.primary);
    } else if (variant === 'secondary') {
      baseStyle.push(styles.secondary);
    } else if (variant === 'outline') {
      baseStyle.push(styles.outline);
    }
    
    // Disabled style
    if (disabled) {
      baseStyle.push(styles.disabled);
    }
    
    return baseStyle;
  };
  
  const getTextStyle = () => {
    const baseStyle = [styles.text];
    
    if (variant === 'primary') {
      baseStyle.push(styles.primaryText);
    } else if (variant === 'secondary') {
      baseStyle.push(styles.secondaryText);
    } else if (variant === 'outline') {
      baseStyle.push(styles.outlineText);
    }
    
    if (disabled) {
      baseStyle.push(styles.disabledText);
    }
    
    return baseStyle;
  };

  return (
    <TouchableOpacity
      style={[...getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      {...props}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'primary' ? COLORS.buttonText : COLORS.textPrimary} 
          size="small" 
        />
      ) : (
        <Text style={[...getTextStyle(), textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: BORDER_RADIUS.xl,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  
  // Size styles
  large: {
    height: 56,
    paddingHorizontal: SPACING.lg,
  },
  medium: {
    height: 48,
    paddingHorizontal: SPACING.lg,
  },
  small: {
    height: 40,
    paddingHorizontal: SPACING.md,
  },
  
  // Variant styles
  primary: {
    backgroundColor: COLORS.buttonPrimary,
  },
  secondary: {
    backgroundColor: COLORS.buttonSecondary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  
  // Text styles
  text: {
    fontSize: FONTS.base,
    fontWeight: FONTS.semibold,
  },
  primaryText: {
    color: COLORS.buttonText,
  },
  secondaryText: {
    color: COLORS.buttonTextSecondary,
  },
  outlineText: {
    color: COLORS.textPrimary,
  },
  
  // Disabled styles
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    opacity: 0.5,
  },
});

export default Button;
