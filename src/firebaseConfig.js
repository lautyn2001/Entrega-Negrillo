import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2h4sPpKVY6CFiBmZCSh5qHxghynAiB9E",
  authDomain: "star-wars-shop-56bc5.firebaseapp.com",
  projectId: "star-wars-shop-56bc5",
  storageBucket: "star-wars-shop-56bc5.firebasestorage.app",
  messagingSenderId: "303827411758",
  appId: "1:303827411758:web:fe9d3d89766570598ad0bf",
  measurementId: "G-4YDW26ZJTG"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);