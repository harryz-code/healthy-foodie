import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform 
} from 'react-native';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';
import aiService from '../services/aiService';
import userDataService from '../services/userDataService';
import { COLORS, FONTS, SPACING, BORDER_RADIUS } from '../constants/theme';

const MenuFitCoachScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      message: "I'm traveling and need to stay on track, what're the best meals for me?",
      isUser: true,
    },
    {
      id: 2,
      message: "Got it, staying on track while traveling is definitely possible with the right strategy! First, let's nail down a bit more about your current situation so I can give you the best possible recommendations.\n\n- Are you planning to dine out, order in, or maybe even grab something quick from a café or fast food place?\n- Do you have any specific restaurants in mind or are you open to suggestions?\n- What's your budget range for this meal?\n- Are you looking for something substantial or just a light bite to keep you going?\n- Eating alone or with a group; dining atmosphere might impact your choice.\n\nWith these insights, I can tailor the best meal options for you that align with your goals while keeping your preferences and situation in check. Let me know!",
      isUser: false,
      avatar: '🥗',
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [suggestedQuestions, setSuggestedQuestions] = useState([]);
  const scrollViewRef = useRef();

  // Real user context loaded from userDataService
  const [userContext, setUserContext] = useState({
    goal: 'maintain',
    activityLevel: 'moderate',
    preferences: []
  });

  // Load user data on mount
  useEffect(() => {
    const loadUserData = async () => {
      const data = await userDataService.loadUserData();
      if (data) {
        setUserContext({
          goal: data.goal || 'maintain',
          activityLevel: data.activityLevel || 'moderate',
          preferences: [...(data.foodPreferences || []), ...(data.allergies || [])],
          nutritionGoals: data.nutritionGoals
        });
      }
    };
    loadUserData();
  }, []);

  useEffect(() => {
    // Initialize suggested questions
    setSuggestedQuestions(aiService.getSuggestedQuestions());
  }, []);

  useEffect(() => {
    // Scroll to bottom when new messages are added
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, [messages]);

  const handleSendMessage = async (message) => {
    const newMessage = {
      id: messages.length + 1,
      message,
      isUser: true,
    };

    setMessages(prev => [...prev, newMessage]);
    setIsTyping(true);

    try {
      // Get AI response using Hugging Face API
      const aiResponseText = await aiService.sendMessage(message, userContext);
      
      const aiResponse = {
        id: messages.length + 2,
        message: aiResponseText,
        isUser: false,
        avatar: '🥗',
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const fallbackResponse = {
        id: messages.length + 2,
        message: "I'm having trouble connecting right now, but I'm here to help you make healthy choices! What restaurant are you considering?",
        isUser: false,
        avatar: '🥗',
      };
      setMessages(prev => [...prev, fallbackResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestedQuestion = (question) => {
    handleSendMessage(question);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          
          <View style={styles.headerContent}>
            <View style={styles.coachAvatar}>
              <Text style={styles.coachAvatarText}>🥗</Text>
            </View>
            <Text style={styles.headerTitle}>MenuFit Coach</Text>
          </View>
          
          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.infoIcon}>ⓘ</Text>
          </TouchableOpacity>
        </View>

        {/* Messages */}
        <ScrollView 
          ref={scrollViewRef}
          style={styles.messagesContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.messagesList}>
            {messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg.message}
                isUser={msg.isUser}
                avatar={msg.avatar}
              />
            ))}
            
            {isTyping && (
              <View style={styles.typingContainer}>
                <View style={styles.typingAvatar}>
                  <Text style={styles.typingAvatarText}>🥗</Text>
                </View>
                <View style={styles.typingBubble}>
                  <View style={styles.typingDots}>
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                  </View>
                </View>
              </View>
            )}
          </View>
        </ScrollView>

        {/* Suggested Questions */}
        {messages.length <= 2 && (
          <View style={styles.suggestionsContainer}>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.suggestionsContent}
            >
              {suggestedQuestions.map((question, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.suggestionBubble}
                  onPress={() => handleSuggestedQuestion(question)}
                >
                  <View style={styles.suggestionIcon}>
                    <Text style={styles.suggestionIconText}>💬</Text>
                  </View>
                  <Text style={styles.suggestionText}>{question}</Text>
                  <Text style={styles.suggestionArrow}>→</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Chat Input */}
        <ChatInput onSend={handleSendMessage} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    backgroundColor: COLORS.background,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: FONTS.xl,
    color: COLORS.textPrimary,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  coachAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.backgroundGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.sm,
  },
  coachAvatarText: {
    fontSize: 16,
  },
  headerTitle: {
    fontSize: FONTS.lg,
    fontWeight: FONTS.semibold,
    color: COLORS.textPrimary,
  },
  infoButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoIcon: {
    fontSize: FONTS.lg,
    color: COLORS.textSecondary,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesList: {
    paddingVertical: SPACING.md,
  },
  typingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: SPACING.md,
    paddingHorizontal: SPACING.md,
  },
  typingAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.backgroundGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.sm,
  },
  typingAvatarText: {
    fontSize: 16,
  },
  typingBubble: {
    backgroundColor: COLORS.backgroundGray,
    borderRadius: BORDER_RADIUS.lg,
    borderBottomLeftRadius: BORDER_RADIUS.xs,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
  },
  typingDots: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.textTertiary,
    marginRight: 4,
  },
  suggestionsContainer: {
    paddingVertical: SPACING.sm,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  suggestionsContent: {
    paddingHorizontal: SPACING.md,
  },
  suggestionBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: BORDER_RADIUS.xl,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    marginRight: SPACING.sm,
    maxWidth: 280,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  suggestionIcon: {
    marginRight: SPACING.xs,
  },
  suggestionIconText: {
    fontSize: 14,
  },
  suggestionText: {
    flex: 1,
    fontSize: FONTS.sm,
    color: COLORS.textPrimary,
    lineHeight: 18,
  },
  suggestionArrow: {
    fontSize: FONTS.sm,
    color: COLORS.textSecondary,
    marginLeft: SPACING.xs,
  },
});

export default MenuFitCoachScreen;
