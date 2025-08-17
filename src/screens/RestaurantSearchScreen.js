import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { COLORS, FONTS, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';
import userDataService from '../services/userDataService';
import { searchRestaurants, getMenuItemsByGoal, filterByDietaryRestrictions } from '../data/restaurantDatabase';

const RestaurantSearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [userData, setUserData] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  // Load user data for personalized recommendations
  useEffect(() => {
    const loadUserData = async () => {
      const data = await userDataService.loadUserData();
      setUserData(data);
      // Load recent searches from user data
      setRecentSearches(data.recentSearches || []);
    };
    loadUserData();
  }, []);

  // Comprehensive restaurant database with health scores and meal options
  const restaurantDatabase = [
    {
      id: 1,
      name: 'Chipotle Mexican Grill',
      address: '123 Main St, Downtown',
      type: 'Fast Casual',
      cuisine: 'Mexican',
      healthScore: 85,
      priceRange: '$$',
      healthyOptions: [
        { name: "Burrito Bowl with Chicken", calories: 540, protein: 45, carbs: 40, fat: 16, score: 90 },
        { name: "Salad with Steak", calories: 480, protein: 42, carbs: 22, fat: 18, score: 88 },
        { name: "Chicken Tacos (3)", calories: 420, protein: 36, carbs: 36, fat: 14, score: 82 }
      ]
    },
    {
      id: 2,
      name: 'Panera Bread',
      address: '456 Oak Ave, Midtown',
      type: 'Bakery Cafe',
      cuisine: 'American',
      healthScore: 82,
      priceRange: '$$',
      healthyOptions: [
        { name: "Green Goddess Salad", calories: 380, protein: 18, carbs: 28, fat: 14, score: 88 },
        { name: "Turkey & Avocado BLT", calories: 520, protein: 32, carbs: 45, fat: 22, score: 78 },
        { name: "Greek Salad", calories: 290, protein: 12, carbs: 18, fat: 20, score: 85 }
      ]
    },
    {
      id: 3,
      name: 'Sweetgreen',
      address: '789 Pine St, Uptown',
      type: 'Salad Bar',
      cuisine: 'Healthy',
      healthScore: 95,
      priceRange: '$$$',
      healthyOptions: [
        { name: "Harvest Bowl", calories: 420, protein: 22, carbs: 35, fat: 18, score: 92 },
        { name: "Kale Caesar", calories: 340, protein: 16, carbs: 24, fat: 16, score: 90 },
        { name: "Protein Plate", calories: 380, protein: 35, carbs: 20, fat: 12, score: 95 }
      ]
    },
    {
      id: 4,
      name: 'Subway',
      address: '321 Elm St, Westside',
      type: 'Sandwich Shop',
      cuisine: 'American',
      healthScore: 75,
      priceRange: '$',
      healthyOptions: [
        { name: "Turkey Breast on Whole Wheat", calories: 320, protein: 28, carbs: 40, fat: 6, score: 85 },
        { name: "Veggie Delite Salad", calories: 150, protein: 8, carbs: 15, fat: 4, score: 90 },
        { name: "Grilled Chicken & Spinach", calories: 350, protein: 32, carbs: 35, fat: 8, score: 88 }
      ]
    },
    {
      id: 5,
      name: "McDonald's",
      address: '654 Maple Dr, Eastside',
      type: 'Fast Food',
      cuisine: 'American',
      healthScore: 60,
      priceRange: '$',
      healthyOptions: [
        { name: "Grilled Chicken Salad", calories: 320, protein: 28, carbs: 15, fat: 8, score: 78 },
        { name: "Egg McMuffin", calories: 300, protein: 17, carbs: 30, fat: 12, score: 70 },
        { name: "Apple Slices", calories: 15, protein: 0, carbs: 4, fat: 0, score: 95 }
      ]
    },
    {
      id: 6,
      name: 'Poke Bros',
      address: '987 Beach Blvd, Coastal',
      type: 'Poke Bowl',
      cuisine: 'Hawaiian',
      healthScore: 88,
      priceRange: '$$',
      healthyOptions: [
        { name: "Salmon Teriyaki Bowl", calories: 650, protein: 42, carbs: 55, fat: 18, score: 85 },
        { name: "Tuna Spicy Mayo Bowl", calories: 580, protein: 38, carbs: 50, fat: 16, score: 82 },
        { name: "Tofu Veggie Bowl", calories: 480, protein: 20, carbs: 60, fat: 12, score: 88 }
      ]
    },
    {
      id: 7,
      name: 'KFC',
      address: '111 Chicken Lane, Southside',
      type: 'Fast Food',
      cuisine: 'American',
      healthScore: 45,
      priceRange: '$',
      healthyOptions: [
        { name: "Grilled Chicken Breast", calories: 220, protein: 38, carbs: 0, fat: 7, score: 85 },
        { name: "Green Beans", calories: 25, protein: 1, carbs: 5, fat: 0, score: 90 },
        { name: "Coleslaw", calories: 170, protein: 2, carbs: 13, fat: 13, score: 55 }
      ]
    },
    {
      id: 8,
      name: 'Starbucks',
      address: '222 Coffee St, Central',
      type: 'Coffee Shop',
      cuisine: 'Cafe',
      healthScore: 70,
      priceRange: '$$',
      healthyOptions: [
        { name: "Protein Box - Eggs & Cheese", calories: 470, protein: 20, carbs: 30, fat: 28, score: 75 },
        { name: "Spinach Feta Wrap", calories: 290, protein: 19, carbs: 29, fat: 10, score: 82 },
        { name: "Greek Yogurt & Berries", calories: 150, protein: 15, carbs: 20, fat: 2, score: 90 }
      ]
    }
    {
      id: 3,
      name: 'KFC',
      address: 'Jurong Point, 1, Jurong West Central 2 #01-30, Singapore 648886, Singapore',
      type: 'Fast Food'
    },
    {
      id: 4,
      name: 'Jollibee',
      address: '10 Sinaran Dr, #01-07-12, Singapore 307506, Singapore',
      type: 'Fast Food'
    },
    {
      id: 5,
      name: 'NeNe Chicken',
      address: '1 Jelebu Rd, #02-10, Bukit Panjang Plaza, Singapore 677743, Singapore',
      type: 'Korean Fried Chicken'
    },
    {
      id: 6,
      name: "Popeye's Louisiana Kitchen",
      address: '11 Orchard Turn, #B1-19 Orchard Exchange, Singapore 238800, Singapore',
      type: 'Fast Food'
    },
    {
      id: 7,
      name: "McDonald's",
      address: '18 Marina Gardens Dr, #02-04, Visitor Centre, Singapore 018954, Singapore',
      type: 'Fast Food'
    },
    {
      id: 8,
      name: "Hammee's",
      address: '31 Commonwealth Cres, #02-93, Singapore 149644, Singapore',
      type: 'Local Cuisine'
    }
  ];

  const handleSearch = async (query) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate realistic search delay
    await new Promise(resolve => setTimeout(resolve, 600));

    try {
      // Use real restaurant database
      let results = searchRestaurants(query, {
        goal: userData?.goal,
        foodPreferences: userData?.foodPreferences || [],
        allergies: userData?.allergies || []
      });

      // Add personalized scoring and menu recommendations
      results = results.map(restaurant => {
        // Get menu items optimized for user's goal
        let menuItems = getMenuItemsByGoal(restaurant, userData?.goal);
        
        // Filter by dietary restrictions
        if (userData?.foodPreferences || userData?.allergies) {
          const restrictions = [
            ...(userData?.foodPreferences || []),
            ...(userData?.allergies?.map(allergy => `${allergy}-free`) || [])
          ];
          menuItems = filterByDietaryRestrictions(menuItems, restrictions);
        }

        // Calculate personalized health score
        let personalizedScore = restaurant.healthScore;
        
        if (userData?.goal === 'cut') {
          // Boost score for restaurants with low-calorie options
          const avgCalories = menuItems.reduce((sum, item) => sum + item.calories, 0) / menuItems.length;
          if (avgCalories < 400) personalizedScore += 15;
          if (restaurant.healthScore > 80) personalizedScore += 10;
        } else if (userData?.goal === 'bulk') {
          // Boost score for restaurants with high-protein options
          const avgProtein = menuItems.reduce((sum, item) => sum + item.protein, 0) / menuItems.length;
          if (avgProtein > 25) personalizedScore += 15;
        }

        return {
          ...restaurant,
          personalizedScore: Math.min(personalizedScore, 100),
          recommendedItems: menuItems.slice(0, 3), // Top 3 recommended items
          totalItems: menuItems.length
        };
      });

      // Sort by personalized score
      results.sort((a, b) => b.personalizedScore - a.personalizedScore);

      setSearchResults(results);

      // Save to recent searches if results found
      if (results.length > 0) {
        const newRecentSearch = {
          query: query.trim(),
          timestamp: new Date().toISOString(),
          resultCount: results.length
        };
        
        const updatedRecentSearches = [newRecentSearch, ...recentSearches.slice(0, 4)];
        setRecentSearches(updatedRecentSearches);
        
        await userDataService.saveUserData({
          recentSearches: updatedRecentSearches
        });
      }

    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleRestaurantSelect = (restaurant) => {
    navigation.navigate('RestaurantMenu', { restaurant });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="kfc"
            placeholderTextColor={COLORS.textTertiary}
            value={searchQuery}
            onChangeText={handleSearch}
            autoFocus
          />
        </View>
      </View>

      {/* Search Results */}
      <ScrollView style={styles.resultsContainer} showsVerticalScrollIndicator={false}>
        {searchQuery.trim() && (
          <View style={styles.resultsHeader}>
            <Text style={styles.resultsTitle}>Search Result</Text>
          </View>
        )}

        {searchResults.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.id}
            style={styles.restaurantCard}
            onPress={() => handleRestaurantSelect(restaurant)}
          >
            <View style={styles.restaurantInfo}>
              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              <Text style={styles.restaurantAddress}>{restaurant.address}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {searchQuery.trim() && searchResults.length === 0 && (
          <View style={styles.noResults}>
            <Text style={styles.noResultsText}>No restaurants found</Text>
          </View>
        )}
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.sm,
  },
  backArrow: {
    fontSize: FONTS.xl,
    color: COLORS.textPrimary,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.md,
    height: 44,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: SPACING.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: FONTS.base,
    color: COLORS.textPrimary,
  },
  resultsContainer: {
    flex: 1,
  },
  resultsHeader: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.lg,
  },
  resultsTitle: {
    fontSize: FONTS.lg,
    fontWeight: FONTS.semibold,
    color: COLORS.textPrimary,
  },
  restaurantCard: {
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: FONTS.base,
    fontWeight: FONTS.semibold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  restaurantAddress: {
    fontSize: FONTS.sm,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
  noResults: {
    alignItems: 'center',
    paddingVertical: SPACING['2xl'],
  },
  noResultsText: {
    fontSize: FONTS.base,
    color: COLORS.textSecondary,
  },
});

export default RestaurantSearchScreen;
