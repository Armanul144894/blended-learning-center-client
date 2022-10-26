import React from "react";
import { useState } from "react";
import { createContext } from "react";
import app from "../firebase/firebase.config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const signIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = { user, signIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
