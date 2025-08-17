import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import { COLORS, FONTS, SPACING, BORDER_RADIUS } from '../constants/theme';

const DataSourceInfoScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Source of Data & AI</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.disclaimer}>
            MenuFit does not provide medical advice, clinical guidance, or treatment plans. All nutritional suggestions are for general informational and educational purposes only and are not intended to diagnose, treat, cure, or prevent any medical condition.
          </Text>

          <Text style={styles.paragraph}>
            Any medical or nutrition information provided in this app is for general informational purposes only. The data is sourced from{' '}
            <Text style={styles.link}>Nutritionix</Text> and <Text style={styles.link}>OpenAI</Text> APIs.
          </Text>

          <Text style={styles.paragraph}>
            It should not be considered a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider regarding any questions you may have about a medical condition or nutritional guidance.
          </Text>

          <Text style={styles.paragraph}>
            Calorie and macro targets are calculated using standard nutritional equations (such as the Mifflin-St Jeor formula) based solely on user-provided inputs such as age, gender, weight, and activity level — similar to many popular fitness or calorie-tracking apps.
          </Text>

          <Text style={styles.paragraph}>
            Meal suggestions are created based on data from certified nutrition professionals and publicly available nutrition databases. These recommendations are not a substitute for professional medical advice and are designed to help users discover meals that may align with general fitness goals, such as weight loss or muscle gain.
          </Text>

          <Text style={styles.finalDisclaimer}>
            MenuFit does not make any disease-related claims and is not marketed for medical use.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
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
  headerTitle: {
    fontSize: FONTS.lg,
    fontWeight: FONTS.semibold,
    color: COLORS.textPrimary,
    flex: 1,
    textAlign: 'center',
  },
  placeholder: {
    width: 40,
  },
  content: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xl,
  },
  disclaimer: {
    fontSize: FONTS.base,
    color: COLORS.textPrimary,
    lineHeight: 24,
    marginBottom: SPACING.lg,
    fontWeight: FONTS.medium,
  },
  paragraph: {
    fontSize: FONTS.base,
    color: COLORS.textPrimary,
    lineHeight: 24,
    marginBottom: SPACING.lg,
  },
  link: {
    color: COLORS.accent,
    textDecorationLine: 'underline',
  },
  finalDisclaimer: {
    fontSize: FONTS.base,
    color: COLORS.textPrimary,
    lineHeight: 24,
    fontWeight: FONTS.semibold,
  },
});

export default DataSourceInfoScreen;
