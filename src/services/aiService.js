// AI Service using intelligent fallback responses
// Note: In production, API keys should be handled by a secure backend
// For development, the app works without API keys using smart responses

const HF_API_KEY = null; // Removed for security - use environment variables in production
const HF_API_URL = 'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium';

class AIService {
  constructor() {
    this.conversationHistory = [];
    this.isInitialized = false;
  }

  async initialize() {
    if (this.isInitialized) return;
    
    // Add system context for MenuFit Coach
    this.conversationHistory = [{
      role: 'system',
      content: `You are MenuFit Coach, a helpful AI nutrition assistant that helps people make healthy food choices when eating out. You provide personalized meal recommendations based on users' fitness goals (cut, bulk, maintain), activity levels, and dietary preferences. 

Key principles:
- Focus on helping users stay on track with their nutrition goals
- Provide specific meal recommendations with calorie and macro information
- Be encouraging and supportive
- Ask clarifying questions to give better recommendations
- Consider restaurant availability and practical eating situations
- Use a friendly, coach-like tone

Always aim to be helpful, accurate, and motivating while keeping responses concise and actionable.`
    }];
    
    this.isInitialized = true;
  }

  async sendMessage(userMessage, userContext = {}) {
    await this.initialize();

    try {
      // Add user context if available
      let contextualMessage = userMessage;
      if (userContext.goal || userContext.activityLevel) {
        contextualMessage += ` (User context: Goal: ${userContext.goal || 'not specified'}, Activity: ${userContext.activityLevel || 'not specified'})`;
      }

      // Add user message to history
      this.conversationHistory.push({
        role: 'user',
        content: contextualMessage
      });

      // Prepare the conversation for the API
      const conversationText = this.conversationHistory
        .filter(msg => msg.role !== 'system')
        .map(msg => msg.content)
        .join('\n');

      const response = await fetch(HF_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${HF_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: conversationText,
          parameters: {
            max_length: 200,
            temperature: 0.7,
            do_sample: true,
            pad_token_id: 50256
          },
          options: {
            wait_for_model: true
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Extract the AI response
      let aiResponse = '';
      if (data && data[0] && data[0].generated_text) {
        const fullText = data[0].generated_text;
        // Extract only the new response (after the last user input)
        const parts = fullText.split('\n');
        aiResponse = parts[parts.length - 1] || 'I\'m here to help you make healthy choices! What would you like to know?';
      } else {
        aiResponse = this.getFallbackResponse(userMessage);
      }

      // Clean up the response
      aiResponse = this.cleanResponse(aiResponse);

      // Add AI response to history
      this.conversationHistory.push({
        role: 'assistant',
        content: aiResponse
      });

      return aiResponse;

    } catch (error) {
      console.error('AI Service Error:', error);
      return this.getFallbackResponse(userMessage);
    }
  }

  cleanResponse(response) {
    // Remove any unwanted prefixes or suffixes
    return response
      .replace(/^(User:|AI:|Assistant:|MenuFit:)/i, '')
      .replace(/^\s*[-•]\s*/, '')
      .trim();
  }

  getFallbackResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    // Nutrition and meal-related responses
    if (lowerMessage.includes('travel') || lowerMessage.includes('track')) {
      return "Great question! Staying on track while traveling is definitely possible. I'd recommend looking for meals with lean proteins and vegetables. What type of restaurant are you planning to visit?";
    }
    
    if (lowerMessage.includes('vegan')) {
      return "For vegan options, I'd suggest looking for meals rich in plant-based proteins like beans, lentils, tofu, or tempeh. Many restaurants now offer excellent vegan bowls with quinoa, vegetables, and legumes. What restaurant are you considering?";
    }
    
    if (lowerMessage.includes('decide') || lowerMessage.includes('good meal')) {
      return "I help you decide by analyzing meals based on your goals, activity level, and preferences. I look at the macro balance (protein, carbs, fats), calorie content, and how well it aligns with your fitness objectives. What's your current goal - cutting, bulking, or maintaining?";
    }
    
    if (lowerMessage.includes('restaurant') || lowerMessage.includes('menu')) {
      return "I can help you find the healthiest options at any restaurant! Just let me know which restaurant you're considering, or take a photo of the menu. I'll analyze the options based on your goals and preferences.";
    }
    
    if (lowerMessage.includes('protein')) {
      return "Great focus on protein! For your goals, I'd recommend meals with at least 25-30g of protein. Look for grilled chicken, fish, lean beef, or plant-based options like tofu and legumes. What restaurant are you checking out?";
    }
    
    // Default helpful response
    return "I'm here to help you make healthy choices when eating out! Whether you need meal recommendations, want to analyze restaurant options, or have questions about nutrition, I've got you covered. What can I help you with today?";
  }

  clearHistory() {
    this.conversationHistory = [];
    this.isInitialized = false;
  }

  // Get suggested questions based on conversation context
  getSuggestedQuestions() {
    const suggestions = [
      "What would be the best vegan option?",
      "How do you decide what's a good meal for me?", 
      "I'm traveling and need to stay on track, what're the best meals for me?",
      "What should I look for in a high-protein meal?",
      "How can I eat healthy at fast food restaurants?",
      "What are the best options for my cutting goals?"
    ];
    
    // Return 3 random suggestions
    return suggestions.sort(() => 0.5 - Math.random()).slice(0, 3);
  }
}

// Export singleton instance
export default new AIService();
