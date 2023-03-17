import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDfoI2LPoqFRYu--T-8reaic1guOfLH1Bs",
  authDomain: "chatapp-92e4c.firebaseapp.com",
  projectId: "chatapp-92e4c",
  storageBucket: "chatapp-92e4c.appspot.com",
  messagingSenderId: "659359352003",
  appId: "1:659359352003:web:d9b70887d8f2c426d4ce76"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
