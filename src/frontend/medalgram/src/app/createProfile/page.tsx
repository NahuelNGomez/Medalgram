'use client';

import React, { use, useEffect } from 'react';
import NavegationBar from "@/components/NavegationBar";
import { useRef, useState } from "react";
import NavegationBarLogged from '@/components/NavegationBarLogged';
import { useRouter } from 'next/navigation';
import { verifyToken } from '@/objects/mocks/functions';

const ERROR_MESSAGE = 'Por favor, complete todos los campos.';

export default function CreateProfile() {
    const router = useRouter();

    const [formData, setFormData] = useState({ username: '', location: '', name: '', age: '', image:'' });
    const [notification, setNotification] = useState('')
    const [logged, setLogged] = useState(false);
    const [token, setToken] = useState<any>(null)

    useEffect(() => {
        if (document === undefined) return;
        if (verifyToken(document.cookie) != false) {
            setToken(verifyToken(document.cookie))
        }
    }, [])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
    };
    useEffect(() => {
        if (document === undefined) return;
        if (verifyToken(document.cookie) != false) {
            console.log("logged")
            setToken(verifyToken(document.cookie));
        }
    }, [])

    const handleLogin = () => {

        if (formData.username && formData.location && formData.name && formData.image && formData.age) {
            setNotification('Se enviaría una request.')
            fetch('https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/runners', {
                method: 'POST',
                headers: { "Content-Type": "application/json", "token": token },
                body: JSON.stringify({
                    id: token,
                    name: formData.name,
                    username: formData.username,
                    age: formData.age,
                    location: formData.location,
                    image: formData.image
                })
            }).then((response) => {
                if (response.ok) router.push("/profile")
                return response.json();
            }).catch((error) => {
                console.error('Error al cargar el proyecto:', error);
            })
        } else {
            setNotification(ERROR_MESSAGE)
        }
    };

    useEffect(() => {
        if (document === undefined) return;
        if (verifyToken(document.cookie) != false) {
            console.log("logged")
            setLogged(true);
        } else {
            console.log("not logged")
            router.push("/login")
        }
    }, [])

    const handlerButtonNotification = () => {
        setNotification('')
    }

    return (


        <main className="flex flex-col justify-center items-center">
            {
                logged === true ? <NavegationBarLogged /> : <NavegationBar />
            }
            <div className="w-[75%] mt-4">
                <form className="bg-dark2/50 shadow-md rounded-3xl pt-6 mb-4">
                    <div className="flex justify-center items-center">
                        <h2 className="text-white my-4 text-3xl">Crear Perfil</h2>
                    </div>
                    {notification === ERROR_MESSAGE ? <div className="mx-8 my-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">{notification}</strong>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg className="fill-current h-6 w-6 text-red-500" role="button" onClick={handlerButtonNotification} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span>
                    </div> : ''}
                    <div className="grid grid-cols-2">
                        <div className="mb-4 px-8 w-[60%]">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                                Nombre de usuario
                            </label>
                            <input
                                value={formData.username}
                                onChange={handleInputChange}
                                name="username"
                                className="required shadow appearance-none bg-dark3/40 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none placeholder-gray-200 focus:ring-blue-500 focus:border-green-500 border-2"
                                id="username"
                                type="text"
                            />
                        </div>
                        <div className="mb-6 px-8 ">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="location">
                                Ubicación
                            </label>
                            <input
                                value={formData.location}
                                onChange={handleInputChange}
                                name="location"
                                className="required shadow appearance-none bg-dark3/40 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none placeholder-gray-200 focus:ring-blue-500 focus:border-green-500 border-2"
                                id="location"
                                type="text"
                            />
                        </div>
                        <div className="mb-6 px-8 ">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                Nombre
                            </label>
                            <input
                                value={formData.name}
                                onChange={handleInputChange}
                                name="name"
                                className="required shadow appearance-none bg-dark3/40 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200 focus:ring-blue-500 focus:border-green-500 border-2"
                                id="name"
                                type="text"
                            />
                        </div>
                        <div className="mb-6 px-8 row-span-2 w-full flex justify-center items-center">
                            <div className='w-full block text-white text-sm font-bold mb-2'> Seleccione un ícono</div>
                            {[
                                { id: 'image1', src: 'icons/pingpong.png' },
                                { id: 'image2', src: 'icons/tenis.png' },
                                { id: 'image3', src: 'icons/basquet.png' },
                                { id: 'image4', src: 'icons/football.png' },
                                { id: 'image5', src: 'icons/volley.png' },
                            ].map((image) => (
                                <div key={image.id} className="flex flex-col items-center mb-4 mx-5">
                                    <img src={image.src} className={`rounded-full mb-2 width="50px" `} />
                                    <input
                                        id={image.src}
                                        type="radio"
                                        name="image"
                                        value={image.src}
                                        onChange={handleInputChange}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="mb-6 px-8">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="age">
                                Edad
                            </label>
                            <input
                                value={formData.age}
                                onChange={handleInputChange}
                                name="age"
                                className="required shadow appearance-none bg-dark3/40 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200 focus:ring-blue-500 focus:border-green-500 border-2"
                                id="age"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="w-full pt-5"><button onClick={handleLogin} className="w-full bg-white rounded-b-3xl text-black font-bold py-2 px-4 duration-300 hover:text-white transition-all bg-size-200 bg-pos-0 hover:bg-green-600" type="button">
                        Crear
                    </button></div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2023 BugHunters. All rights reserved.
                </p>
            </div>
        </main>
    )
}