import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

import { auth } from "../services/firebase";

function assertEmailPassword(email, password) {
  if (typeof email !== "string" || !email.trim()) {
    throw new Error("Email is required.");
  }
  if (typeof password !== "string" || !password) {
    throw new Error("Password is required.");
  }
}

export const signupUser = async (email, password) => {
  assertEmailPassword(email, password);

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email.trim(),
    password
  );

  return userCredential.user;
};

export const loginUser = async (email, password) => {
  assertEmailPassword(email, password);

  const userCredential = await signInWithEmailAndPassword(
    auth,
    email.trim(),
    password
  );

  return userCredential.user;
};

export const logoutUser = async () => {
  await signOut(auth);
};

// Optional: Google login feature
export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  const result = await signInWithPopup(auth, provider);
  return result.user;
};

