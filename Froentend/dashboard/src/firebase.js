import { initializeApp } from "firebase/app";
import { getAuth, 
   createUserWithEmailAndPassword, 
   updateProfile, 
   onAuthStateChanged, 
   signInWithEmailAndPassword, 
   signOut 
   } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyAYf9_k9gdBceXKgFNgc51lJeVFGAyojBM",
   authDomain: "careermap-cc15d.firebaseapp.com",
   projectId: "careermap-cc15d",
   storageBucket: "careermap-cc15d.appspot.com",
   messagingSenderId: "730876029863",
   appId: "1:730876029863:web:c6f5a5ae4c587f9bfee482",
   measurementId: "G-P4YN12V2T1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth,
   createUserWithEmailAndPassword,
   updateProfile,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut };