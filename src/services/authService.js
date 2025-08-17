// Authentication service for user management
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithCredential,
  sendPasswordResetEmail
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';

class AuthService {
  constructor() {
    this.currentUser = null;
    this.authStateListeners = [];
    
    // Listen for auth state changes
    onAuthStateChanged(auth, (user) => {
      this.currentUser = user;
      this.notifyAuthStateListeners(user);
    });
  }

  // Auth state management
  addAuthStateListener(callback) {
    this.authStateListeners.push(callback);
    // Immediately call with current state
    callback(this.currentUser);
  }

  removeAuthStateListener(callback) {
    this.authStateListeners = this.authStateListeners.filter(
      listener => listener !== callback
    );
  }

  notifyAuthStateListeners(user) {
    this.authStateListeners.forEach(callback => callback(user));
  }

  // Email/Password Authentication
  async signUpWithEmail(email, password, userData = {}) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile
      await updateProfile(user, {
        displayName: userData.displayName || 'Healthy Foodie User'
      });

      // Create user document in Firestore
      await this.createUserDocument(user.uid, {
        email: user.email,
        displayName: user.displayName,
        createdAt: new Date().toISOString(),
        ...userData
      });

      return { success: true, user };
    } catch (error) {
      console.error('Sign up error:', error);
      return { success: false, error: error.message };
    }
  }

  async signInWithEmail(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, user: userCredential.user };
    } catch (error) {
      console.error('Sign in error:', error);
      return { success: false, error: error.message };
    }
  }

  // Google Sign In (placeholder - requires additional setup)
  async signInWithGoogle() {
    try {
      // This would require Google Sign-In setup
      // For now, return a placeholder response
      return { 
        success: false, 
        error: 'Google Sign-In not configured yet. Please use email/password.' 
      };
    } catch (error) {
      console.error('Google sign in error:', error);
      return { success: false, error: error.message };
    }
  }

  // Apple Sign In (placeholder - requires additional setup)
  async signInWithApple() {
    try {
      // This would require Apple Sign-In setup
      // For now, return a placeholder response
      return { 
        success: false, 
        error: 'Apple Sign-In not configured yet. Please use email/password.' 
      };
    } catch (error) {
      console.error('Apple sign in error:', error);
      return { success: false, error: error.message };
    }
  }

  // Password Reset
  async resetPassword(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true };
    } catch (error) {
      console.error('Password reset error:', error);
      return { success: false, error: error.message };
    }
  }

  // Sign Out
  async signOut() {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error) {
      console.error('Sign out error:', error);
      return { success: false, error: error.message };
    }
  }

  // User Data Management
  async createUserDocument(uid, userData) {
    try {
      await setDoc(doc(db, 'users', uid), userData);
      return { success: true };
    } catch (error) {
      console.error('Create user document error:', error);
      return { success: false, error: error.message };
    }
  }

  async getUserData(uid) {
    try {
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (userDoc.exists()) {
        return { success: true, data: userDoc.data() };
      } else {
        return { success: false, error: 'User document not found' };
      }
    } catch (error) {
      console.error('Get user data error:', error);
      return { success: false, error: error.message };
    }
  }

  async updateUserData(uid, userData) {
    try {
      await updateDoc(doc(db, 'users', uid), {
        ...userData,
        updatedAt: new Date().toISOString()
      });
      return { success: true };
    } catch (error) {
      console.error('Update user data error:', error);
      return { success: false, error: error.message };
    }
  }

  // User Profile Management
  async saveUserProfile(profileData) {
    if (!this.currentUser) {
      return { success: false, error: 'No user logged in' };
    }

    try {
      await this.updateUserData(this.currentUser.uid, {
        profile: profileData
      });
      return { success: true };
    } catch (error) {
      console.error('Save user profile error:', error);
      return { success: false, error: error.message };
    }
  }

  async getUserProfile() {
    if (!this.currentUser) {
      return { success: false, error: 'No user logged in' };
    }

    try {
      const result = await this.getUserData(this.currentUser.uid);
      if (result.success) {
        return { success: true, profile: result.data.profile || {} };
      }
      return result;
    } catch (error) {
      console.error('Get user profile error:', error);
      return { success: false, error: error.message };
    }
  }

  // Utility methods
  isLoggedIn() {
    return !!this.currentUser;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getCurrentUserId() {
    return this.currentUser?.uid || null;
  }
}

// Export singleton instance
export default new AuthService();
