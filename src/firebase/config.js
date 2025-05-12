import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

import { getAuth } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAHDgpQwfX1IXrg65pJdQRo7fbRVs4naQ",
  authDomain: "hola-708d2.firebaseapp.com",
  projectId: "hola-708d2",
  storageBucket: "hola-708d2.firebasestorage.app",
  messagingSenderId: "326255159928",
  appId: "1:326255159928:web:c22a651cb4b5f95caf9b8d",
  measurementId: "G-VHNNRKHD03",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
