// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaJAfh5A0DPsETxyxTK6DHLOs5L8HoQDE",
  authDomain: "recipe-book-11205.firebaseapp.com",
  projectId: "recipe-book-11205",
  storageBucket: "recipe-book-11205.appspot.com",
  messagingSenderId: "120312468948",
  appId: "1:120312468948:web:95eb17d8363b0cf37a7241"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};