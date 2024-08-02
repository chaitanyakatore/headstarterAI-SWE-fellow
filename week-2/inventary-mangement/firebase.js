// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR-0_91KkvI7M8M_wtc3HFF_VoJTCRwdo",
  authDomain: "inventory-mangement-e517f.firebaseapp.com",
  projectId: "inventory-mangement-e517f",
  storageBucket: "inventory-mangement-e517f.appspot.com",
  messagingSenderId: "427100725008",
  appId: "1:427100725008:web:6bf78eaeb959fc35f34f95",
  measurementId: "G-TXWCJEKCLH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };
