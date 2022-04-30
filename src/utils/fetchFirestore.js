import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import db from "./firebaseConfig";

export const fetchFromFirestore = async (idCategory) => {
  let q;
  if (idCategory) {
    q = query(
      collection(db, "products"),
      where("categoryId", "==", idCategory)
    );
    console.log(q);
  } else {
    q = query(collection(db, "products"), orderBy("name"));
  }

  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(), //id+resto de la informacion
  }));
  console.log(dataFromFirestore);
  return dataFromFirestore;
};

export const fetchFirestoreOne = async (idItem) => {
  const docRef = doc(db, "products", idItem);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: doc.id, ...docSnap.data() };
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};
