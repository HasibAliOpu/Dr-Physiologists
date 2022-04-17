// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwuGiIVN1__Rq71_qBKHHp2KSVTl3jQPE",
  authDomain: "dr-physiologists.firebaseapp.com",
  projectId: "dr-physiologists",
  storageBucket: "dr-physiologists.appspot.com",
  messagingSenderId: "867324549076",
  appId: "1:867324549076:web:2e55488091aea3d50de841",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
