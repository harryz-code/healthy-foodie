import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import NutritionCircle from '../components/NutritionCircle';
import { COLORS, FONTS, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';

const ProfileScreen = ({ navigation }) => {
  // Mock user data based on your screenshots
  const userProfile = {
    height: "5'9\"",
    weight: "230.0 lbs",
    goal: "Cut",
    dailyCalories: 2500,
    macros: {
      protein: { value: 185, percentage: 30 },
      carbs: { value: 247, percentage: 40 },
      fat: { value: 82, percentage: 30 }
    }
  };

  const settingsOptions = [
    { id: 1, title: "Edit Preferences", icon: "⚙️" },
    { id: 2, title: "Terms and Conditions", icon: "📄" },
    { id: 3, title: "Privacy Policy", icon: "🔒" },
    { id: 4, title: "Source of Data & AI", icon: "🤖" }
  ];

  const handleSettingPress = (setting) => {
    if (setting.title === "Source of Data & AI") {
      navigation.navigate("DataSourceInfo");
    } else {
      console.log(`Navigate to ${setting.title}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Settings</Text>
          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileIcon}>👤</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Text style={styles.sectionTitle}>Profile</Text>
          
          <View style={styles.profileStats}>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Height</Text>
              <Text style={styles.statValue}>{userProfile.height}</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Weight</Text>
              <Text style={styles.statValue}>{userProfile.weight}</Text>
            </View>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Goal</Text>
              <Text style={styles.statValue}>{userProfile.goal}</Text>
            </View>
          </View>
        </View>

        {/* Daily Macros Section */}
        <View style={styles.macrosSection}>
          <Text style={styles.sectionTitle}>Total Daily Macros</Text>
          
          <View style={styles.macrosContainer}>
            <View style={styles.calorieCircle}>
              <Text style={styles.calorieValue}>2.5K</Text>
              <Text style={styles.calorieLabel}>Calorie</Text>
            </View>
            
            <View style={styles.macrosList}>
              <View style={styles.macroItem}>
                <View style={[styles.macroIndicator, { backgroundColor: COLORS.protein }]} />
                <View style={styles.macroInfo}>
                  <Text style={styles.macroLabel}>Protein</Text>
                  <Text style={styles.macroValue}>
                    {userProfile.macros.protein.value}g - {userProfile.macros.protein.percentage}%
                  </Text>
                </View>
              </View>
              
              <View style={styles.macroItem}>
                <View style={[styles.macroIndicator, { backgroundColor: COLORS.carbs }]} />
                <View style={styles.macroInfo}>
                  <Text style={styles.macroLabel}>Carbs</Text>
                  <Text style={styles.macroValue}>
                    {userProfile.macros.carbs.value}g - {userProfile.macros.carbs.percentage}%
                  </Text>
                </View>
              </View>
              
              <View style={styles.macroItem}>
                <View style={[styles.macroIndicator, { backgroundColor: COLORS.fat }]} />
                <View style={styles.macroInfo}>
                  <Text style={styles.macroLabel}>Fat</Text>
                  <Text style={styles.macroValue}>
                    {userProfile.macros.fat.value}g - {userProfile.macros.fat.percentage}%
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Settings Section */}
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Settings</Text>
          
          {settingsOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.settingItem}
              onPress={() => handleSettingPress(option)}
            >
              <View style={styles.settingContent}>
                <Text style={styles.settingIcon}>{option.icon}</Text>
                <Text style={styles.settingTitle}>{option.title}</Text>
              </View>
              <Text style={styles.settingArrow}>→</Text>
            </TouchableOpacity>
          ))}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.lg,
  },
  headerTitle: {
    fontSize: FONTS['2xl'],
    fontWeight: FONTS.bold,
    color: COLORS.textPrimary,
  },
  profileButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.backgroundGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    fontSize: 24,
  },
  profileSection: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  sectionTitle: {
    fontSize: FONTS.lg,
    fontWeight: FONTS.semibold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.lg,
  },
  profileStats: {
    backgroundColor: COLORS.background,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    ...SHADOWS.sm,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  statLabel: {
    fontSize: FONTS.base,
    color: COLORS.textPrimary,
  },
  statValue: {
    fontSize: FONTS.base,
    fontWeight: FONTS.semibold,
    color: COLORS.textSecondary,
  },
  macrosSection: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  macrosContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.background,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    ...SHADOWS.sm,
    alignItems: 'center',
  },
  calorieCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: COLORS.textPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.lg,
  },
  calorieValue: {
    fontSize: FONTS.xl,
    fontWeight: FONTS.bold,
    color: COLORS.textPrimary,
  },
  calorieLabel: {
    fontSize: FONTS.sm,
    color: COLORS.textSecondary,
  },
  macrosList: {
    flex: 1,
  },
  macroItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  macroIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: SPACING.sm,
  },
  macroInfo: {
    flex: 1,
  },
  macroLabel: {
    fontSize: FONTS.base,
    fontWeight: FONTS.semibold,
    color: COLORS.textPrimary,
  },
  macroValue: {
    fontSize: FONTS.sm,
    color: COLORS.textSecondary,
  },
  settingsSection: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.background,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.lg,
    marginBottom: SPACING.sm,
    ...SHADOWS.sm,
  },
  settingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    fontSize: 20,
    marginRight: SPACING.md,
  },
  settingTitle: {
    fontSize: FONTS.base,
    color: COLORS.textPrimary,
  },
  settingArrow: {
    fontSize: FONTS.lg,
    color: COLORS.textTertiary,
  },
});

export default ProfileScreen;
