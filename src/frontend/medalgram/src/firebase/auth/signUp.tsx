import { use, useEffect, useState } from "react";
import firebaseApp from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const BASE_URL = "http://localhost:8080/api/";
const endPoint = "accounts";

// Get the authentication instance using the Firebase app
const auth = getAuth(firebaseApp);

const registerIntoDb = async (
  name = "ANONIM_ADMIN",
  email: string,
  id: string
) => {
  const url = BASE_URL + endPoint;

  console.log("URL es: " + url);

  const datos = {
    id: 2,
    name: name,
    email: email,
    encryptedPass: id,
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    let json = await res.json();

    return json;
  } catch (err) {
    console.error(err);
  }
  console.log("No se pudo conectar con el back");
};

export async function registerInDb(email: string, id: string) {
  try {
    console.log("Antes de pegarle");
    const result = await registerIntoDb(email.split("@")[0], email, id);

    console.log(result);
    console.log("Despues de pegarle");
    if (result !== null && result.status === 200) {
      console.log("User created in DB");
    } else {
      console.error(
        result?.status !== 200
          ? "Error in DB: Response status != 200"
          : "Error in SignUp: Call a Dev!"
      );
    }
    return result;
  } catch (err) {
    console.error(err);
  }
}

export default async function signUp(email: string, password: string) {
  let result = null,
    error = null;

  try {
    console.log("signUp");
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
