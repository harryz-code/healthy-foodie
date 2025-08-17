import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OnboardingLayout from '../../components/OnboardingLayout';
import Button from '../../components/Button';
import { SPACING } from '../../constants/theme';

const BirthdateScreen = ({ navigation }) => {
  return (
    <OnboardingLayout
      title="When were you born?"
      subtitle="This will be used to calibrate your custom calories and macros."
      progress={60}
      onBack={() => navigation.goBack()}
    >
      <View style={styles.content}>
        <Text style={styles.placeholder}>Date picker would go here</Text>
        <View style={styles.footer}>
          <Button
            title="Continue"
            onPress={() => navigation.navigate('Timeline')}
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

export default BirthdateScreen;
