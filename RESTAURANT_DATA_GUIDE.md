# 🍽️ Restaurant Data Upload Guide

This guide will help you easily add new restaurants to the MenuFit database.

## 📋 Quick Start Checklist

For each restaurant you want to add:
- [ ] Restaurant basic info (name, type, cuisine)
- [ ] Logo image or emoji
- [ ] Menu items with categories
- [ ] Nutrition data for each item
- [ ] Pricing information
- [ ] Allergen information

## 🏪 Step 1: Restaurant Basic Info

```javascript
{
  id: 'restaurant_name',           // lowercase, underscores (e.g., 'taco_bell')
  name: 'Restaurant Display Name',  // How it appears in app
  logo: '🌮',                      // Emoji for now, image later
  type: 'Fast Food',               // See types below
  cuisine: 'Mexican',              // See cuisines below
  priceRange: '$$',                // $, $$, $$$, $$$$
  healthScore: 75,                 // 0-100 overall health rating
  locations: ['Nationwide']        // Where available
}
```

### Restaurant Types:
- `Fast Food` - McDonald's, KFC, Burger King
- `Fast Casual` - Chipotle, Panera, Five Guys
- `Coffee Shop` - Starbucks, Dunkin'
- `Casual Dining` - Applebee's, Chili's
- `Salad Bar` - Sweetgreen, Chopt
- `Sandwich Shop` - Subway, Jimmy John's
- `Pizza` - Domino's, Pizza Hut
- `Bakery Cafe` - Panera, Corner Bakery

### Cuisines:
- `American`, `Mexican`, `Italian`, `Asian`, `Chinese`, `Japanese`, `Indian`, `Mediterranean`, `Healthy`, `Cafe`

## 🍔 Step 2: Menu Items

For each menu item, provide:

```javascript
{
  id: 'menu_item_name',
  name: 'Display Name',
  category: 'Burgers',             // See categories below
  
  // NUTRITION (REQUIRED - get from restaurant's official website)
  calories: 563,
  protein: 25,    // grams
  carbs: 45,      // grams
  fat: 33,        // grams
  fiber: 3,       // grams
  sugar: 9,       // grams
  sodium: 1010,   // milligrams
  
  // ADDITIONAL INFO
  price: 6.99,
  ingredients: ['beef', 'lettuce', 'cheese', 'pickles'],
  allergens: ['gluten', 'dairy']   // See allergens below
}
```

### Menu Categories:
- `Breakfast`, `Burgers`, `Sandwiches`, `Salads`, `Bowls`, `Tacos`, `Pizza`, `Pasta`, `Sides`, `Drinks`, `Desserts`

### Common Allergens:
- `gluten`, `dairy`, `eggs`, `nuts`, `peanuts`, `soy`, `shellfish`, `fish`

## 📊 Where to Get Nutrition Data

### Official Sources (BEST):
1. **Restaurant's Official Website** - Most accurate
2. **Restaurant's Mobile App** - Often has detailed nutrition
3. **FDA Menu Labeling** - Required for chains 20+ locations

### Reliable Databases:
- **USDA Food Data Central** - For generic items
- **MyFitnessPal** - Cross-reference only
- **CalorieKing** - Professional nutrition database

## 🎯 Example: Adding Taco Bell

Here's a complete example:

```javascript
export const TACO_BELL = {
  id: 'taco_bell',
  name: 'Taco Bell',
  logo: '🌮',
  type: 'Fast Food',
  cuisine: 'Mexican',
  priceRange: '$',
  healthScore: 70,
  locations: ['Nationwide'],
  
  menuItems: [
    {
      id: 'crunchy_taco',
      name: 'Crunchy Taco',
      category: 'Tacos',
      
      calories: 170,
      protein: 8,
      carbs: 13,
      fat: 10,
      fiber: 3,
      sugar: 2,
      sodium: 310,
      
      price: 1.49,
      ingredients: ['seasoned beef', 'lettuce', 'cheddar cheese', 'taco shell'],
      allergens: ['gluten', 'dairy']
    },
    {
      id: 'power_menu_bowl',
      name: 'Power Menu Bowl - Veggie',
      category: 'Bowls',
      
      calories: 430,
      protein: 13,
      carbs: 49,
      fat: 17,
      fiber: 12,
      sugar: 4,
      sodium: 1050,
      
      price: 5.99,
      ingredients: ['cilantro rice', 'black beans', 'lettuce', 'tomatoes', 'cheese', 'avocado ranch'],
      allergens: ['dairy']
    }
  ]
};
```

## 🚀 How to Add Your Data

1. **Copy the template** from `src/data/restaurantTemplate.js`
2. **Fill in your restaurant data** using the format above
3. **Add it to the main database** in `src/data/restaurantDatabase.js`
4. **Test in the app** - search should find it immediately!

## 💡 Pro Tips

- **Start with popular items** - Focus on the most ordered menu items first
- **Use official nutrition data** - Always get data from the restaurant's official source
- **Double-check allergens** - This is critical for user safety
- **Health scores** - Higher protein, lower calories/sodium = higher score
- **Categories matter** - Users filter by category, so be consistent

## 🏆 Priority Restaurants to Add

Most requested by users:
1. Taco Bell
2. In-N-Out Burger
3. Five Guys
4. Chick-fil-A
5. Domino's Pizza
6. Olive Garden
7. Panda Express
8. Dunkin'

---

**Need help?** The app automatically calculates health scores and dietary tags, so you just need to focus on getting accurate nutrition data!
