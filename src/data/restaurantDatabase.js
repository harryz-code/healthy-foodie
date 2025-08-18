// Comprehensive Restaurant Database with Real Menu Items and Nutrition Data
// Data sourced from official restaurant nutrition guides and verified databases

export const RESTAURANT_DATABASE = {
  // McDonald's - Official nutrition data (comprehensive menu from PDF)
  mcdonalds: {
    id: 'mcdonalds',
    name: "McDonald's",
    logo: '🍟',
    type: 'Fast Food',
    cuisine: 'American',
    priceRange: '$',
    healthScore: 65,
    locations: ['Nationwide'],
    menuItems: [
      // BREAKFAST ITEMS
      {
        id: 'egg_mcmuffin',
        name: 'Egg McMuffin',
        category: 'Breakfast',
        calories: 300, protein: 17, carbs: 31, fat: 13,
        fiber: 4, sugar: 3, sodium: 750, price: 4.99,
        healthScore: 78,
        ingredients: ['English muffin', 'egg', 'Canadian bacon', 'American cheese'],
        allergens: ['gluten', 'eggs', 'dairy']
      },
      {
        id: 'sausage_mcmuffin_egg',
        name: 'Sausage McMuffin with Egg',
        category: 'Breakfast',
        calories: 450, protein: 21, carbs: 30, fat: 28,
        fiber: 4, sugar: 2, sodium: 860, price: 5.49,
        healthScore: 65,
        ingredients: ['English muffin', 'sausage patty', 'egg', 'American cheese'],
        allergens: ['gluten', 'eggs', 'dairy']
      },
      {
        id: 'fruit_maple_oatmeal',
        name: 'Fruit & Maple Oatmeal',
        category: 'Breakfast',
        calories: 290, protein: 5, carbs: 58, fat: 4,
        fiber: 5, sugar: 32, sodium: 160, price: 4.49,
        healthScore: 85,
        ingredients: ['oatmeal', 'diced apples', 'cranberry raisin blend', 'brown sugar'],
        allergens: []
      },
      {
        id: 'egg_white_delight',
        name: 'Egg White Delight',
        category: 'Breakfast',
        calories: 250, protein: 18, carbs: 30, fat: 8,
        fiber: 4, sugar: 3, sodium: 770, price: 4.99,
        healthScore: 88,
        ingredients: ['English muffin', 'egg whites', 'Canadian bacon', 'white cheddar cheese'],
        allergens: ['gluten', 'eggs', 'dairy']
      },
      {
        id: 'hotcakes_sausage',
        name: 'Hotcakes and Sausage',
        category: 'Breakfast',
        calories: 520, protein: 15, carbs: 61, fat: 24,
        fiber: 3, sugar: 14, sodium: 930, price: 6.99,
        healthScore: 45,
        ingredients: ['hotcakes', 'sausage patty', 'hotcake syrup', 'whipped margarine'],
        allergens: ['gluten', 'eggs', 'dairy']
      },
      {
        id: 'bacon_egg_cheese_biscuit',
        name: 'Bacon, Egg & Cheese Biscuit',
        category: 'Breakfast',
        calories: 460, protein: 19, carbs: 38, fat: 26,
        fiber: 3, sugar: 4, sodium: 1300, price: 5.79,
        healthScore: 55,
        ingredients: ['buttermilk biscuit', 'folded egg', 'bacon', 'American cheese'],
        allergens: ['gluten', 'eggs', 'dairy']
      },
      // BURGERS
      {
        id: 'big_mac',
        name: 'Big Mac',
        category: 'Burgers',
        calories: 540, protein: 25, carbs: 47, fat: 28,
        fiber: 3, sugar: 9, sodium: 970, price: 7.49,
        healthScore: 55,
        ingredients: ['sesame seed bun', '100% beef patties', 'Big Mac sauce', 'lettuce', 'cheese', 'pickles', 'onions'],
        allergens: ['gluten', 'dairy', 'eggs', 'soy']
      },
      {
        id: 'quarter_pounder_cheese',
        name: 'Quarter Pounder with Cheese',
        category: 'Burgers',
        calories: 540, protein: 31, carbs: 42, fat: 28,
        fiber: 3, sugar: 10, sodium: 1110, price: 8.99,
        healthScore: 58,
        ingredients: ['sesame seed bun', '1/4 lb beef patty', 'American cheese', 'ketchup', 'mustard', 'pickles', 'onions'],
        allergens: ['gluten', 'dairy']
      },
      {
        id: 'double_quarter_pounder_cheese',
        name: 'Double Quarter Pounder with Cheese',
        category: 'Burgers',
        calories: 780, protein: 50, carbs: 43, fat: 45,
        fiber: 3, sugar: 10, sodium: 1310, price: 10.99,
        healthScore: 50,
        ingredients: ['sesame seed bun', '2 x 1/4 lb beef patties', 'American cheese', 'ketchup', 'mustard', 'pickles', 'onions'],
        allergens: ['gluten', 'dairy']
      },
      {
        id: 'hamburger',
        name: 'Hamburger',
        category: 'Burgers',
        calories: 250, protein: 12, carbs: 32, fat: 8,
        fiber: 1, sugar: 6, sodium: 490, price: 2.49,
        healthScore: 70,
        ingredients: ['regular bun', 'beef patty', 'ketchup', 'mustard', 'pickles', 'onions'],
        allergens: ['gluten']
      },
      {
        id: 'cheeseburger',
        name: 'Cheeseburger',
        category: 'Burgers',
        calories: 300, protein: 15, carbs: 33, fat: 12,
        fiber: 2, sugar: 7, sodium: 680, price: 2.99,
        healthScore: 68,
        ingredients: ['regular bun', 'beef patty', 'American cheese', 'ketchup', 'mustard', 'pickles', 'onions'],
        allergens: ['gluten', 'dairy']
      },
      {
        id: 'mcdouble',
        name: 'McDouble',
        category: 'Burgers',
        calories: 390, protein: 22, carbs: 34, fat: 18,
        fiber: 2, sugar: 7, sodium: 850, price: 3.99,
        healthScore: 62,
        ingredients: ['regular bun', '2 beef patties', 'American cheese', 'ketchup', 'mustard', 'pickles', 'onions'],
        allergens: ['gluten', 'dairy']
      },
      // CHICKEN & FISH
      {
        id: 'artisan_grilled_chicken',
        name: 'Artisan Grilled Chicken Sandwich',
        category: 'Chicken',
        calories: 360, protein: 33, carbs: 43, fat: 6,
        fiber: 3, sugar: 10, sodium: 960, price: 7.99,
        healthScore: 85,
        ingredients: ['artisan roll', 'grilled chicken breast', 'lettuce', 'tomato', 'mayo'],
        allergens: ['gluten', 'eggs']
      },
      {
        id: 'buttermilk_crispy_chicken',
        name: 'Buttermilk Crispy Chicken Sandwich',
        category: 'Chicken',
        calories: 580, protein: 29, carbs: 62, fat: 24,
        fiber: 4, sugar: 11, sodium: 900, price: 7.99,
        healthScore: 60,
        ingredients: ['artisan roll', 'buttermilk crispy chicken', 'lettuce', 'tomato'],
        allergens: ['gluten', 'dairy']
      },
      {
        id: 'mcchicken',
        name: 'McChicken',
        category: 'Chicken',
        calories: 370, protein: 14, carbs: 40, fat: 17,
        fiber: 2, sugar: 5, sodium: 650, price: 4.99,
        healthScore: 62,
        ingredients: ['regular bun', 'crispy chicken patty', 'lettuce', 'mayo'],
        allergens: ['gluten', 'eggs']
      },
      {
        id: 'chicken_mcnuggets_10pc',
        name: 'Chicken McNuggets (10 piece)',
        category: 'Chicken',
        calories: 470, protein: 22, carbs: 30, fat: 30,
        fiber: 2, sugar: 0, sodium: 900, price: 8.99,
        healthScore: 60,
        ingredients: ['white meat chicken', 'breading', 'vegetable oil'],
        allergens: ['gluten']
      },
      {
        id: 'chicken_mcnuggets_6pc',
        name: 'Chicken McNuggets (6 piece)',
        category: 'Chicken',
        calories: 280, protein: 13, carbs: 18, fat: 18,
        fiber: 1, sugar: 0, sodium: 540, price: 6.49,
        healthScore: 65,
        ingredients: ['white meat chicken', 'breading', 'vegetable oil'],
        allergens: ['gluten']
      },
      {
        id: 'chicken_mcnuggets_4pc',
        name: 'Chicken McNuggets (4 piece)',
        category: 'Chicken',
        calories: 190, protein: 9, carbs: 12, fat: 12,
        fiber: 1, sugar: 0, sodium: 360, price: 3.99,
        healthScore: 68,
        ingredients: ['white meat chicken', 'breading', 'vegetable oil'],
        allergens: ['gluten']
      },
      {
        id: 'filet_o_fish',
        name: 'Filet-O-Fish',
        category: 'Fish',
        calories: 390, protein: 15, carbs: 39, fat: 19,
        fiber: 2, sugar: 5, sodium: 590, price: 6.49,
        healthScore: 72,
        ingredients: ['steamed bun', 'fish filet', 'tartar sauce', 'American cheese'],
        allergens: ['gluten', 'fish', 'dairy', 'eggs']
      },
      // SALADS
      {
        id: 'premium_asian_salad_grilled',
        name: 'Premium Asian Salad with Grilled Chicken',
        category: 'Salads',
        calories: 270, protein: 32, carbs: 18, fat: 9,
        fiber: 5, sugar: 10, sodium: 760, price: 8.99,
        healthScore: 92,
        ingredients: ['mixed greens', 'grilled chicken', 'red cabbage', 'carrots', 'edamame', 'almonds', 'orange segments'],
        allergens: ['tree nuts']
      },
      {
        id: 'premium_southwest_salad_grilled',
        name: 'Premium Southwest Salad with Grilled Chicken',
        category: 'Salads',
        calories: 330, protein: 33, carbs: 26, fat: 11,
        fiber: 6, sugar: 9, sodium: 920, price: 8.99,
        healthScore: 88,
        ingredients: ['lettuce blend', 'grilled chicken', 'corn', 'black beans', 'tomatoes', 'cheese', 'chili lime tortilla strips'],
        allergens: ['dairy', 'gluten']
      },
      {
        id: 'premium_bacon_ranch_salad_grilled',
        name: 'Premium Bacon Ranch Salad with Grilled Chicken',
        category: 'Salads',
        calories: 310, protein: 38, carbs: 9, fat: 14,
        fiber: 3, sugar: 3, sodium: 1120, price: 8.99,
        healthScore: 85,
        ingredients: ['mixed greens', 'grilled chicken', 'bacon', 'cheese', 'grape tomatoes'],
        allergens: ['dairy']
      },
      {
        id: 'side_salad',
        name: 'Side Salad',
        category: 'Salads',
        calories: 15, protein: 1, carbs: 3, fat: 0,
        fiber: 2, sugar: 1, sodium: 10, price: 2.99,
        healthScore: 95,
        ingredients: ['iceberg lettuce', 'romaine lettuce', 'carrots', 'red cabbage'],
        allergens: []
      },
      // SIDES
      {
        id: 'apple_slices',
        name: 'Apple Slices',
        category: 'Sides',
        calories: 15, protein: 0, carbs: 4, fat: 0,
        fiber: 0, sugar: 3, sodium: 0, price: 1.99,
        healthScore: 100,
        ingredients: ['apples', 'calcium ascorbate'],
        allergens: []
      },
      {
        id: 'french_fries_small',
        name: 'French Fries (Small)',
        category: 'Sides',
        calories: 230, protein: 2, carbs: 30, fat: 11,
        fiber: 2, sugar: 0, sodium: 130, price: 2.99,
        healthScore: 45,
        ingredients: ['potatoes', 'vegetable oil', 'salt'],
        allergens: []
      },
      {
        id: 'french_fries_medium',
        name: 'French Fries (Medium)',
        category: 'Sides',
        calories: 340, protein: 4, carbs: 44, fat: 16,
        fiber: 4, sugar: 0, sodium: 190, price: 3.99,
        healthScore: 40,
        ingredients: ['potatoes', 'vegetable oil', 'salt'],
        allergens: []
      },
      {
        id: 'french_fries_large',
        name: 'French Fries (Large)',
        category: 'Sides',
        calories: 510, protein: 6, carbs: 67, fat: 24,
        fiber: 5, sugar: 0, sodium: 290, price: 4.99,
        healthScore: 35,
        ingredients: ['potatoes', 'vegetable oil', 'salt'],
        allergens: []
      },
      {
        id: 'hash_browns',
        name: 'Hash Browns',
        category: 'Breakfast',
        calories: 150, protein: 2, carbs: 15, fat: 9,
        fiber: 2, sugar: 0, sodium: 310, price: 2.49,
        healthScore: 50,
        ingredients: ['potatoes', 'vegetable oil', 'salt'],
        allergens: []
      },
      // BEVERAGES
      {
        id: 'dasani_water',
        name: 'Dasani Water',
        category: 'Beverages',
        calories: 0, protein: 0, carbs: 0, fat: 0,
        fiber: 0, sugar: 0, sodium: 0, price: 1.99,
        healthScore: 100,
        ingredients: ['purified water', 'magnesium sulfate', 'potassium chloride'],
        allergens: []
      },
      {
        id: 'milk_1percent',
        name: '1% Low Fat Milk Jug',
        category: 'Beverages',
        calories: 100, protein: 8, carbs: 12, fat: 2.5,
        fiber: 0, sugar: 12, sodium: 125, price: 2.49,
        healthScore: 85,
        ingredients: ['reduced fat milk', 'vitamin A', 'vitamin D3'],
        allergens: ['dairy']
      },
      {
        id: 'orange_juice_small',
        name: 'Minute Maid Orange Juice (Small)',
        category: 'Beverages',
        calories: 150, protein: 0, carbs: 34, fat: 0,
        fiber: 0, sugar: 30, sodium: 0, price: 2.99,
        healthScore: 75,
        ingredients: ['orange juice concentrate', 'water', 'natural flavors'],
        allergens: []
      },
      {
        id: 'coca_cola_small',
        name: 'Coca-Cola Classic (Small)',
        category: 'Beverages',
        calories: 140, protein: 0, carbs: 39, fat: 0,
        fiber: 0, sugar: 39, sodium: 0, price: 1.99,
        healthScore: 25,
        ingredients: ['carbonated water', 'high fructose corn syrup', 'caramel color', 'caffeine'],
        allergens: []
      },
      {
        id: 'diet_coke_small',
        name: 'Diet Coke (Small)',
        category: 'Beverages',
        calories: 0, protein: 0, carbs: 0, fat: 0,
        fiber: 0, sugar: 0, sodium: 10, price: 1.99,
        healthScore: 60,
        ingredients: ['carbonated water', 'caramel color', 'aspartame', 'caffeine'],
        allergens: []
      },
      // MCCAFE
      {
        id: 'coffee_small',
        name: 'Premium Roast Coffee (Small)',
        category: 'McCafé',
        calories: 0, protein: 0, carbs: 0, fat: 0,
        fiber: 0, sugar: 0, sodium: 0, price: 1.99,
        healthScore: 90,
        ingredients: ['100% arabica coffee beans', 'water'],
        allergens: []
      },
      {
        id: 'latte_small',
        name: 'McCafé Latte (Small)',
        category: 'McCafé',
        calories: 170, protein: 12, carbs: 15, fat: 9,
        fiber: 0, sugar: 13, sodium: 115, price: 4.99,
        healthScore: 70,
        ingredients: ['espresso', 'steamed milk'],
        allergens: ['dairy']
      },
      {
        id: 'iced_coffee_small',
        name: 'Premium Roast Iced Coffee (Small)',
        category: 'McCafé',
        calories: 140, protein: 2, carbs: 23, fat: 4.5,
        fiber: 0, sugar: 22, sodium: 35, price: 2.99,
        healthScore: 60,
        ingredients: ['coffee', 'ice', 'light cream', 'liquid sugar'],
        allergens: ['dairy']
      },
      {
        id: 'mocha_small',
        name: 'McCafé Mocha (Small)',
        category: 'McCafé',
        calories: 340, protein: 10, carbs: 49, fat: 11,
        fiber: 2, sugar: 42, sodium: 150, price: 5.49,
        healthScore: 45,
        ingredients: ['espresso', 'steamed milk', 'chocolate syrup', 'whipped cream'],
        allergens: ['dairy']
      },
      // DESSERTS
      {
        id: 'apple_pie',
        name: 'Baked Hot Apple Pie',
        category: 'Desserts',
        calories: 250, protein: 2, carbs: 32, fat: 13,
        fiber: 4, sugar: 13, sodium: 170, price: 2.49,
        healthScore: 55,
        ingredients: ['apples', 'pie crust', 'sugar', 'cinnamon'],
        allergens: ['gluten']
      },
      {
        id: 'vanilla_cone',
        name: 'Vanilla Reduced Fat Ice Cream Cone',
        category: 'Desserts',
        calories: 170, protein: 5, carbs: 27, fat: 4.5,
        fiber: 0, sugar: 20, sodium: 70, price: 2.49,
        healthScore: 50,
        ingredients: ['reduced fat ice cream', 'cone'],
        allergens: ['dairy', 'gluten']
      },
      {
        id: 'chocolate_chip_cookie',
        name: 'Chocolate Chip Cookie',
        category: 'Desserts',
        calories: 160, protein: 2, carbs: 21, fat: 8,
        fiber: 1, sugar: 15, sodium: 90, price: 1.99,
        healthScore: 40,
        ingredients: ['flour', 'chocolate chips', 'sugar', 'butter'],
        allergens: ['gluten', 'dairy', 'eggs']
      },
      {
        id: 'mcflurry_oreo',
        name: 'McFlurry with OREO Cookies',
        category: 'Desserts',
        calories: 520, protein: 12, carbs: 80, fat: 17,
        fiber: 1, sugar: 64, sodium: 260, price: 4.99,
        healthScore: 30,
        ingredients: ['vanilla reduced fat ice cream', 'OREO cookie pieces'],
        allergens: ['dairy', 'gluten']
      }
    ]
  },

  // Chipotle - Official nutrition data
  chipotle: {
    id: 'chipotle',
    name: 'Chipotle Mexican Grill',
    logo: '🌯',
    type: 'Fast Casual',
    cuisine: 'Mexican',
    priceRange: '$$',
    healthScore: 85,
    locations: ['Nationwide'],
    menuItems: [
      {
        id: 'chicken_burrito_bowl',
        name: 'Chicken Burrito Bowl',
        category: 'Bowls',
        calories: 540,
        protein: 45,
        carbs: 40,
        fat: 16,
        fiber: 8,
        sugar: 4,
        sodium: 1070,
        price: 9.99,
        ingredients: ['cilantro-lime rice', 'grilled chicken', 'black beans', 'fajita veggies', 'salsa'],
        allergens: [],
        healthScore: 90
      },
      {
        id: 'steak_salad',
        name: 'Steak Salad Bowl',
        category: 'Salads',
        calories: 480,
        protein: 42,
        carbs: 22,
        fat: 18,
        fiber: 12,
        sugar: 8,
        sodium: 1180,
        price: 11.99,
        ingredients: ['romaine lettuce', 'grilled steak', 'black beans', 'pico de gallo', 'cheese'],
        allergens: ['dairy'],
        healthScore: 88
      },
      {
        id: 'carnitas_tacos',
        name: 'Carnitas Tacos (3)',
        category: 'Tacos',
        calories: 420,
        protein: 36,
        carbs: 36,
        fat: 14,
        fiber: 6,
        sugar: 2,
        sodium: 890,
        price: 8.99,
        ingredients: ['corn tortillas', 'carnitas', 'cilantro', 'onions', 'lime'],
        allergens: [],
        healthScore: 82
      }
    ]
  },

  // Subway - Official nutrition data
  subway: {
    id: 'subway',
    name: 'Subway',
    logo: '🥪',
    type: 'Sandwich Shop',
    cuisine: 'American',
    priceRange: '$',
    healthScore: 78,
    locations: ['Nationwide'],
    menuItems: [
      {
        id: 'turkey_breast_6inch',
        name: 'Turkey Breast 6" on 9-Grain Wheat',
        category: 'Sandwiches',
        calories: 280,
        protein: 18,
        carbs: 46,
        fat: 3.5,
        fiber: 5,
        sugar: 8,
        sodium: 810,
        price: 6.99,
        ingredients: ['9-grain wheat bread', 'turkey breast', 'lettuce', 'tomatoes', 'onions'],
        allergens: ['gluten'],
        healthScore: 85
      },
      {
        id: 'veggie_delite_salad',
        name: 'Veggie Delite Salad',
        category: 'Salads',
        calories: 60,
        protein: 3,
        carbs: 11,
        fat: 1,
        fiber: 4,
        sugar: 7,
        sodium: 75,
        price: 5.99,
        ingredients: ['mixed greens', 'tomatoes', 'cucumbers', 'green peppers', 'red onions'],
        allergens: [],
        healthScore: 92
      },
      {
        id: 'chicken_teriyaki_6inch',
        name: 'Sweet Onion Chicken Teriyaki 6"',
        category: 'Sandwiches',
        calories: 370,
        protein: 25,
        carbs: 59,
        fat: 4.5,
        fiber: 5,
        sugar: 18,
        sodium: 1020,
        price: 7.99,
        ingredients: ['honey oat bread', 'chicken breast', 'teriyaki sauce', 'lettuce', 'tomatoes'],
        allergens: ['gluten'],
        healthScore: 78
      }
    ]
  },

  // Panera Bread - Official nutrition data
  panera: {
    id: 'panera',
    name: 'Panera Bread',
    logo: '🥖',
    type: 'Bakery Cafe',
    cuisine: 'American',
    priceRange: '$$',
    healthScore: 82,
    locations: ['Nationwide'],
    menuItems: [
      {
        id: 'green_goddess_salad',
        name: 'Green Goddess Cobb Salad',
        category: 'Salads',
        calories: 570,
        protein: 25,
        carbs: 19,
        fat: 46,
        fiber: 8,
        sugar: 9,
        sodium: 1050,
        price: 11.99,
        ingredients: ['mixed greens', 'chicken', 'bacon', 'avocado', 'blue cheese', 'green goddess dressing'],
        allergens: ['dairy', 'eggs'],
        healthScore: 75
      },
      {
        id: 'turkey_avocado_blt',
        name: 'Turkey & Avocado BLT',
        category: 'Sandwiches',
        calories: 680,
        protein: 34,
        carbs: 53,
        fat: 35,
        fiber: 10,
        sugar: 6,
        sodium: 1440,
        price: 10.99,
        ingredients: ['sourdough bread', 'turkey', 'avocado', 'bacon', 'lettuce', 'tomato'],
        allergens: ['gluten'],
        healthScore: 78
      },
      {
        id: 'greek_salad',
        name: 'Greek Salad',
        category: 'Salads',
        calories: 400,
        protein: 15,
        carbs: 24,
        fat: 28,
        fiber: 7,
        sugar: 12,
        sodium: 930,
        price: 9.99,
        ingredients: ['mixed greens', 'feta cheese', 'olives', 'tomatoes', 'cucumbers', 'red onions'],
        allergens: ['dairy'],
        healthScore: 85
      }
    ]
  },

  // Starbucks - Official nutrition data
  starbucks: {
    id: 'starbucks',
    name: 'Starbucks',
    logo: '☕',
    type: 'Coffee Shop',
    cuisine: 'Cafe',
    priceRange: '$$',
    healthScore: 70,
    locations: ['Nationwide'],
    menuItems: [
      {
        id: 'protein_box_eggs',
        name: 'Eggs & Red Pepper Protein Box',
        category: 'Protein Boxes',
        calories: 470,
        protein: 20,
        carbs: 30,
        fat: 28,
        fiber: 5,
        sugar: 11,
        sodium: 560,
        price: 6.95,
        ingredients: ['hard-boiled eggs', 'cheddar cheese', 'multigrain muesli bread', 'apples', 'grapes'],
        allergens: ['eggs', 'dairy', 'gluten'],
        healthScore: 75
      },
      {
        id: 'spinach_feta_wrap',
        name: 'Spinach, Feta & Egg White Wrap',
        category: 'Breakfast',
        calories: 290,
        protein: 19,
        carbs: 33,
        fat: 10,
        fiber: 6,
        sugar: 3,
        sodium: 830,
        price: 4.95,
        ingredients: ['whole wheat tortilla', 'egg whites', 'spinach', 'feta cheese', 'tomatoes'],
        allergens: ['gluten', 'dairy', 'eggs'],
        healthScore: 82
      },
      {
        id: 'greek_yogurt_berries',
        name: 'Siggi\'s Yogurt & Honey',
        category: 'Snacks',
        calories: 150,
        protein: 15,
        carbs: 20,
        fat: 2,
        fiber: 0,
        sugar: 19,
        sodium: 65,
        price: 3.95,
        ingredients: ['Icelandic yogurt', 'honey', 'mixed berries'],
        allergens: ['dairy'],
        healthScore: 88
      }
    ]
  },

  // Sweetgreen - Official nutrition data
  sweetgreen: {
    id: 'sweetgreen',
    name: 'Sweetgreen',
    logo: '🥗',
    type: 'Salad Bar',
    cuisine: 'Healthy',
    priceRange: '$$$',
    healthScore: 95,
    locations: ['Major Cities'],
    menuItems: [
      {
        id: 'harvest_bowl',
        name: 'Harvest Bowl',
        category: 'Bowls',
        calories: 550,
        protein: 17,
        carbs: 52,
        fat: 31,
        fiber: 12,
        sugar: 19,
        sodium: 540,
        price: 12.95,
        ingredients: ['wild rice', 'roasted chicken', 'roasted sweet potato', 'apples', 'goat cheese', 'almonds'],
        allergens: ['dairy', 'nuts'],
        healthScore: 92
      },
      {
        id: 'kale_caesar',
        name: 'Kale Caesar',
        category: 'Salads',
        calories: 520,
        protein: 15,
        carbs: 26,
        fat: 41,
        fiber: 8,
        sugar: 4,
        sodium: 920,
        price: 11.95,
        ingredients: ['baby kale', 'romaine', 'lime squeeze', 'parmesan', 'breadcrumbs', 'caesar dressing'],
        allergens: ['dairy', 'gluten'],
        healthScore: 85
      }
    ]
  }
};

