// Import the functions you need from the SDKs you need
// importo la sesion de firebase y la de firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH6_AY67okFUUvbvln8Kqa7dpTqH7QtUo",
  authDomain: "electronic-house-78b1f.firebaseapp.com",
  projectId: "electronic-house-78b1f",
  storageBucket: "electronic-house-78b1f.appspot.com",
  messagingSenderId: "243731038677",
  appId: "1:243731038677:web:1b5895c910718df4eefd5c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
