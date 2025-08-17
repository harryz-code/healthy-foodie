import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OnboardingLayout from '../../components/OnboardingLayout';
import Button from '../../components/Button';
import { SPACING } from '../../constants/theme';

const FoodPreferencesScreen = ({ navigation }) => {
  return (
    <OnboardingLayout
      title="What types of food do you love to eat?"
      subtitle="Select your favorite foods and ingredients. The more info you give us, the more accurate your recommendations will be."
      progress={75}
      onBack={() => navigation.goBack()}
    >
      <View style={styles.content}>
        <Text style={styles.placeholder}>Food preference options would go here</Text>
        <View style={styles.footer}>
          <Button
            title="Continue"
            onPress={() => navigation.navigate('Allergies')}
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
    alignItems: 'center',
  },
  placeholder: {
    flex: 1,
    textAlignVertical: 'center',
    color: '#666',
  },
  footer: {
    paddingBottom: SPACING.xl,
    width: '100%',
  },
});

export default FoodPreferencesScreen;
