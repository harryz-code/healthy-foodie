import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Image
} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { COLORS, FONTS, SPACING, BORDER_RADIUS } from '../constants/theme';
import userDataService from '../services/userDataService';
import { RESTAURANT_DATABASE, getMenuItemsByGoal } from '../data/restaurantDatabase';

const RestaurantCameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [isProcessing, setIsProcessing] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [userData, setUserData] = useState(null);
  const cameraRef = useRef(null);

  // Load user data for personalized recommendations
  useEffect(() => {
    const loadUserData = async () => {
      const data = await userDataService.loadUserData();
      setUserData(data);
    };
    loadUserData();
  }, []);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        setIsProcessing(true);
        const photo = await cameraRef.current.takePictureAsync();
        setCapturedImage(photo.uri);
        
        // Process the image to identify restaurant
        const restaurantData = await processRestaurantImage(photo.uri);
        
        // Navigate to restaurant results with the processed data
        navigation.navigate('RestaurantMenu', { 
          restaurantPhoto: photo.uri,
          restaurantName: restaurantData.name,
          restaurantData: restaurantData,
          userGoal: userData?.goal
        });
      } catch (error) {
        Alert.alert('Error', 'Failed to take picture');
      } finally {
        setIsProcessing(false);
        setCapturedImage(null);
      }
    }
  };

  // Process restaurant image (mock AI processing - in production would use Google Vision API)
  const processRestaurantImage = async (imageUri) => {
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Use real restaurant database
    const availableRestaurants = Object.values(RESTAURANT_DATABASE);
    
    // Randomly select a restaurant (in production, this would be actual image recognition)
    const detectedRestaurant = availableRestaurants[Math.floor(Math.random() * availableRestaurants.length)];
    
    // Get menu items optimized for user's goal
    const optimizedMenuItems = getMenuItemsByGoal(detectedRestaurant, userData?.goal);
    
    // Convert menu items to the expected format and add personalized scoring
    const healthyOptions = optimizedMenuItems.slice(0, 5).map(item => {
      let personalizedScore = item.healthScore;
      
      // Adjust score based on user's goal
      if (userData?.goal === 'cut') {
        if (item.calories < 400) personalizedScore += 10;
        if (item.protein > 25) personalizedScore += 8;
        if (item.fat < 15) personalizedScore += 5;
      } else if (userData?.goal === 'bulk') {
        if (item.calories > 500) personalizedScore += 10;
        if (item.protein > 30) personalizedScore += 12;
        if (item.carbs > 40) personalizedScore += 5;
      }
      
      // Filter by dietary preferences
      if (userData?.foodPreferences?.includes('vegetarian') && !item.tags?.vegetarian) {
        personalizedScore -= 20;
      }
      if (userData?.allergies?.some(allergy => item.allergens.includes(allergy))) {
        personalizedScore -= 30; // Heavily penalize allergens
      }
      
      return {
        id: item.id,
        name: item.name,
        category: item.category,
        calories: item.calories,
        protein: item.protein,
        carbs: item.carbs,
        fat: item.fat,
        score: Math.max(0, Math.min(100, personalizedScore)),
        price: item.price,
        ingredients: item.ingredients,
        allergens: item.allergens
      };
    }).sort((a, b) => b.score - a.score);
    
    return {
      ...detectedRestaurant,
      healthyOptions,
      detectedVia: 'camera', // Track how restaurant was found
      personalizedForGoal: userData?.goal || 'general'
    };
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      navigation.navigate('RestaurantResults', { photo: result.assets[0] });
    }
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.noPermissionText}>No access to camera</Text>
        <TouchableOpacity style={styles.galleryButton} onPress={pickImage}>
          <Text style={styles.galleryButtonText}>Choose from Gallery</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
      </View>

      {/* Instructions */}
      <View style={styles.instructionsContainer}>
        <View style={styles.cameraIcon}>
          <Text style={styles.cameraEmoji}>📷</Text>
        </View>
        <Text style={styles.title}>Take a photo of the restaurant</Text>
        <Text style={styles.subtitle}>
          Get personalized meal suggestions based on your goals and preferences.
        </Text>
        <Text style={styles.note}>
          (make sure restaurant name/logo is visible)
        </Text>
        
        {/* Down arrows */}
        <View style={styles.arrowsContainer}>
          <Text style={styles.arrow}>⌄</Text>
          <Text style={styles.arrow}>⌄</Text>
        </View>
      </View>

      {/* Camera */}
      <View style={styles.cameraContainer}>
        <Camera 
          style={styles.camera} 
          type={type}
          ref={cameraRef}
        >
          <View style={styles.cameraOverlay}>
            {/* Camera frame overlay could go here */}
          </View>
          
          {/* Processing Overlay */}
          {isProcessing && (
            <View style={styles.processingOverlay}>
              <View style={styles.processingContent}>
                <ActivityIndicator size="large" color={COLORS.primary} />
                <Text style={styles.processingText}>Identifying restaurant...</Text>
                <Text style={styles.processingSubtext}>
                  {userData?.goal ? `Finding ${userData.goal === 'cut' ? 'cutting' : userData.goal === 'bulk' ? 'bulking' : 'healthy'} options` : 'Analyzing menu options'}
                </Text>
                {capturedImage && (
                  <Image source={{ uri: capturedImage }} style={styles.capturedPreview} />
                )}
              </View>
            </View>
          )}
        </Camera>
      </View>

      {/* Bottom Controls */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity style={styles.takePhotoButton} onPress={takePicture}>
          <Text style={styles.takePhotoText}>Take Photo</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('RestaurantSearch')}>
          <Text style={styles.searchButtonText}>Search by name</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
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
  instructionsContainer: {
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xl,
  },
  cameraIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.backgroundGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.lg,
  },
  cameraEmoji: {
    fontSize: 40,
  },
  title: {
    fontSize: FONTS.xl,
    fontWeight: FONTS.bold,
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  subtitle: {
    fontSize: FONTS.base,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: SPACING.sm,
  },
  note: {
    fontSize: FONTS.sm,
    color: COLORS.textTertiary,
    textAlign: 'center',
    marginBottom: SPACING.lg,
  },
  arrowsContainer: {
    alignItems: 'center',
  },
  arrow: {
    fontSize: FONTS.xl,
    color: COLORS.textTertiary,
    marginBottom: -8,
  },
  cameraContainer: {
    flex: 1,
    marginHorizontal: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
  },
  camera: {
    flex: 1,
  },
  cameraOverlay: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  controlsContainer: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xl,
    gap: SPACING.md,
  },
  takePhotoButton: {
    backgroundColor: COLORS.buttonPrimary,
    borderRadius: BORDER_RADIUS.xl,
    paddingVertical: SPACING.lg,
    alignItems: 'center',
  },
  takePhotoText: {
    color: COLORS.buttonText,
    fontSize: FONTS.base,
    fontWeight: FONTS.semibold,
  },
  searchButton: {
    backgroundColor: COLORS.buttonPrimary,
    borderRadius: BORDER_RADIUS.xl,
    paddingVertical: SPACING.lg,
    alignItems: 'center',
  },
  searchButtonText: {
    color: COLORS.buttonText,
    fontSize: FONTS.base,
    fontWeight: FONTS.semibold,
  },
  noPermissionText: {
    fontSize: FONTS.base,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: SPACING.lg,
  },
  galleryButton: {
    backgroundColor: COLORS.buttonSecondary,
    borderRadius: BORDER_RADIUS.xl,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xl,
    alignItems: 'center',
  },
  galleryButtonText: {
    color: COLORS.buttonTextSecondary,
    fontSize: FONTS.base,
    fontWeight: FONTS.semibold,
  },
  processingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  processingContent: {
    alignItems: 'center',
    padding: SPACING.xl,
  },
  processingText: {
    fontSize: 18,
    color: COLORS.white,
    fontFamily: 'System',
    fontWeight: '600',
    marginTop: SPACING.md,
    textAlign: 'center',
  },
  processingSubtext: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontFamily: 'System',
    marginTop: SPACING.sm,
    textAlign: 'center',
  },
  capturedPreview: {
    width: 120,
    height: 120,
    borderRadius: BORDER_RADIUS.md,
    marginTop: SPACING.lg,
  },
});

export default RestaurantCameraScreen;
