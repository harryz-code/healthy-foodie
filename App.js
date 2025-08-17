import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

// Import screens
import WelcomeScreen from './src/screens/WelcomeScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import GenderScreen from './src/screens/onboarding/GenderScreen';
import GoalScreen from './src/screens/onboarding/GoalScreen';
import ActivityScreen from './src/screens/onboarding/ActivityScreen';
import HeightScreen from './src/screens/onboarding/HeightScreen';
import WeightScreen from './src/screens/onboarding/WeightScreen';
import BirthdateScreen from './src/screens/onboarding/BirthdateScreen';
import TimelineScreen from './src/screens/onboarding/TimelineScreen';
import FoodPreferencesScreen from './src/screens/onboarding/FoodPreferencesScreen';
import AllergiesScreen from './src/screens/onboarding/AllergiesScreen';
import RestaurantSelectionScreen from './src/screens/onboarding/RestaurantSelectionScreen';
import SignupScreen from './src/screens/onboarding/SignupScreen';
import LoadingScreen from './src/screens/onboarding/LoadingScreen';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import MenuFitCoachScreen from './src/screens/MenuFitCoachScreen';
import RestaurantCameraScreen from './src/screens/RestaurantCameraScreen';
import RestaurantSearchScreen from './src/screens/RestaurantSearchScreen';
import RestaurantMenuScreen from './src/screens/RestaurantMenuScreen';
import MealDetailScreen from './src/screens/MealDetailScreen';
import DataSourceInfoScreen from './src/screens/DataSourceInfoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#FFFFFF' },
          }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Gender" component={GenderScreen} />
          <Stack.Screen name="Goal" component={GoalScreen} />
          <Stack.Screen name="Activity" component={ActivityScreen} />
          <Stack.Screen name="Height" component={HeightScreen} />
          <Stack.Screen name="Weight" component={WeightScreen} />
          <Stack.Screen name="Birthdate" component={BirthdateScreen} />
          <Stack.Screen name="Timeline" component={TimelineScreen} />
          <Stack.Screen name="FoodPreferences" component={FoodPreferencesScreen} />
          <Stack.Screen name="Allergies" component={AllergiesScreen} />
          <Stack.Screen name="RestaurantSelection" component={RestaurantSelectionScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Loading" component={LoadingScreen} />
          <Stack.Screen name="Main" component={MainTabNavigator} />
          <Stack.Screen name="MenuFitCoach" component={MenuFitCoachScreen} />
          <Stack.Screen name="RestaurantCamera" component={RestaurantCameraScreen} />
          <Stack.Screen name="RestaurantSearch" component={RestaurantSearchScreen} />
          <Stack.Screen name="RestaurantMenu" component={RestaurantMenuScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          <Stack.Screen name="DataSourceInfo" component={DataSourceInfoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}