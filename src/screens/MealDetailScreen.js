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
import NutritionCircle from '../components/NutritionCircle';
import Button from '../components/Button';
import { COLORS, FONTS, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';

const MealDetailScreen = ({ navigation, route }) => {
  // This would come from route params in a real app
  const meal = {
    name: "Shredded Strength Bowl",
    restaurant: "Chipotle",
    calories: 410,
    score: 100,
    scoreLabel: "EXCELLENT",
    description: "Elite match — exactly what you're looking for at this stage.",
    protein: 66,
    carbs: 8,
    fat: 13,
    ingredients: [
      "Double Chicken",
      "Romaine Lettuce", 
      "Fresh Tomato Salsa"
    ],
    allergens: [],
    price: "$12.50"
  };

  const getScoreColor = (score) => {
    if (score >= 90) return COLORS.excellent;
    if (score >= 80) return COLORS.good;
    if (score >= 60) return COLORS.warning;
    return COLORS.error;
  };

  const handleOrder = () => {
    // Show order options modal
    console.log("Order meal");
  };

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
          
          <View style={styles.restaurantBadge}>
            <Text style={styles.restaurantText}>CHIPOTLE</Text>
          </View>
          
          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.infoIcon}>ⓘ</Text>
          </TouchableOpacity>
        </View>

        {/* Meal Image */}
        <View style={styles.imageContainer}>
          <View style={styles.imagePlaceholder} />
        </View>

        {/* Meal Info */}
        <View style={styles.contentContainer}>
          <View style={styles.titleSection}>
            <Text style={styles.mealName}>{meal.name}</Text>
            
            <View style={styles.scoreContainer}>
              <View style={[styles.scoreCircle, { borderColor: getScoreColor(meal.score) }]}>
                <Text style={[styles.scoreText, { color: getScoreColor(meal.score) }]}>
                  {meal.score}
                </Text>
                <Text style={[styles.scoreLabel, { color: getScoreColor(meal.score) }]}>
                  {meal.scoreLabel}
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.description}>{meal.description}</Text>

          {/* Nutrition Info */}
          <View style={styles.nutritionSection}>
            <Text style={styles.caloriesLarge}>{meal.calories} kcal</Text>
            
            <View style={styles.macroCircles}>
              <NutritionCircle 
                value={meal.protein} 
                label="Protein" 
                color={COLORS.protein}
              />
              <NutritionCircle 
                value={meal.carbs} 
                label="Carbs" 
                color={COLORS.carbs}
              />
              <NutritionCircle 
                value={meal.fat} 
                label="Fat" 
                color={COLORS.fat}
              />
            </View>
          </View>

          {/* Order Details */}
          <View style={styles.orderSection}>
            <Text style={styles.sectionTitle}>Order Details</Text>
            {meal.ingredients.map((ingredient, index) => (
              <View key={index} style={styles.ingredientRow}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.ingredient}>{ingredient}</Text>
              </View>
            ))}
          </View>

          {/* Flip Card Hint */}
          <View style={styles.flipHint}>
            <Text style={styles.flipText}>Tap to flip the card</Text>
          </View>
        </View>
      </ScrollView>

      {/* Order Button */}
      <View style={styles.orderButtonContainer}>
        <Button
          title="Order"
          onPress={handleOrder}
          style={styles.orderButton}
        />
      </View>
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
  restaurantBadge: {
    backgroundColor: '#8B0000',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.sm,
  },
  restaurantText: {
    color: COLORS.buttonText,
    fontSize: FONTS.sm,
    fontWeight: FONTS.semibold,
  },
  infoButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoIcon: {
    fontSize: FONTS.lg,
    color: COLORS.textPrimary,
  },
  imageContainer: {
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.lg,
  },
  imagePlaceholder: {
    height: 200,
    backgroundColor: COLORS.backgroundGray,
    borderRadius: BORDER_RADIUS.lg,
  },
  contentContainer: {
    paddingHorizontal: SPACING.md,
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: SPACING.md,
  },
  mealName: {
    flex: 1,
    fontSize: FONTS['2xl'],
    fontWeight: FONTS.bold,
    color: COLORS.textPrimary,
    marginRight: SPACING.md,
  },
  scoreContainer: {
    alignItems: 'center',
  },
  scoreCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: {
    fontSize: FONTS.xl,
    fontWeight: FONTS.bold,
  },
  scoreLabel: {
    fontSize: 10,
    fontWeight: FONTS.semibold,
  },
  description: {
    fontSize: FONTS.base,
    color: COLORS.textSecondary,
    lineHeight: 22,
    marginBottom: SPACING.xl,
  },
  nutritionSection: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  caloriesLarge: {
    fontSize: FONTS['3xl'],
    fontWeight: FONTS.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.lg,
  },
  macroCircles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  orderSection: {
    marginBottom: SPACING.xl,
  },
  sectionTitle: {
    fontSize: FONTS.lg,
    fontWeight: FONTS.semibold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  ingredientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  bullet: {
    fontSize: FONTS.base,
    color: COLORS.textSecondary,
    marginRight: SPACING.sm,
  },
  ingredient: {
    fontSize: FONTS.base,
    color: COLORS.textPrimary,
  },
  flipHint: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  flipText: {
    fontSize: FONTS.sm,
    color: COLORS.textTertiary,
  },
  orderButtonContainer: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.background,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  orderButton: {
    width: '100%',
  },
});

export default MealDetailScreen;
