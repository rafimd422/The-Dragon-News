import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVob3S9XNP5aU3gsvr8x3GlMnjazDJlcQ",
  authDomain: "dragon-news-4cb07.firebaseapp.com",
  projectId: "dragon-news-4cb07",
  storageBucket: "dragon-news-4cb07.appspot.com",
  messagingSenderId: "592003346617",
  appId: "1:592003346617:web:297f8306f032e43cef2b68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth