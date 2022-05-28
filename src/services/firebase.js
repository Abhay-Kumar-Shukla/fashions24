// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOnPW99J5r2Ys1aHj7wkTspLJBPD31KiQ",

  authDomain: "smartadvertising-fcbb4.firebaseapp.com",

  projectId: "smartadvertising-fcbb4",

  storageBucket: "smartadvertising-fcbb4.appspot.com",

  messagingSenderId: "173461602769",

  appId: "1:173461602769:web:f859a3656c6a76de18e0f0",

  measurementId: "G-MET7Y2Q72B"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const auth = getAuth(app);

export const db = getFirestore(app);
