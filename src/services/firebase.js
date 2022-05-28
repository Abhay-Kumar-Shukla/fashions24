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
  apiKey: "AIzaSyBqHrNjy4Jq2Y9z9B__m9blxqqsNfRrOes",

  authDomain: "fashion24-6f9fd.firebaseapp.com",

  projectId: "fashion24-6f9fd",

  storageBucket: "fashion24-6f9fd.appspot.com",

  messagingSenderId: "416850433391",

  appId: "1:416850433391:web:cd3c91d105927f7fc1449a",

  measurementId: "G-3J7G8CFGD1"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const auth = getAuth(app);

export const db = getFirestore(app);
