// Import Firebase from CDN (No npm install needed)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
// REPLACE THESE WITH YOUR REAL KEYS FROM FIREBASE CONSOLE
const firebaseConfig = {
  apiKey: "AIzaSyB28aM-sFFr8n1CiSiVdUcTkKDlo4b9orY",
  authDomain: "jyoti-landing-pages-2.firebaseapp.com",
  projectId: "jyoti-landing-pages-2",
  storageBucket: "jyoti-landing-pages-2.firebasestorage.app",
  messagingSenderId: "178077790012",
  appId: "1:178077790012:web:196e273540de597fe03839",
  measurementId: "G-1SBBV9T515"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
