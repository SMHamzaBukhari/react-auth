// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrViYS2tng8a59ta8Qnq0MD8eJ-EBPM24",
  authDomain: "reactauthentication-cdb75.firebaseapp.com",
  databaseURL: "https://reactauthentication-cdb75-default-rtdb.firebaseio.com",
  projectId: "reactauthentication-cdb75",
  storageBucket: "reactauthentication-cdb75.appspot.com",
  messagingSenderId: "926140973975",
  appId: "1:926140973975:web:9c03f65cd60dcf7bb27ad2",
  measurementId: "G-2W8C849W7H"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;