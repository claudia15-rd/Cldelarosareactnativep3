// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyqv9eQFHPDp8Svr_3JmBHNHreD_VZ8xM",
  authDomain: "equipo-basket-frontenders.firebaseapp.com",
  databaseURL: "https://equipo-basket-frontenders-default-rtdb.firebaseio.com",
  projectId: "equipo-basket-frontenders",
  storageBucket: "equipo-basket-frontenders.appspot.com",
  messagingSenderId: "299055623733",
  appId: "1:299055623733:web:e146e82f17c8e006244b7c"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;