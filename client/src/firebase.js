// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "elayi-estate.firebaseapp.com",
  projectId: "elayi-estate",
  storageBucket: "elayi-estate.appspot.com",
  messagingSenderId: "936790121864",
  appId: "1:936790121864:web:ad83ec907e809bda2c6e3d",
  measurementId: "G-9CCHQ8WMC8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);