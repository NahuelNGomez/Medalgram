import { use, useEffect, useState } from "react";
import firebaseApp from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const TEST_BASE_URL = "http://localhost:8080/";
const BASE_URL = "https://grupo-3.2023.tecnicasdedisenio.com.ar/api/";
const endPoint = "api/accounts";

// Get the authentication instance using the Firebase app
const auth = getAuth(firebaseApp);

const registerIntoDb = async (
  name = "ANONIM_ADMIN",
  email: string,
  token: string
) => {
  const url = BASE_URL + endPoint;

  console.log("URL es: " + url);

  const datos = {
    token: token,
    name: name,
    email: email,
    encryptedPass: token,
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
