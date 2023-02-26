// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFNMSby-VzwBw38Uf4DU-HHgnuiJJUaM4",
  authDomain: "hackathone-565fc.firebaseapp.com",
  projectId: "hackathone-565fc",
  storageBucket: "hackathone-565fc.appspot.com",
  messagingSenderId: "610480833961",
  appId: "1:610480833961:web:75741aace6d2a11321f0b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
