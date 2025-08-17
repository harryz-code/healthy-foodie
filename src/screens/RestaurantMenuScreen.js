import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import { COLORS, FONTS, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';

const RestaurantMenuScreen = ({ navigation, route }) => {
  const { 
    restaurant, 
    restaurantData, 
    restaurantName, 
    restaurantPhoto, 
    userGoal 
  } = route.params || { 
    restaurant: { name: 'Restaurant' }, 
    restaurantData: null,
    restaurantName: 'Restaurant',
    userGoal: null
  };
  
  const [selectedTab, setSelectedTab] = useState('Meals');
  
  // Use real restaurant data if available, otherwise fall back to mock data
  const displayName = restaurantData?.name || restaurantName || restaurant?.name || 'Restaurant';
  const realMeals = restaurantData?.healthyOptions || [];

  // Mock meal data based on your screenshots
  const meals = [
    {
      id: 1,
      name: 'Lean Shredder',
      description: 'Incredible alignment with your macros. Spot on.',
      calories: 400,
      protein: 64,
      carbs: 14,
      fat: 15,
      score: 100,
      restaurant: 'Chipotle'
    },
    {
      id: 2,
      name: 'Shredded Strength Bowl',
      description: 'Incredible alignment with your macros. Spot on.',
      calories: 410,
      protein: 66,
      carbs: 8,
      fat: 13,
      score: 100,
      restaurant: 'Chipotle'
    }
  ];

  const getScoreColor = (score) => {
    if (score >= 90) return COLORS.excellent;
    if (score >= 80) return COLORS.good;
    if (score >= 60) return COLORS.warning;
    return COLORS.error;
  };

  const handleMealPress = (meal) => {
    navigation.navigate('MealDetail', { meal });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <Text style={styles.logoEmoji}>📦</Text>
          </View>
          <Text style={styles.logoText}>MenuFit</Text>
        </View>
        
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tab, selectedTab === 'Meals' && styles.activeTab]}
            onPress={() => setSelectedTab('Meals')}
          >
            <Text style={[styles.tabText, selectedTab === 'Meals' && styles.activeTabText]}>
              Meals
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, selectedTab === 'Places' && styles.activeTab]}
            onPress={() => setSelectedTab('Places')}
          >
            <Text style={[styles.tabText, selectedTab === 'Places' && styles.activeTabText]}>
              Places
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <Text style={styles.searchPlaceholder}>Search Food</Text>
      </View>

      {/* Restaurant Info */}
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantName}>{displayName}</Text>
        {userGoal && (
          <Text style={styles.goalBadge}>
            Optimized for {userGoal === 'cut' ? 'Cutting' : userGoal === 'bulk' ? 'Bulking' : 'Maintaining'}
          </Text>
        )}
        {restaurantData && (
          <Text style={styles.cuisineType}>{restaurantData.cuisine} • {restaurantData.type}</Text>
        )}
      </View>

      {/* Meals List */}
      <ScrollView style={styles.mealsContainer} showsVerticalScrollIndicator={false}>
        {(realMeals.length > 0 ? realMeals : meals).map((meal, index) => (
          <TouchableOpacity
            key={meal.id || index}
            style={styles.mealCard}
            onPress={() => handleMealPress(meal)}
          >
            <View style={styles.mealImagePlaceholder} />
            
            <View style={styles.mealInfo}>
              <View style={styles.mealHeader}>
                <View style={styles.mealTitleContainer}>
                  <Text style={styles.mealName}>{meal.name}</Text>
                  <Text style={styles.mealDescription}>{meal.description}</Text>
                </View>
                
                <View style={[styles.scoreCircle, { borderColor: getScoreColor(meal.score) }]}>
                  <Text style={[styles.scoreText, { color: getScoreColor(meal.score) }]}>
                    {meal.score}
                  </Text>
                  <Text style={[styles.scoreLabel, { color: getScoreColor(meal.score) }]}>
                    EXCELLENT
                  </Text>
                </View>
              </View>
              
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
            
            <View style={styles.restaurantBadge}>
              <Text style={styles.restaurantBadgeText}>CHIPOTLE</Text>
            </View>
            
            <TouchableOpacity style={styles.orderButton}>
              <Text style={styles.orderButtonText}>Order Now</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.backgroundGray,
    borderRadius: BORDER_RADIUS.lg,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: SPACING.sm,
    alignItems: 'center',
    borderRadius: BORDER_RADIUS.md,
  },
  activeTab: {
    backgroundColor: COLORS.buttonPrimary,
  },
  tabText: {
    fontSize: FONTS.base,
    color: COLORS.textSecondary,
    fontWeight: FONTS.medium,
  },
  activeTabText: {
    color: COLORS.buttonText,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundSecondary,
    marginHorizontal: SPACING.lg,
    marginVertical: SPACING.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.md,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: SPACING.sm,
  },
  searchPlaceholder: {
    fontSize: FONTS.base,
    color: COLORS.textTertiary,
  },
  mealsContainer: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
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
    marginBottom: SPACING.md,
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
  mealDescription: {
    fontSize: FONTS.sm,
    color: COLORS.textSecondary,
    lineHeight: 18,
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
  },
  nutritionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
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
  restaurantBadge: {
    backgroundColor: '#8B0000',
    alignSelf: 'flex-start',
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.sm,
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.md,
  },
  restaurantBadgeText: {
    color: COLORS.buttonText,
    fontSize: FONTS.xs,
    fontWeight: FONTS.semibold,
  },
  orderButton: {
    backgroundColor: COLORS.buttonPrimary,
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.xl,
    alignItems: 'center',
  },
  orderButtonText: {
    color: COLORS.buttonText,
    fontSize: FONTS.base,
    fontWeight: FONTS.semibold,
  },
  restaurantInfo: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  goalBadge: {
    fontSize: 14,
    color: COLORS.primary,
    backgroundColor: COLORS.primary + '15',
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.sm,
    alignSelf: 'flex-start',
    marginBottom: SPACING.xs,
  },
  cuisineType: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
});

export default RestaurantMenuScreen;
