# 🥗 Healthy Foodie - MenuFit Coach

Your personalized healthy menu for every restaurant. Get AI-powered meal recommendations based on your fitness goals and preferences.

![Healthy Foodie App](https://img.shields.io/badge/Platform-iOS%20%7C%20Android-blue) ![React Native](https://img.shields.io/badge/React%20Native-0.74-green) ![Expo](https://img.shields.io/badge/Expo-51-black)

## 📱 Features

### 🎯 **Core Functionality**
- **AI-Powered MenuFit Coach** - Get personalized nutrition advice and meal recommendations
- **Restaurant Photo Capture** - Take photos of restaurants to get instant menu analysis
- **Restaurant Search** - Find restaurants and browse healthy meal options
- **Nutritional Scoring** - Advanced scoring system (45-100) for meal recommendations
- **Macro Tracking** - Detailed protein, carbs, and fat breakdowns
- **User Profiles** - Personalized settings based on goals, activity level, and preferences

### 🤖 **AI Integration**
- **Hugging Face API** - Free AI chat responses for nutrition coaching
- **Contextual Recommendations** - AI considers your fitness goals (cut, bulk, maintain)
- **Smart Fallbacks** - Offline-capable responses when API is unavailable
- **Conversation Memory** - Maintains chat context for better recommendations

### 📊 **Personalization**
- **Complete Onboarding** - 10-step user profiling system
- **Goal-Based Recommendations** - Tailored to cutting, bulking, or maintaining
- **Activity Level Tracking** - From sedentary to very active
- **Dietary Preferences** - Food preferences and allergy management
- **Progress Tracking** - Monitor your nutrition journey

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/healthy-foodie-app.git
   cd healthy-foodie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on device/simulator**
   - Scan QR code with Expo Go app (iOS/Android)
   - Press `i` for iOS simulator
   - Press `a` for Android emulator

## 🏗️ Architecture

### **Tech Stack**
- **Framework**: React Native with Expo
- **Navigation**: React Navigation v6
- **AI Service**: Hugging Face Transformers API
- **State Management**: React Hooks
- **Styling**: StyleSheet with custom theme system
- **Authentication**: Firebase Auth (coming soon)
- **Database**: Firestore (coming soon)

### **Project Structure**
```
src/
├── components/          # Reusable UI components
│   ├── Button.js
│   ├── ChatMessage.js
│   ├── NutritionCircle.js
│   └── ...
├── screens/            # App screens
│   ├── onboarding/     # Onboarding flow
│   ├── HomeScreen.js
│   ├── MenuFitCoachScreen.js
│   └── ...
├── navigation/         # Navigation configuration
├── services/          # API services
│   └── aiService.js
├── constants/         # Theme and constants
│   └── theme.js
└── utils/            # Utility functions
```

## 🎨 Design System

### **Colors**
- **Primary**: `#000000` (Black)
- **Secondary**: `#6B7280` (Gray)
- **Accent**: `#3B82F6` (Blue)
- **Success**: `#10B981` (Green)
- **Warning**: `#F59E0B` (Orange)
- **Error**: `#EF4444` (Red)

### **Typography**
- **Font Family**: System default
- **Sizes**: 12px - 48px scale
- **Weights**: Light (300) to Extra Bold (800)

### **Components**
- **Buttons**: Rounded corners, consistent padding
- **Cards**: Subtle shadows, proper spacing
- **Forms**: Clean inputs with validation states

## 🔧 Configuration

### **Environment Variables**
Create a `.env` file in the root directory:
```
HUGGING_FACE_API_KEY=your_hf_api_key_here
FIREBASE_API_KEY=your_firebase_key_here
FIREBASE_PROJECT_ID=your_project_id_here
```

### **API Keys**
- **Hugging Face**: Free tier available at [huggingface.co](https://huggingface.co)
- **Firebase**: Free tier at [firebase.google.com](https://firebase.google.com)

## 🚀 Deployment

### **Expo Build**
```bash
# Install EAS CLI
npm install -g eas-cli

# Configure build
eas build:configure

# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```

### **App Store Deployment**
1. **iOS**: Submit to App Store Connect
2. **Android**: Upload to Google Play Console

## 🧪 Testing

### **Running Tests**
```bash
npm test
```

### **Manual Testing Checklist**
- [ ] Complete onboarding flow
- [ ] AI chat responses
- [ ] Camera permissions and capture
- [ ] Restaurant search functionality
- [ ] Navigation between screens
- [ ] Profile settings management

## 📊 Performance

### **Optimization Features**
- **Lazy Loading**: Screens loaded on demand
- **Image Optimization**: Compressed assets
- **API Caching**: Reduced network calls
- **Memory Management**: Efficient component lifecycle

### **Metrics**
- **Bundle Size**: ~50MB (with assets)
- **Cold Start**: <3 seconds
- **Navigation**: <200ms transitions

## 🤝 Contributing

### **Development Workflow**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Code Style**
- Use ESLint configuration
- Follow React Native best practices
- Write descriptive commit messages
- Add comments for complex logic

## 🐛 Known Issues

### **Current Limitations**
- AI responses limited by Hugging Face free tier
- Mock restaurant data (real API integration coming)
- Camera feature requires device testing
- Push notifications not yet implemented

### **Roadmap**
- [ ] Real restaurant data integration
- [ ] Push notifications
- [ ] Social media sharing
- [ ] Offline mode
- [ ] Advanced analytics
- [ ] Multi-language support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Harry Zhang** - Project Creator & Lead Developer
- **AI Assistant** - Development Partner

## 📞 Support

### **Getting Help**
- **Issues**: [GitHub Issues](https://github.com/yourusername/healthy-foodie-app/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/healthy-foodie-app/discussions)
- **Email**: support@healthyfoodie.app

### **Documentation**
- **API Docs**: Coming soon
- **User Guide**: In-app onboarding
- **Developer Guide**: This README

## 🙏 Acknowledgments

- **Expo Team** - Amazing React Native framework
- **Hugging Face** - Free AI model hosting
- **React Navigation** - Smooth navigation system
- **Open Source Community** - Inspiration and tools

---

**Made with ❤️ for healthy eating and better nutrition choices**

*Last updated: January 2025*
