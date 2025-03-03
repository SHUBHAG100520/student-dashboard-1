// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAyiIL2qDkQF6LnBywcdpTw-INkTOmhbCU",
    authDomain: "project-9ecf7.firebaseapp.com",
    projectId: "project-9ecf7",
    storageBucket: "project-9ecf7.firebasestorage.app",
    messagingSenderId: "752149299113",
    appId: "1:752149299113:web:a186d8ca4369ca3c210eb8",
    measurementId: "G-C3Z41BLT14"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  
  export { auth, db };