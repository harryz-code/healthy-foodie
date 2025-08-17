import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OnboardingLayout from '../../components/OnboardingLayout';
import SelectableOption from '../../components/SelectableOption';
import Button from '../../components/Button';
import { COLORS, FONTS, SPACING } from '../../constants/theme';

const GenderScreen = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const genderOptions = [
    { id: 'male', title: 'Male', icon: '👨' },
    { id: 'female', title: 'Female', icon: '👩' },
    { id: 'other', title: 'Other', icon: '👤' },
  ];

  const handleContinue = () => {
    if (selectedGender) {
      navigation.navigate('Goal');
    }
  };

  return (
    <OnboardingLayout
      title="Choose your Gender"
      subtitle="Gender is required to calculate your personalized calories and macros using scientifically validated nutrition formulas. This ensures your meal suggestions are accurate and aligned with your health goals."
      progress={10}
      onBack={() => navigation.goBack()}
    >
      <View style={styles.content}>
        <View style={styles.optionsContainer}>
          {genderOptions.map((option) => (
            <SelectableOption
              key={option.id}
              title={option.title}
              icon={<Text style={styles.genderIcon}>{option.icon}</Text>}
              selected={selectedGender === option.id}
              onPress={() => setSelectedGender(option.id)}
              variant="large"
            />
          ))}
        </View>

        <View style={styles.footer}>
          <Button
            title="Continue"
            onPress={handleContinue}
            disabled={!selectedGender}
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
  genderIcon: {
    fontSize: 24,
  },
  footer: {
    paddingBottom: SPACING.xl,
  },
});

export default GenderScreen;
