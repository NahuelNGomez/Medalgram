import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import firebase_app from "../config";

// Get the authentication instance using the Firebase app
const auth = getAuth(firebase_app);

const BASE_URL = "http://localhost:8080/api/";
const endPoint = "user";

export default async function signIn(email: string, password: string) {
  let result = null;
  let error = null;

  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

// Obtengo el usuario desde el back
//
const getFromDb = async (email: string, token: string) => {
  let res = null;

  const url = BASE_URL + endPoint;

  try {
    res = await fetch(url);
  } catch (err) {
    console.error(err);
  }

  return res;
};

export async function getUserFromDb(email: string, token: string | undefined) {
  if (token === undefined) return null;

  try {
    let result = await getFromDb(email, token);

    if (result !== null && result.status === 200) {
      console.log("User accessed from DB");

      let json = await result.json();

      return json;
    } else {
      console.error(
        result?.status !== 200
          ? "Error in DB: Response status != 200"
          : "Error in SignUp: Call a Dev!"
      );
    }
  } catch (err) {
    console.error(err);
  }

  return null;
}
