import {
  collection,
  getDocs
}
from "firebase/firestore";

import { db }
from "./firebase";

export const getCarbonRecords =
async () => {

  const snapshot =
    await getDocs(
      collection(
        db,
        "carbonRecords"
      )
    );

  return snapshot.docs.map(
    doc => ({
      id: doc.id,
      ...doc.data()
    })
  );

};