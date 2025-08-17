// User Data Service - Save and retrieve user preferences
import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_DATA_KEY = '@healthy_foodie_user_data';

class UserDataService {
  constructor() {
    this.userData = {
      // Onboarding data
      gender: null,
      goal: null, // 'cut', 'bulk', 'maintain'
      activityLevel: null, // 'sedentary', 'light', 'moderate', 'very', 'extra'
      height: null, // in cm
      weight: null, // in kg
      birthdate: null,
      timeline: null, // weeks
      foodPreferences: [], // ['vegetarian', 'vegan', 'keto', etc.]
      allergies: [], // ['nuts', 'dairy', 'gluten', etc.]
      favoriteRestaurants: [], // restaurant IDs
      
      // App data
      isOnboardingComplete: false,
      chatHistory: [],
      favoriteMeals: [],
      nutritionGoals: {
        dailyCalories: null,
        protein: null,
        carbs: null,
        fats: null
      }
    };
  }

  // Load user data from storage
  async loadUserData() {
    try {
      const savedData = await AsyncStorage.getItem(USER_DATA_KEY);
      if (savedData) {
        this.userData = { ...this.userData, ...JSON.parse(savedData) };
        return this.userData;
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
    return this.userData;
  }

  // Save user data to storage
  async saveUserData(newData = {}) {
    try {
      this.userData = { ...this.userData, ...newData };
      await AsyncStorage.setItem(USER_DATA_KEY, JSON.stringify(this.userData));
      return this.userData;
    } catch (error) {
      console.error('Error saving user data:', error);
      throw error;
    }
  }

  // Get current user data
  getUserData() {
    return this.userData;
  }

  // Update specific fields
  async updateUserField(field, value) {
    return await this.saveUserData({ [field]: value });
  }

  // Calculate nutrition goals based on user data
  calculateNutritionGoals() {
    const { gender, weight, height, birthdate, activityLevel, goal } = this.userData;
    
    if (!weight || !height || !birthdate || !gender || !activityLevel) {
      return null;
    }

    // Calculate age
    const today = new Date();
    const birth = new Date(birthdate);
    const age = today.getFullYear() - birth.getFullYear();

    // Calculate BMR (Basal Metabolic Rate) using Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    // Activity multipliers
    const activityMultipliers = {
      'sedentary': 1.2,
      'light': 1.375,
      'moderate': 1.55,
      'very': 1.725,
      'extra': 1.9
    };

    // Calculate TDEE (Total Daily Energy Expenditure)
    const tdee = bmr * (activityMultipliers[activityLevel] || 1.2);

    // Adjust calories based on goal
    let dailyCalories;
    switch (goal) {
      case 'cut':
        dailyCalories = Math.round(tdee - 500); // 500 calorie deficit
        break;
      case 'bulk':
        dailyCalories = Math.round(tdee + 300); // 300 calorie surplus
        break;
      case 'maintain':
      default:
        dailyCalories = Math.round(tdee);
        break;
    }

    // Calculate macros (protein, carbs, fats)
    const protein = Math.round((dailyCalories * 0.30) / 4); // 30% protein
    const fats = Math.round((dailyCalories * 0.25) / 9); // 25% fats
    const carbs = Math.round((dailyCalories - (protein * 4) - (fats * 9)) / 4); // Remaining carbs

    const nutritionGoals = {
      dailyCalories,
      protein,
      carbs,
      fats
    };

    // Save the calculated goals
    this.saveUserData({ nutritionGoals });
    
    return nutritionGoals;
  }

  // Add to chat history
  async addChatMessage(userMessage, aiResponse) {
    const chatHistory = [...this.userData.chatHistory];
    chatHistory.push({
      timestamp: new Date().toISOString(),
      userMessage,
      aiResponse
    });
    
    // Keep only last 50 messages to prevent storage bloat
    if (chatHistory.length > 50) {
      chatHistory.splice(0, chatHistory.length - 50);
    }
    
    return await this.saveUserData({ chatHistory });
  }

  // Add favorite meal
  async addFavoriteMeal(meal) {
    const favoriteMeals = [...this.userData.favoriteMeals];
    
    // Check if meal already exists
    const existingIndex = favoriteMeals.findIndex(m => m.id === meal.id);
    if (existingIndex === -1) {
      favoriteMeals.push({
        ...meal,
        savedAt: new Date().toISOString()
      });
      return await this.saveUserData({ favoriteMeals });
    }
    
    return this.userData;
  }

  // Remove favorite meal
  async removeFavoriteMeal(mealId) {
    const favoriteMeals = this.userData.favoriteMeals.filter(m => m.id !== mealId);
    return await this.saveUserData({ favoriteMeals });
  }

  // Check if onboarding is complete
  isOnboardingComplete() {
    const required = ['gender', 'goal', 'activityLevel', 'height', 'weight', 'birthdate'];
    return required.every(field => this.userData[field] !== null);
  }

  // Complete onboarding
  async completeOnboarding() {
    const nutritionGoals = this.calculateNutritionGoals();
    return await this.saveUserData({ 
      isOnboardingComplete: true,
      nutritionGoals
    });
  }

  // Clear all user data (for testing or logout)
  async clearUserData() {
    try {
      await AsyncStorage.removeItem(USER_DATA_KEY);
      this.userData = {
        gender: null,
        goal: null,
        activityLevel: null,
        height: null,
        weight: null,
        birthdate: null,
        timeline: null,
        foodPreferences: [],
        allergies: [],
        favoriteRestaurants: [],
        isOnboardingComplete: false,
        chatHistory: [],
        favoriteMeals: [],
        nutritionGoals: {
          dailyCalories: null,
          protein: null,
          carbs: null,
          fats: null
        }
      };
      return true;
    } catch (error) {
      console.error('Error clearing user data:', error);
      return false;
    }
  }
}

// Export singleton instance
const userDataService = new UserDataService();
export default userDataService;
