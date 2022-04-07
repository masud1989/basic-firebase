// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoLNImsb5_XmU6Dts0_fcoUYgKBQg_AsQ",
  authDomain: "basic-firebase-c8bb3.firebaseapp.com",
  projectId: "basic-firebase-c8bb3",
  storageBucket: "basic-firebase-c8bb3.appspot.com",
  messagingSenderId: "809304246646",
  appId: "1:809304246646:web:11d477be3aa5aa0d5a9257",
  measurementId: "G-28E01SBXCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;