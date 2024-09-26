import { db } from './firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

// Create Data
export const createData = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'Expenses'), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Read Data
export const readData = async () => {
  const querySnapshot = await getDocs(collection(db, 'Expenses'));
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
};

// Update Data
export const updateData = async (id, updatedData) => {
  try {
    const docRef = doc(db, 'Expenses', id);
    await updateDoc(docRef, updatedData);
    console.log("Document updated with ID: ", id);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

// Delete Data
export const deleteData = async (id) => {
  try {
    const docRef = doc(db, 'Expenses', id);
    await deleteDoc(docRef);
    console.log("Document deleted with ID: ", id);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};
