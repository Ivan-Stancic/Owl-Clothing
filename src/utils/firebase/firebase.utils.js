import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBZhfMw966QT4d_CL1qCOM0UEdmhm_z7Og",
    authDomain: "owl-clothing-db-918c3.firebaseapp.com",
    projectId: "owl-clothing-db-918c3",
    storageBucket: "owl-clothing-db-918c3.appspot.com",
    messagingSenderId: "115109077335",
    appId: "1:115109077335:web:54350f77443cbaa69d9e12"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);