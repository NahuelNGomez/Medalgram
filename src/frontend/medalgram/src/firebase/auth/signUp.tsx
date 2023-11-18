import firebaseApp from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


const BASE_URL = "google.com"
const endPoint = "/create_admin"

// Get the authentication instance using the Firebase app
const auth = getAuth(firebaseApp);


const registerIntoDb = async (name = 'ANONIM_ADMIN', email: string, id: string) => {
  let res = null;

  const url = BASE_URL + endPoint;

  const datos = {
    id: id,
    email: email,
    name: name,
  };

  try {
    res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    });
  } catch (err) {
    console.error(err);
  }

  return res;
};

export async function registerInDb(email: string, id: string) {
  
  try{
        const result = await registerIntoDb(email.split("@")[0] , email, id);
        
        if(result !== null && result.status === 200){
          console.log("User created in DB");
        }else{
          console.error(result?.status !== 200 ? "Error in DB: Response status != 200" : "Error in SignUp: Call a Dev!");
        }
  }
  catch(err){
    console.error(err);
  }

  return;
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
