import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OnboardingLayout from '../../components/OnboardingLayout';
import SelectableOption from '../../components/SelectableOption';
import Button from '../../components/Button';
import { COLORS, FONTS, SPACING } from '../../constants/theme';

const ActivityScreen = ({ navigation }) => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activityOptions = [
    { 
      id: 'sedentary', 
      title: 'Sedentary', 
      subtitle: 'No activity',
      icon: '🪑' 
    },
    { 
      id: 'light', 
      title: 'Light Activity', 
      subtitle: '1-2x/week',
      icon: '🚶' 
    },
    { 
      id: 'moderate', 
      title: 'Moderate Activity', 
      subtitle: '3-4x/week',
      icon: '🏃' 
    },
    { 
      id: 'active', 
      title: 'Active', 
      subtitle: 'workout 5+ x/week',
      icon: '🏋️' 
    },
    { 
      id: 'very_active', 
      title: 'Very Active', 
      subtitle: 'athlete, physical job',
      icon: '🏋️‍♂️' 
    },
  ];

  const handleContinue = () => {
    if (selectedActivity) {
      navigation.navigate('Height');
    }
  };

  return (
    <OnboardingLayout
      title="Activity Level"
      progress={30}
      onBack={() => navigation.goBack()}
    >
      <View style={styles.content}>
        <View style={styles.optionsContainer}>
          {activityOptions.map((option) => (
            <SelectableOption
              key={option.id}
              title={option.title}
              subtitle={option.subtitle}
              icon={<Text style={styles.activityIcon}>{option.icon}</Text>}
              selected={selectedActivity === option.id}
              onPress={() => setSelectedActivity(option.id)}
            />
          ))}
        </View>

        <View style={styles.footer}>
          <Button
            title="Continue"
            onPress={handleContinue}
            disabled={!selectedActivity}
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
    paddingTop: SPACING.lg,
  },
  activityIcon: {
    fontSize: 24,
  },
  footer: {
    paddingBottom: SPACING.xl,
  },
});

export default ActivityScreen;
