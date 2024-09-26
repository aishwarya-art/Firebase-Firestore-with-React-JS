// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import Firebase Auth
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCxxbJbox-aSJFH-vqCNBoQAoDNpgHMhRg",
  authDomain: "react-expo-api.firebaseapp.com",
  projectId: "react-expo-api",
  storageBucket: "react-expo-api.appspot.com",
  messagingSenderId: "1007856657120",
  appId: "1:1007856657120:web:c0c7145df3af4f12b72685",
  measurementId: "G-0WTH8DG04J"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Initialize Firebase Authentication
const db = getFirestore(app);

export { db, auth };
