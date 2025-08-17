import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import Button from '../../components/Button';
import authService from '../../services/authService';
import { COLORS, FONTS, SPACING, BORDER_RADIUS } from '../../constants/theme';

const LoginScreen = ({ navigation }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailAuth = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (isSignUp && password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      let result;
      if (isSignUp) {
        result = await authService.signUpWithEmail(email, password, {
          displayName: 'Healthy Foodie User'
        });
      } else {
        result = await authService.signInWithEmail(email, password);
      }

      if (result.success) {
        navigation.navigate('Main');
      } else {
        Alert.alert('Error', result.error);
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialAuth = async (provider) => {
    setLoading(true);
    
    try {
      let result;
      if (provider === 'google') {
        result = await authService.signInWithGoogle();
      } else if (provider === 'apple') {
        result = await authService.signInWithApple();
      }

      if (result.success) {
        navigation.navigate('Main');
      } else {
        Alert.alert('Info', result.error);
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address first');
      return;
    }

    const result = await authService.resetPassword(email);
    if (result.success) {
      Alert.alert('Success', 'Password reset email sent!');
    } else {
      Alert.alert('Error', result.error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <View style={styles.logoIcon}>
              <Text style={styles.logoEmoji}>📦</Text>
            </View>
            <Text style={styles.logoText}>MenuFit</Text>
          </View>

          {/* Title */}
          <Text style={styles.title}>
            {isSignUp ? 'Create your MenuFit Account' : 'Welcome back to MenuFit'}
          </Text>
          <Text style={styles.subtitle}>
            {isSignUp 
              ? 'Sign up to unlock personalized recommendations and track your progress.' 
              : 'Sign in to continue your healthy eating journey.'
            }
          </Text>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoComplete="password"
            />
          </View>

          {/* Confirm Password (Sign Up only) */}
          {isSignUp && (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>
          )}

          {/* Forgot Password (Sign In only) */}
          {!isSignUp && (
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          )}

          {/* Email Auth Button */}
          <Button
            title={isSignUp ? 'Sign Up' : 'Sign In'}
            onPress={handleEmailAuth}
            loading={loading}
            style={styles.authButton}
          />

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social Auth Buttons */}
          <Button
            title="🍎 Sign in with Apple"
            onPress={() => handleSocialAuth('apple')}
            variant="primary"
            style={styles.socialButton}
            disabled={loading}
          />
          
          <Button
            title="G Sign in with Google"
            onPress={() => handleSocialAuth('google')}
            variant="secondary"
            style={styles.socialButton}
            disabled={loading}
          />

          {/* Toggle Sign Up/Sign In */}
          <TouchableOpacity 
            style={styles.toggleContainer}
            onPress={() => setIsSignUp(!isSignUp)}
          >
            <Text style={styles.toggleText}>
              {isSignUp ? 'Already have an account? ' : 'Don\'t have an account? '}
              <Text style={styles.toggleLink}>
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: FONTS.xl,
    color: COLORS.textPrimary,
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.xl,
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
    fontSize: FONTS['2xl'],
    fontWeight: FONTS.bold,
    color: COLORS.textPrimary,
  },
  title: {
    fontSize: FONTS.xl,
    fontWeight: FONTS.bold,
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  subtitle: {
    fontSize: FONTS.base,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: SPACING['2xl'],
  },
  inputContainer: {
    marginBottom: SPACING.md,
  },
  input: {
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    fontSize: FONTS.base,
    color: COLORS.textPrimary,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  forgotPassword: {
    fontSize: FONTS.sm,
    color: COLORS.accent,
    textAlign: 'right',
    marginBottom: SPACING.lg,
  },
  authButton: {
    marginBottom: SPACING.lg,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SPACING.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },
  dividerText: {
    marginHorizontal: SPACING.md,
    fontSize: FONTS.sm,
    color: COLORS.textTertiary,
  },
  socialButton: {
    marginBottom: SPACING.md,
  },
  toggleContainer: {
    marginTop: SPACING.lg,
    alignItems: 'center',
  },
  toggleText: {
    fontSize: FONTS.base,
    color: COLORS.textSecondary,
  },
  toggleLink: {
    color: COLORS.accent,
    fontWeight: FONTS.semibold,
  },
});

export default LoginScreen;
