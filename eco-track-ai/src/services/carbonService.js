import {
  collection,
  addDoc
} from "firebase/firestore";

import { db } from "./firebase";

export const saveCarbonRecord =
async (record) => {

  return await addDoc(
    collection(
      db,
      "carbonRecords"
    ),
    record
  );

};