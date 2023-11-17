'use client';

import NavegationBar from "@/components/NavegationBar";
import NavegationBarLogged from "@/components/NavegationBarLogged";
import React, { SyntheticEvent, useEffect, useState } from "react";

export default function Signup() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [notification, setNotification] = useState('')
    const [logged, setLogged] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = () => {
        if (formData.username && formData.password) {
            setNotification('Se enviaría una request.')
        } else {
            setNotification('Por favor, complete todos los campos.')
        }
    };


    useEffect(() => {
        if (document === undefined) return;
        if (document.cookie === 'username=True') {
          setLogged(true);
        }
      },[])

    return (
        <main className="flex flex-col justify-center items-center">
            {
                logged === true ? <NavegationBarLogged /> : <NavegationBar />
            }
            <div className="w-full max-w-xl mt-4">

                <form className="bg-dark2/50 shadow-md rounded-3xl pt-6 mb-4">
                    <div className="flex justify-center items-center">
                        <h2 className="text-white my-4 text-3xl">Crear Cuenta</h2>
                    </div>
                    <div className="mb-4 px-8 ">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input
                            value={formData.username}
                            onChange={handleInputChange}
                            name="username"
                            className="required shadow appearance-none bg-dark3/80 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
                            id="username"
                            type="text"
                            placeholder="Introduce tu email"
                        />
                    </div>
                    <div className="mb-6 px-8 ">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
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
                        <a className="inline-block align-baseline text-sm underline text-gray-400 hover:text-white" href="/login">
                            Iniciar Sesión
                        </a>
                        <a className="inline-block align-baseline underline text-sm text-gray-400 hover:text-white" href="#">
                            Términos y Condiciones
                        </a>
                    </div>
                    {notification === '' ? '' : <div className="alert alert-danger text-red-500 text-xs italic pt-2 mx-8" role="alert" dangerouslySetInnerHTML={{ __html: notification }} />}
                    <div className="w-full pt-5"><button onClick={handleLogin} className="w-full bg-white rounded-b-3xl hover:bg-blue-700 text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="button">
                        Iniciar Sesión
                    </button></div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2023 BugHunters. All rights reserved.
                </p>
            </div>
        </main>
    )
}