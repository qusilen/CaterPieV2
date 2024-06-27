// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAkY9W3hBNkjTGMQ2t208JQsOf1W9mTh1M",
  authDomain: "caterpie-15ddd.firebaseapp.com",
  projectId: "caterpie-15ddd",
  storageBucket: "caterpie-15ddd.appspot.com",
  messagingSenderId: "582024736706",
  appId: "1:582024736706:web:d499734710ed11c235705b",
  measurementId: "G-YC9GF4EFK1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
