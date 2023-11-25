'use client';

import React, { use, useEffect } from 'react';
import NavegationBar from "@/components/NavegationBar";
import { useRef, useState } from "react";
import NavegationBarLogged from '@/components/NavegationBarLogged';
import { useRouter } from 'next/navigation';
import { verifyToken } from '@/objects/mocks/functions';

export default function CreateProfile() {
    const router = useRouter();

    const [formData, setFormData] = useState({ username: '', location: '', name: '', image: '', age: '' });
    const [notification, setNotification] = useState('')
    const [logged, setLogged] = useState(false);
    const [token, setToken] = useState<any>(null)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
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
                    location: formData.location
                    //image: formData.image
                })
            }).then((response) => {
                if (response.ok) router.push("/profile")
                return response.json();
            }).catch((error) => {
                console.error('Error al cargar el proyecto:', error);
            })
        } else {
            setNotification('Por favor, complete todos los campos.')
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
                    <div className="grid grid-cols-2">
                        <div className="mb-4 px-8 w-[60%]">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                                Nombre de usuario
                            </label>
                            <input
                                value={formData.username}
                                onChange={handleInputChange}
                                name="username"
                                className="required shadow appearance-none bg-dark3/80 rounded-lg w-full py-2 px-3 text-xs text-gray-200 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
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
                                className="required shadow appearance-none bg-dark3/80 text-xs rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
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
                                className="required shadow appearance-none bg-dark3/80 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
                                id="name"
                                type="text"
                            />
                        </div>
                        <div className="mb-6 px-8 row-span-2 w-full flex flex-col justify-center items-center">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="image">
                                Imagen de perfil
                            </label>
                            <input type="file" onChange={handleInputChange} name="image" id="image" className="border rounded-md p-2" />
                        </div>
                        <div className="mb-6 px-8">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="age">
                                Edad
                            </label>
                            <input
                                value={formData.age}
                                onChange={handleInputChange}
                                name="age"
                                className="required shadow appearance-none bg-dark3/80 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
                                id="age"
                                type="text"
                            />
                        </div>
                    </div>
                    {notification === '' ? '' : <div className="alert alert-danger text-red-500 text-xs italic pt-2 mx-8" role="alert" dangerouslySetInnerHTML={{ __html: notification }} />}
                    <div className="w-full pt-5"><button onClick={handleLogin} className="w-full bg-white rounded-b-3xl hover:bg-blue-700 text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="button">
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