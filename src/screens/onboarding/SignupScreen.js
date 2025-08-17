import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OnboardingLayout from '../../components/OnboardingLayout';
import Button from '../../components/Button';
import { SPACING, COLORS, FONTS } from '../../constants/theme';

const SignupScreen = ({ navigation }) => {
  return (
    <OnboardingLayout
      title="Create your MenuFit Account"
      subtitle="Sign up to unlock personalized recommendations and track your progress."
      progress={90}
      onBack={() => navigation.goBack()}
    >
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <Text style={styles.logoEmoji}>📦</Text>
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <Button
            title="🍎 Sign in with Apple"
            onPress={() => navigation.navigate('Loading')}
            style={styles.appleButton}
          />
          <Button
            title="G Sign in with Google"
            onPress={() => navigation.navigate('Loading')}
            variant="secondary"
            style={styles.googleButton}
          />
        </View>
      </View>
    </OnboardingLayout>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: SPACING['2xl'],
  },
  logoIcon: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoEmoji: {
    fontSize: 40,
  },
  buttonContainer: {
    width: '100%',
    gap: SPACING.md,
  },
  appleButton: {
    backgroundColor: COLORS.buttonPrimary,
  },
  googleButton: {
    borderWidth: 1,
    borderColor: COLORS.border,
  },
});

export default SignupScreen;
