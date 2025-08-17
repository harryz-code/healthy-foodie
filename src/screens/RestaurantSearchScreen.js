import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput,
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import { COLORS, FONTS, SPACING, BORDER_RADIUS, SHADOWS } from '../constants/theme';

const RestaurantSearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Mock restaurant data based on your screenshots
  const mockRestaurants = [
    {
      id: 1,
      name: 'KFC',
      address: '381 Toa Payoh Lorong 1, #01-13, Joint Social Service Centre, Singapore 319758, Singapore',
      type: 'Fast Food'
    },
    {
      id: 2,
      name: 'KFC',
      address: 'PTD 210469, Bandar Seri Alam, Mukim Plentong, 81700 Johor Bahru, Johor, Malaysia',
      type: 'Fast Food'
    },
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

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = mockRestaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
        restaurant.address.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
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
