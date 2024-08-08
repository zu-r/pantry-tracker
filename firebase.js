// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkTdRZKbQnT-5KpbuPT4ah0WAk8BTsU5Y",
  authDomain: "inventory-management-3b605.firebaseapp.com",
  projectId: "inventory-management-3b605",
  storageBucket: "inventory-management-3b605.appspot.com",
  messagingSenderId: "805712326264",
  appId: "1:805712326264:web:b2ed54cac0cd3ca325478d",
  measurementId: "G-W2EV55SL9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };