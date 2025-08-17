import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OnboardingLayout from '../../components/OnboardingLayout';
import Button from '../../components/Button';
import { SPACING } from '../../constants/theme';

const HeightScreen = ({ navigation }) => {
  const [height, setHeight] = useState('5\'9"');

  const handleContinue = () => {
    navigation.navigate('Weight');
  };

  return (
    <OnboardingLayout
      title="Tell us about you"
      subtitle="This will be used to calibrate your custom calories and macros."
      progress={40}
      onBack={() => navigation.goBack()}
    >
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Height</Text>
          <Text style={styles.heightValue}>{height}</Text>
          <Text style={styles.note}>Height picker would go here</Text>
        </View>

        <View style={styles.footer}>
          <Button
            title="Continue"
            onPress={handleContinue}
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
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  heightValue: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  note: {
    color: '#666',
    fontStyle: 'italic',
  },
  footer: {
    paddingBottom: SPACING.xl,
  },
});

export default HeightScreen;
