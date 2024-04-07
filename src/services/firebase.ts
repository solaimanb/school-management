// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc2lZkdLYPcQg4HGAm3mPyIBhvGZmnbXo",
  authDomain: "schoolmanagementtyp.firebaseapp.com",
  projectId: "schoolmanagementtyp",
  storageBucket: "schoolmanagementtyp.appspot.com",
  messagingSenderId: "135943913159",
  appId: "1:135943913159:web:fa3c459ea105ba625988e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;