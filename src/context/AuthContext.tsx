import React, { createContext, ReactNode, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  User,
  sendEmailVerification,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  registerWithEmail: (
    email: string,
    password: string,
    isCraftsman: boolean,
    additionalData?: { name: string; telephone: string }
  ) => Promise<void>;
  registerWithGoogle: (isCraftsman: boolean) => Promise<void>;
  registerWithFacebook: (isCraftsman: boolean) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user);
      setUser(user);
      setLoading(false);

      if (user) {
        localStorage.setItem("user-data", JSON.stringify(user));
      } else {
        localStorage.removeItem("user-data");
      }
    });
    return unsubscribe;
  }, []);

  const loginWithEmail = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (!userCredential.user.emailVerified) {
        await sendEmailVerification(userCredential.user);
        throw new Error(
          "Please verify your email first. A new verification link has been sent."
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error("Password reset error:", error);
      throw error;
    }
  };

  const registerWithEmail = async (
    email: string,
    password: string,
    isCraftsman: boolean,
    additionalData?: { name: string; telephone: string }
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (additionalData?.name) {
        await updateProfile(userCredential.user, {
          displayName: additionalData.name,
        });
      }

      await sendEmailVerification(userCredential.user);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const registerWithGoogle = async (isCraftsman: boolean) => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Google sign-in error:", error);
      throw error;
    }
  };

  const registerWithFacebook = async (isCraftsman: boolean) => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Facebook sign-in error:", error);
      throw error;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
        loginWithEmail,
        resetPassword,
        registerWithEmail,
        registerWithGoogle,
        registerWithFacebook,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
