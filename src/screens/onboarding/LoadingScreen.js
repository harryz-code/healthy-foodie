import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressBar from '../../components/ProgressBar';
import { COLORS, FONTS, SPACING } from '../../constants/theme';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Main');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.percentage}>23%</Text>
        <Text style={styles.title}>We're getting your healthy menu ready</Text>
        
        <ProgressBar progress={23} height={8} style={styles.progressBar} />
        
        <Text style={styles.status}>Filtering restaurants</Text>
        
        <Text style={styles.disclaimer}>
          <Text style={styles.disclaimerTitle}>Disclaimer:</Text> MenuFit does not provide medical advice. All nutritional suggestions are for general informational purposes only and are not intended to diagnose, treat, or prevent any health condition. Meal recommendations are based on data collected by certified nutrition professionals and publicly available nutrition databases
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    paddingHorizontal: SPACING.lg,
  },
  content: {
    alignItems: 'center',
  },
  percentage: {
    fontSize: FONTS['5xl'],
    fontWeight: FONTS.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  title: {
    fontSize: FONTS.xl,
    fontWeight: FONTS.semibold,
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING['2xl'],
    lineHeight: 28,
  },
  progressBar: {
    width: '80%',
    marginBottom: SPACING.xl,
  },
  status: {
    fontSize: FONTS.base,
    color: COLORS.textSecondary,
    marginBottom: SPACING['3xl'],
  },
  disclaimer: {
    fontSize: FONTS.xs,
    color: COLORS.textTertiary,
    textAlign: 'center',
    lineHeight: 18,
  },
  disclaimerTitle: {
    fontWeight: FONTS.semibold,
  },
});

export default LoadingScreen;
