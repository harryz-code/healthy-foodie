import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity,
  Image 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import { COLORS, FONTS, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';

const HomeScreen = () => {
  const navigation = useNavigation();

  const featuredMeals = [
    {
      id: 1,
      name: "Buffalo Chicken Power Wrap",
      restaurant: "Subway",
      calories: 550,
      score: 97,
      description: "Nearly top-tier. Won't throw off your progress.",
      protein: 23,
      carbs: 31,
      fat: 9,
    },
    {
      id: 2,
      name: "Lean Shredder",
      restaurant: "Chipotle",
      calories: 400,
      score: 100,
      description: "Incredible alignment with your macros. Spot on.",
      protein: 64,
      carbs: 14,
      fat: 15,
    }
  ];

  const quickActions = [
    {
      id: 1,
      title: "Take a photo of the restaurant",
      subtitle: "Get personalized meal suggestions based on your goals and preferences.",
      icon: "📷",
      action: () => navigation.navigate("RestaurantCamera")
    },
    {
      id: 2,
      title: "Search by name",
      subtitle: "Find restaurants and get healthy recommendations.",
      icon: "🔍",
      action: () => navigation.navigate("RestaurantSearch")
    },
    {
      id: 3,
      title: "Chat with MenuFit Coach",
      subtitle: "Get personalized nutrition advice and meal planning.",
      icon: "💬",
      action: () => navigation.navigate("MenuFitCoach")
    }
  ];

  const getScoreColor = (score) => {
    if (score >= 90) return COLORS.excellent;
    if (score >= 80) return COLORS.good;
    if (score >= 60) return COLORS.warning;
    return COLORS.error;
  };

  const renderMealCard = (meal) => (
    <TouchableOpacity key={meal.id} style={styles.mealCard}>
      <View style={styles.mealImagePlaceholder} />
      <View style={styles.mealInfo}>
        <View style={styles.mealHeader}>
          <View style={styles.mealTitleContainer}>
            <Text style={styles.mealName}>{meal.name}</Text>
            <Text style={styles.restaurantName}>{meal.restaurant}</Text>
          </View>
          <View style={[styles.scoreCircle, { borderColor: getScoreColor(meal.score) }]}>
            <Text style={[styles.scoreText, { color: getScoreColor(meal.score) }]}>
              {meal.score}
            </Text>
            <Text style={styles.scoreLabel}>EXCELLENT</Text>
          </View>
        </View>
        
        <Text style={styles.mealDescription}>{meal.description}</Text>
        
        <View style={styles.nutritionInfo}>
          <View style={styles.calorieInfo}>
            <Text style={styles.calories}>{meal.calories}</Text>
            <Text style={styles.calorieLabel}>CAL</Text>
          </View>
          <View style={styles.macros}>
            <Text style={styles.macro}>{meal.protein}g Protein</Text>
            <Text style={styles.macro}>{meal.carbs}g Carbs</Text>
            <Text style={styles.macro}>{meal.fat}g Fats</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={styles.logoIcon}>
              <Text style={styles.logoEmoji}>📦</Text>
            </View>
            <Text style={styles.logoText}>MenuFit</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileIcon}>👤</Text>
          </TouchableOpacity>
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Perfect meal to get started:</Text>
        </View>

        {/* Featured Meals */}
        <View style={styles.featuredMeals}>
          {featuredMeals.map(renderMealCard)}
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsSection}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          {quickActions.map((action) => (
            <TouchableOpacity 
              key={action.id} 
              style={styles.actionCard}
              onPress={action.action}
            >
              <View style={styles.actionIcon}>
                <Text style={styles.actionEmoji}>{action.icon}</Text>
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>{action.title}</Text>
                <Text style={styles.actionSubtitle}>{action.subtitle}</Text>
              </View>
              <Text style={styles.actionArrow}>→</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
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
    paddingTop: SPACING.md,
    paddingBottom: SPACING.lg,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    width: 32,
    height: 32,
    borderRadius: BORDER_RADIUS.sm,
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.sm,
  },
  logoEmoji: {
    fontSize: 16,
  },
  logoText: {
    fontSize: FONTS.xl,
    fontWeight: FONTS.bold,
    color: COLORS.textPrimary,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.backgroundGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    fontSize: 20,
  },
  welcomeSection: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  welcomeTitle: {
    fontSize: FONTS.lg,
    fontWeight: FONTS.semibold,
    color: COLORS.textPrimary,
  },
  featuredMeals: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  mealCard: {
    backgroundColor: COLORS.background,
    borderRadius: BORDER_RADIUS.lg,
    marginBottom: SPACING.lg,
    ...SHADOWS.md,
    overflow: 'hidden',
  },
  mealImagePlaceholder: {
    height: 120,
    backgroundColor: COLORS.backgroundGray,
  },
  mealInfo: {
    padding: SPACING.md,
  },
  mealHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: SPACING.sm,
  },
  mealTitleContainer: {
    flex: 1,
    marginRight: SPACING.md,
  },
  mealName: {
    fontSize: FONTS.lg,
    fontWeight: FONTS.semibold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  restaurantName: {
    fontSize: FONTS.sm,
    color: COLORS.textSecondary,
  },
  scoreCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: {
    fontSize: FONTS.lg,
    fontWeight: FONTS.bold,
  },
  scoreLabel: {
    fontSize: 8,
    fontWeight: FONTS.semibold,
    color: COLORS.excellent,
  },
  mealDescription: {
    fontSize: FONTS.sm,
    color: COLORS.textSecondary,
    marginBottom: SPACING.md,
    lineHeight: 18,
  },
  nutritionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calorieInfo: {
    alignItems: 'center',
    marginRight: SPACING.lg,
  },
  calories: {
    fontSize: FONTS.xl,
    fontWeight: FONTS.bold,
    color: COLORS.textPrimary,
  },
  calorieLabel: {
    fontSize: FONTS.xs,
    color: COLORS.textSecondary,
  },
  macros: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  macro: {
    fontSize: FONTS.xs,
    color: COLORS.textSecondary,
  },
  quickActionsSection: {
    paddingHorizontal: SPACING.lg,
  },
  sectionTitle: {
    fontSize: FONTS.lg,
    fontWeight: FONTS.semibold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    ...SHADOWS.sm,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.backgroundGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
  },
  actionEmoji: {
    fontSize: 24,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: FONTS.base,
    fontWeight: FONTS.semibold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  actionSubtitle: {
    fontSize: FONTS.sm,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
  actionArrow: {
    fontSize: FONTS.lg,
    color: COLORS.textTertiary,
  },
  bottomSpacing: {
    height: SPACING.xl,
  },
});

export default HomeScreen;
