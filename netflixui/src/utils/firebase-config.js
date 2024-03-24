
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANTJV0VmoY8O5skBj508enJmHClyVAVx4",
  authDomain: "react-netflix-clone-5d566.firebaseapp.com",
  projectId: "react-netflix-clone-5d566",
  storageBucket: "react-netflix-clone-5d566.appspot.com",
  messagingSenderId: "783627922779",
  appId: "1:783627922779:web:2c4eb28b04bb5b40c17e7e",
  measurementId: "G-1QBQXFKHSG"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)
