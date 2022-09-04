import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIWqjNiiAhpBD0Yju_GmC6S9iItaJuh70",
  authDomain: "carrier-17378.firebaseapp.com",
  databaseURL: "https://carrier-17378-default-rtdb.firebaseio.com",
  projectId: "carrier-17378",
  storageBucket: "carrier-17378.appspot.com",
  messagingSenderId: "673297257723",
  appId: "1:673297257723:web:9b9e0bf72e610db6a98c5e",
  measurementId: "G-63BBC8HBSV",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
