import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OnboardingLayout from '../../components/OnboardingLayout';
import SelectableOption from '../../components/SelectableOption';
import Button from '../../components/Button';
import { COLORS, FONTS, SPACING } from '../../constants/theme';
import userDataService from '../../services/userDataService';

const GoalScreen = ({ navigation }) => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  // Load existing goal on component mount
  useEffect(() => {
    const loadUserData = async () => {
      const userData = await userDataService.loadUserData();
      if (userData.goal) {
        setSelectedGoal(userData.goal);
      }
    };
    loadUserData();
  }, []);

  const goalOptions = [
    { 
      id: 'bulk', 
      title: 'Bulk', 
      subtitle: 'gain weight',
      icon: '💪' 
    },
    { 
      id: 'cut', 
      title: 'Cut', 
      subtitle: 'lose weight',
      icon: '🏃‍♂️' 
    },
    { 
      id: 'maintain', 
      title: 'Maintain', 
      subtitle: 'stay fit',
      icon: '⚖️' 
    },
  ];

  const handleContinue = async () => {
    if (selectedGoal) {
      try {
        // Save the selected goal
        await userDataService.saveUserData({ goal: selectedGoal });
        console.log('Goal saved:', selectedGoal);
        
        // Navigate to next screen
        navigation.navigate('Activity');
      } catch (error) {
        console.error('Error saving goal:', error);
        // Still navigate even if save fails
        navigation.navigate('Activity');
      }
    }
  };

  return (
    <OnboardingLayout
      title="What's your goal?"
      subtitle="This will be used to calibrate your custom calories and macros."
      progress={20}
      onBack={() => navigation.goBack()}
    >
      <View style={styles.content}>
        <View style={styles.optionsContainer}>
          {goalOptions.map((option) => (
            <SelectableOption
              key={option.id}
              title={option.title}
              subtitle={option.subtitle}
              icon={<Text style={styles.goalIcon}>{option.icon}</Text>}
              selected={selectedGoal === option.id}
              onPress={() => setSelectedGoal(option.id)}
              variant="large"
            />
          ))}
        </View>

        <View style={styles.footer}>
          <Button
            title="Continue"
            onPress={handleContinue}
            disabled={!selectedGoal}
          />
        </View>
      </View>
    </OnboardingLayout>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  optionsContainer: {
    flex: 1,
    paddingTop: SPACING.xl,
  },
  goalIcon: {
    fontSize: 24,
  },
  footer: {
    paddingBottom: SPACING.xl,
  },
});

export default GoalScreen;
