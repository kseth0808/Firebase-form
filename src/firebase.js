import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRS_flppS7sQ47FcaBcqjxNLFQ3a68t-w",
  authDomain: "form-dcacf.firebaseapp.com",
  projectId: "form-dcacf",
  storageBucket: "form-dcacf.appspot.com",
  messagingSenderId: "138728552470",
  appId: "1:138728552470:web:91a369aa4499dd98841d37",
  measurementId: "G-0TV1SQ9QQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider= new GoogleAuthProvider();

export {app, auth, provider}

