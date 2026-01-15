import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

// Traer todos o por categoría
export const getProducts = async (categoryId) => {
  const productsRef = collection(db, "products");

  const q = categoryId
    ? query(productsRef, where("category", "==", categoryId))
    : productsRef;

  const snapshot = await getDocs(q);

  return snapshot.docs.map(d => ({
    id: d.id,
    ...d.data(),
  }));
};

// Traer uno por ID
export const getProductById = async (id) => {
  const ref = doc(db, "products", id);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};