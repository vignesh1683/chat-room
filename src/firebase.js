// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbA8fjxlNK5Z0new4rmVJCNZ1QVespnlg",
  authDomain: "chat-app-5df3f.firebaseapp.com",
  projectId: "chat-app-5df3f",
  storageBucket: "chat-app-5df3f.appspot.com",
  messagingSenderId: "913622010080",
  appId: "1:913622010080:web:e28d4d053032e8e48ae885",
  measurementId: "G-C3X2M1KV8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);