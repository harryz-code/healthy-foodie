import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTS, SPACING, BORDER_RADIUS } from '../constants/theme';

const ChatMessage = ({ message, isUser = false, avatar }) => {
  if (isUser) {
    return (
      <View style={styles.userMessageContainer}>
        <View style={styles.userMessage}>
          <Text style={styles.userMessageText}>{message}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.botMessageContainer}>
      {avatar && (
        <View style={styles.avatarContainer}>
          <Text style={styles.avatar}>{avatar}</Text>
        </View>
      )}
      <LinearGradient
        colors={['#667EEA', '#764BA2']}
        style={styles.botMessage}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.botMessageText}>{message}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  userMessageContainer: {
    alignItems: 'flex-end',
    marginBottom: SPACING.md,
    paddingHorizontal: SPACING.md,
  },
  userMessage: {
    backgroundColor: COLORS.backgroundGray,
    borderRadius: BORDER_RADIUS.lg,
    borderBottomRightRadius: BORDER_RADIUS.xs,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    maxWidth: '80%',
  },
  userMessageText: {
    fontSize: FONTS.base,
    color: COLORS.textPrimary,
    lineHeight: 20,
  },
  botMessageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: SPACING.md,
    paddingHorizontal: SPACING.md,
  },
  avatarContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.backgroundGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.sm,
  },
  avatar: {
    fontSize: 16,
  },
  botMessage: {
    borderRadius: BORDER_RADIUS.lg,
    borderBottomLeftRadius: BORDER_RADIUS.xs,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    maxWidth: '80%',
  },
  botMessageText: {
    fontSize: FONTS.base,
    color: COLORS.buttonText,
    lineHeight: 20,
  },
});

export default ChatMessage;
