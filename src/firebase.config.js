// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
export default app