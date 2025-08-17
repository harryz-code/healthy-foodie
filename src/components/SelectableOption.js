import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { COLORS, FONTS, SPACING, BORDER_RADIUS } from '../constants/theme';

const SelectableOption = ({ 
  title, 
  subtitle, 
  icon, 
  selected = false, 
  onPress, 
  style,
  variant = 'default' 
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selected ? styles.selected : styles.unselected,
        variant === 'large' && styles.large,
        style
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <View style={styles.textContainer}>
        <Text style={[styles.title, selected && styles.selectedText]}>{title}</Text>
        {subtitle && (
          <Text style={[styles.subtitle, selected && styles.selectedSubtext]}>
            {subtitle}
          </Text>
        )}
      </View>
      {selected && <View style={styles.checkmark}>✓</View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 1,
    marginBottom: SPACING.md,
  },
  large: {
    paddingVertical: SPACING.xl,
  },
  unselected: {
    backgroundColor: COLORS.background,
    borderColor: COLORS.border,
  },
  selected: {
    backgroundColor: COLORS.buttonPrimary,
    borderColor: COLORS.buttonPrimary,
  },
  iconContainer: {
    marginRight: SPACING.md,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: FONTS.lg,
    fontWeight: FONTS.semibold,
    color: COLORS.textPrimary,
  },
  subtitle: {
    fontSize: FONTS.sm,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
  selectedText: {
    color: COLORS.buttonText,
  },
  selectedSubtext: {
    color: COLORS.buttonText,
    opacity: 0.8,
  },
  checkmark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.buttonText,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: SPACING.md,
  },
});

export default SelectableOption;