// Helper functions for the restaurant database
export const searchRestaurants = (query, userPreferences = {}) => {
  const restaurants = Object.values(RESTAURANT_DATABASE);
  const lowerQuery = query.toLowerCase();
  
  return restaurants.filter(restaurant => 
    restaurant.name.toLowerCase().includes(lowerQuery) ||
    restaurant.type.toLowerCase().includes(lowerQuery) ||
    restaurant.cuisine.toLowerCase().includes(lowerQuery)
  );
};

export const getRestaurantById = (id) => {
  return RESTAURANT_DATABASE[id] || null;
};

export const getMenuItemsByGoal = (restaurant, goal) => {
  if (!restaurant) return [];
  
  let items = [...restaurant.menuItems];
  
  // Sort items based on user's fitness goal
  if (goal === 'cut') {
    // Prioritize low calorie, high protein items
    items.sort((a, b) => {
      const aScore = (a.protein / a.calories) * 1000 - a.calories * 0.1;
      const bScore = (b.protein / b.calories) * 1000 - b.calories * 0.1;
      return bScore - aScore;
    });
  } else if (goal === 'bulk') {
    // Prioritize high calorie, high protein items
    items.sort((a, b) => {
      const aScore = a.calories * 0.5 + a.protein * 10;
      const bScore = b.calories * 0.5 + b.protein * 10;
      return bScore - aScore;
    });
  } else {
    // Maintain: prioritize balanced, healthy options
    items.sort((a, b) => b.healthScore - a.healthScore);
  }
  
  return items;
};

export const filterByDietaryRestrictions = (items, restrictions = []) => {
  return items.filter(item => {
    if (restrictions.includes('vegetarian') && item.ingredients.some(ing => 
      ['beef', 'chicken', 'pork', 'turkey', 'bacon', 'ham'].some(meat => ing.includes(meat))
    )) {
      return false;
    }
    
    if (restrictions.includes('vegan') && item.allergens.includes('dairy')) {
      return false;
    }
    
    if (restrictions.includes('gluten-free') && item.allergens.includes('gluten')) {
      return false;
    }
    
    return true;
  });
};

export default RESTAURANT_DATABASE;
