// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxhvZwB-WubBwYfoXqytE81AfJx5bJP6g",
  authDomain: "react-auth-d5418.firebaseapp.com",
  projectId: "react-auth-d5418",
  storageBucket: "react-auth-d5418.appspot.com",
  messagingSenderId: "178041299698",
  appId: "1:178041299698:web:0b79c864303e2b844a666b",
  measurementId: "G-4MRTCLZT1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;