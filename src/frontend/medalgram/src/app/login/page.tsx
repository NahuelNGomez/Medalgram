"use client";
import NavegationBar from "@/components/NavegationBar";
import NavegationBarLogged from "@/components/NavegationBarLogged";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loginMock } from "@/objects/mocks/mock";
import signIn, { getUserFromDb } from "@/firebase/auth/signIn";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [notification, setNotification] = useState("");
  const [logged, setLogged] = useState(false);
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      setNotification("Por favor, complete todos los campos.");
      return;
    }

    const { result, error } = await signIn(formData.email, formData.password);

    if (error) {
      //if (error.code === 'auth/invalid-login-credentials'){
      alert("Invalid Login Credentials");
      return;
    }

    // Hacemos un post al db con Email y UID para obtener el usuario.

    if (result !== null) {
      const user = await getUserFromDb(formData.email, result?.user.uid);

      console.log("El usuario obtenido es: ", user);
    }

    loginMock(router, result);
  };

  useEffect(() => {
    if (document === undefined) return;
    if (document.cookie !== "token=null" && document.cookie !== "") {
      setLogged(true);
    }
  }, []);

  return (
    <main className="flex flex-col justify-center items-center">
      {logged === true ? <NavegationBarLogged /> : <NavegationBar />}
      <div className="w-full max-w-xl mt-4">
        <form className="bg-dark2/50 shadow-md rounded-3xl pt-6 mb-4 ">
          <div className="flex justify-center items-center">
            <h2 className="text-white my-4 text-3xl">Inicio de Sesión</h2>
          </div>
          <div className="mb-4 px-8 ">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={formData.email}
              onChange={handleInputChange}
              name="email"
              className="required shadow appearance-none bg-dark3/80 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
              id="email"
              type="text"
              placeholder="Introduce tu email"
            />
          </div>
          <div className="mb-6 px-8 ">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              value={formData.password}
              onChange={handleInputChange}
              name="password"
              className="required shadow appearance-none bg-dark3/80 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
              id="password"
              type="password"
              placeholder="Introduce tu contraseña"
            />
          </div>
          <div className="flex items-center justify-between px-8">
            <a
              className="inline-block align-baseline text-sm underline text-gray-400 hover:text-white"
              href="/signup"
            >
              Registrarse
            </a>
            <a
              className="inline-block align-baseline underline text-sm text-gray-400 hover:text-white"
              href="#"
            >
              Recuperar contraseña
            </a>
          </div>
          {notification === "" ? (
            ""
          ) : (
            <div
              className="alert alert-danger text-red-500 text-xs italic pt-2 mx-8"
              role="alert"
              dangerouslySetInnerHTML={{ __html: notification }}
            />
          )}
          <div className="w-full pt-5">
            <button
              onClick={handleLogin}
              className="w-full bg-white rounded-b-3xl hover:bg-blue-700 text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 BugHunters. All rights reserved.
        </p>
      </div>
    </main>
  );
}
