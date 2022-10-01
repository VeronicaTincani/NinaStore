import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA_8-za3MTbT_Zs_TAx10zQ756nzvsA83A",
    authDomain: "nina-store-9012a.firebaseapp.com",
    projectId: "nina-store-9012a",
    storageBucket: "nina-store-9012a.appspot.com",
    messagingSenderId: "436441928109",
    appId: "1:436441928109:web:afc327c7ebb783e8acd124"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);