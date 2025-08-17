import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS, BORDER_RADIUS } from '../constants/theme';

const ProgressBar = ({ progress = 0, height = 4, color = COLORS.primary, backgroundColor = COLORS.backgroundGray }) => {
  return (
    <View style={[styles.container, { height, backgroundColor }]}>
      <View 
        style={[
          styles.progress, 
          { 
            width: `${Math.max(0, Math.min(100, progress))}%`, 
            backgroundColor: color,
            height 
          }
        ]} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: BORDER_RADIUS.full,
    overflow: 'hidden',
  },
  progress: {
    borderRadius: BORDER_RADIUS.full,
  },
});

export default ProgressBar;
