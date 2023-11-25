"use client";
import NavegationBar from "@/components/NavegationBar";
import NavegationBarLogged from "@/components/NavegationBarLogged";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdminMock, loginMock } from "@/objects/mocks/mock";
import signIn, {
  getUserFromDb,
  sendResetPasswordEmail,
} from "@/firebase/auth/signIn";

export default function Login() {
  const [formData, setFormData] = useState({ email: "" });
  const [notification, setNotification] = useState("");
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordRecovery = async (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();
    if (!formData.email) {
      setNotification("Por favor, complete todos los campos.");
      return;
    }

    await sendResetPasswordEmail(formData.email);

    alert("Se ha enviado un correo para restablecer la contraseña.");
    router.push("/");
  };

  return (
    <main className="flex flex-col justify-center items-center">
      <div className="w-full max-w-xl mt-4">
        <form className="bg-dark2/50 shadow-md rounded-3xl pt-6 mb-4 ">
          <div className="flex justify-center items-center">
            <h2 className="text-white my-4 text-3xl">Recuperar Contraseña</h2>
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
              onClick={handlePasswordRecovery}
              className="w-full bg-white rounded-b-3xl hover:bg-blue-700 text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Recuperar Contraseña
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
