import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OnboardingLayout from '../../components/OnboardingLayout';
import Button from '../../components/Button';
import { SPACING } from '../../constants/theme';

const TimelineScreen = ({ navigation }) => {
  return (
    <OnboardingLayout
      title="Your timeline to hit that goal?"
      progress={70}
      onBack={() => navigation.goBack()}
    >
      <View style={styles.content}>
        <Text style={styles.placeholder}>Timeline options would go here</Text>
        <View style={styles.footer}>
          <Button
            title="Continue"
            onPress={() => navigation.navigate('FoodPreferences')}
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

export default TimelineScreen;
