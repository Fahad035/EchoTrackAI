import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc
} from "firebase/firestore";

import { db } from "./firebase";

const goalsRef =
  collection(db, "goals");

export const addGoal = async (
  goal
) => {

  await addDoc(
    goalsRef,
    goal
  );
};

export const getGoals = async () => {

  const snapshot =
    await getDocs(goalsRef);

  return snapshot.docs.map(
    (doc) => ({
      id: doc.id,
      ...doc.data()
    })
  );
};

export const updateGoal = async (
  id,
  completed
) => {

  await updateDoc(
    doc(db, "goals", id),
    {
      completed
    }
  );
};

export const deleteGoal = async (
  id
) => {

  await deleteDoc(
    doc(db, "goals", id)
  );
};