
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-38d3e.firebaseapp.com",
  projectId: "fir-38d3e",
  storageBucket: "fir-38d3e.firebasestorage.app",
  messagingSenderId: "855723235188",
  appId: "1:855723235188:web:57b553a7b916592a853e21",
  measurementId: "G-YXSYFJ94YX"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}