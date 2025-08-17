import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import Button from '../components/Button';
import { COLORS, FONTS, SPACING, BORDER_RADIUS } from '../constants/theme';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <View style={styles.logoContainer}>
            <View style={styles.logoIcon}>
              <Text style={styles.logoEmoji}>📦</Text>
            </View>
            <Text style={styles.logoText}>MenuFit</Text>
          </View>
          <Text style={styles.subtitle}>
            Your personalized healthy menu for every restaurant
          </Text>
        </View>

        <View style={styles.mockupContainer}>
          <View style={styles.mockupPhone}>
            <View style={styles.mockupHeader}>
              <Text style={styles.mockupTime}>9:41</Text>
              <View style={styles.mockupSignal}>
                <View style={styles.signalBar} />
                <View style={styles.signalBar} />
                <View style={styles.signalBar} />
              </View>
            </View>
            
            <View style={styles.mockupContent}>
              <Text style={styles.mockupRestaurant}>DUNKIN'</Text>
              
              <View style={styles.mockupMeal}>
                <View style={styles.mockupImage} />
                <View style={styles.mockupInfo}>
                  <Text style={styles.mockupMealName}>Egg Sandwich Combo</Text>
                  <Text style={styles.mockupMealDesc}>High-protein, high carb, pre workout meal.</Text>
                  
                  <View style={styles.mockupNutrition}>
                    <Text style={styles.mockupCalories}>830 CAL</Text>
                    <Text style={styles.mockupMacro}>45g Protein</Text>
                    <Text style={styles.mockupMacro}>57g Carbs</Text>
                    <Text style={styles.mockupMacro}>21g Fats</Text>
                  </View>
                </View>
              </View>
              
              <View style={styles.mockupButton}>
                <Text style={styles.mockupButtonText}>Order Now</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate('Gender')}
            style={styles.getStartedButton}
          />
          <Text style={styles.signInText}>
            Already have an account? <Text style={styles.signInLink}>Sign In</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: SPACING.xl,
  },
  welcomeText: {
    fontSize: FONTS.lg,
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  logoIcon: {
    width: 48,
    height: 48,
    borderRadius: BORDER_RADIUS.lg,
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.sm,
  },
  logoEmoji: {
    fontSize: 24,
  },
  logoText: {
    fontSize: FONTS['3xl'],
    fontWeight: FONTS.bold,
    color: COLORS.textPrimary,
  },
  subtitle: {
    fontSize: FONTS.base,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: SPACING.md,
  },
  mockupContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SPACING.xl,
  },
  mockupPhone: {
    width: 280,
    height: 400,
    backgroundColor: COLORS.background,
    borderRadius: BORDER_RADIUS['2xl'],
    borderWidth: 2,
    borderColor: COLORS.border,
    padding: SPACING.md,
  },
  mockupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  mockupTime: {
    fontSize: FONTS.sm,
    fontWeight: FONTS.semibold,
  },
  mockupSignal: {
    flexDirection: 'row',
    gap: 2,
  },
  signalBar: {
    width: 3,
    height: 12,
    backgroundColor: COLORS.textPrimary,
    borderRadius: 1,
  },
  mockupContent: {
    flex: 1,
  },
  mockupRestaurant: {
    fontSize: FONTS.sm,
    fontWeight: FONTS.bold,
    color: '#FF6600',
    textAlign: 'center',
    marginBottom: SPACING.lg,
  },
  mockupMeal: {
    flexDirection: 'row',
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.sm,
    marginBottom: SPACING.md,
  },
  mockupImage: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.backgroundGray,
    borderRadius: BORDER_RADIUS.sm,
    marginRight: SPACING.sm,
  },
  mockupInfo: {
    flex: 1,
  },
  mockupMealName: {
    fontSize: FONTS.sm,
    fontWeight: FONTS.semibold,
    marginBottom: 2,
  },
  mockupMealDesc: {
    fontSize: FONTS.xs,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
  },
  mockupNutrition: {
    flexDirection: 'row',
    gap: SPACING.xs,
  },
  mockupCalories: {
    fontSize: FONTS.xs,
    fontWeight: FONTS.semibold,
  },
  mockupMacro: {
    fontSize: FONTS.xs,
    color: COLORS.textSecondary,
  },
  mockupButton: {
    backgroundColor: COLORS.buttonPrimary,
    borderRadius: BORDER_RADIUS.xl,
    paddingVertical: SPACING.sm,
    alignItems: 'center',
  },
  mockupButtonText: {
    color: COLORS.buttonText,
    fontSize: FONTS.sm,
    fontWeight: FONTS.semibold,
  },
  footer: {
    marginBottom: SPACING.xl,
  },
  getStartedButton: {
    marginBottom: SPACING.md,
  },
  signInText: {
    textAlign: 'center',
    fontSize: FONTS.base,
    color: COLORS.textSecondary,
  },
  signInLink: {
    color: COLORS.textPrimary,
    fontWeight: FONTS.semibold,
  },
});

export default WelcomeScreen;
