import { signInAnonymously } from "firebase/auth";
import { auth } from "./config";

export const loginAnonymous = async () => {
  try {
    const result = await signInAnonymously(auth);
    return result.user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};