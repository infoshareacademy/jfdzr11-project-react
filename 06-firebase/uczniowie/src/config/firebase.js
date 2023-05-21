// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcwBxbcbhltkesb3zccAJu4NIL0M5bK0I",
  authDomain: "uczniowie-v2.firebaseapp.com",
  projectId: "uczniowie-v2",
  storageBucket: "uczniowie-v2.appspot.com",
  messagingSenderId: "499207959363",
  appId: "1:499207959363:web:dd7fda0a66c8f8ea75b5f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);