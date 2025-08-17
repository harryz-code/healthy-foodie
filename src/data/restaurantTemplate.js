// Restaurant Data Upload Template
// Copy this template for each new restaurant you want to add

export const RESTAURANT_TEMPLATE = {
  // Basic Restaurant Info
  id: 'restaurant_id', // lowercase, underscore separated (e.g., 'mcdonalds', 'taco_bell')
  name: 'Restaurant Name',
  logo: '🍔', // Emoji or we'll use uploaded image later
  type: 'Fast Food', // Fast Food, Fast Casual, Casual Dining, Fine Dining, Coffee Shop, etc.
  cuisine: 'American', // American, Mexican, Italian, Asian, Healthy, etc.
  priceRange: '$', // $, $$, $$$, $$$$
  healthScore: 75, // 0-100, overall health rating
  locations: ['Nationwide'], // ['Nationwide'] or ['California', 'Texas'] etc.
  
  // Menu Items Array
  menuItems: [
    {
      // Item Basic Info
      id: 'item_id', // lowercase, underscore separated
      name: 'Menu Item Name',
      category: 'Category', // Breakfast, Lunch, Dinner, Burgers, Salads, Sides, Drinks, etc.
      description: 'Optional description of the item', // Optional
      
      // Nutrition Info (REQUIRED)
      calories: 0,
      protein: 0, // grams
      carbs: 0, // grams
      fat: 0, // grams
      fiber: 0, // grams
      sugar: 0, // grams
      sodium: 0, // milligrams
      
      // Additional Info
      price: 0.00, // USD
      ingredients: ['ingredient1', 'ingredient2'], // List of main ingredients
      allergens: ['gluten', 'dairy', 'nuts'], // Common allergens
      healthScore: 85, // 0-100, calculated based on nutrition
      
      // Dietary Tags (automatically calculated but can override)
      tags: {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        lowCarb: false, // < 20g carbs
        highProtein: false, // > 20g protein
        lowCalorie: false, // < 400 calories
        keto: false // < 10g carbs, > 70% fat
      }
    }
  ]
};

// Example: McDonald's Big Mac
export const EXAMPLE_MCDONALDS_BIGMAC = {
  id: 'mcdonalds',
  name: "McDonald's",
  logo: '🍟',
  type: 'Fast Food',
  cuisine: 'American',
  priceRange: '$',
  healthScore: 65,
  locations: ['Nationwide'],
  
  menuItems: [
    {
      id: 'big_mac',
      name: 'Big Mac',
      category: 'Burgers',
      description: 'Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun',
      
      // Official McDonald's nutrition data
      calories: 563,
      protein: 25,
      carbs: 45,
      fat: 33,
      fiber: 3,
      sugar: 9,
      sodium: 1010,
      
      price: 6.99,
      ingredients: ['beef patties', 'special sauce', 'lettuce', 'American cheese', 'pickles', 'onions', 'sesame seed bun'],
      allergens: ['gluten', 'dairy', 'eggs'],
      healthScore: 45,
      
      tags: {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        lowCarb: false,
        highProtein: true,
        lowCalorie: false,
        keto: false
      }
    }
  ]
};

// Helper function to calculate health score automatically
export const calculateHealthScore = (item) => {
  let score = 50; // Base score
  
  // Protein bonus (higher is better)
  if (item.protein > 30) score += 20;
  else if (item.protein > 20) score += 15;
  else if (item.protein > 10) score += 10;
  
  // Calorie penalty/bonus
  if (item.calories < 300) score += 15;
  else if (item.calories < 500) score += 10;
  else if (item.calories > 800) score -= 15;
  else if (item.calories > 600) score -= 10;
  
  // Fiber bonus
  if (item.fiber > 10) score += 15;
  else if (item.fiber > 5) score += 10;
  
  // Sugar penalty
  if (item.sugar > 20) score -= 15;
  else if (item.sugar > 10) score -= 10;
  
  // Sodium penalty
  if (item.sodium > 1500) score -= 15;
  else if (item.sodium > 1000) score -= 10;
  
  // Fat ratio consideration
  const fatCalories = item.fat * 9;
  const fatPercentage = fatCalories / item.calories;
  if (fatPercentage > 0.6) score -= 10; // Too much fat
  else if (fatPercentage < 0.2) score += 5; // Good fat ratio
  
  return Math.max(0, Math.min(100, score));
};

// Helper function to auto-generate tags
export const generateTags = (item) => {
  return {
    vegetarian: !item.ingredients.some(ing => 
      ['beef', 'chicken', 'pork', 'turkey', 'bacon', 'ham', 'fish', 'salmon'].some(meat => 
        ing.toLowerCase().includes(meat)
      )
    ),
    vegan: !item.allergens.includes('dairy') && !item.allergens.includes('eggs') && 
           !item.ingredients.some(ing => 
             ['beef', 'chicken', 'pork', 'turkey', 'bacon', 'ham', 'fish', 'salmon', 'cheese', 'milk'].some(animal => 
               ing.toLowerCase().includes(animal)
             )
           ),
    glutenFree: !item.allergens.includes('gluten'),
    lowCarb: item.carbs < 20,
    highProtein: item.protein > 20,
    lowCalorie: item.calories < 400,
    keto: item.carbs < 10 && (item.fat * 9) / item.calories > 0.7
  };
};
