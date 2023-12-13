// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjv_77S2eXGYaCOXXumtHd9J1nYTwyrQc",
  authDomain: "login-register-6df9e.firebaseapp.com",
  projectId: "login-register-6df9e",
  storageBucket: "login-register-6df9e.appspot.com",
  messagingSenderId: "1089373614531",
  appId: "1:1089373614531:web:9b7f7b12dbb0228250cd76",
  measurementId: "G-9JPP416SQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;