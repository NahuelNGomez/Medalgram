"use client"
import NavegationBarAdmin from "@/components/NavegationBarAdmin";
import { useState } from "react";

export default function AddSport(token: any) {


    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { elements } = event.currentTarget
        const title = elements.namedItem('title')
        const isTitleValie = title instanceof HTMLInputElement

        const description = elements.namedItem('description')
        const isDescriptionValid = description instanceof HTMLInputElement

        if (!title || !isTitleValie || !description || !isDescriptionValid || title.value == "" || description.value == "") {
            console.error("Por favor, complete todos los campos.")
            return
        }
        fetch('https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/sports', {
            method: 'POST',
            headers: { "Content-Type": "application/json", "token": token },
            body: JSON.stringify({
                name: title.value
                //description: description.value,
            })
        }).then((response) => {
            if (response.ok) location.reload();
        })
            .catch((error) => {
                console.error('Error al cargar el deporte:', error);
            })


    }

    return (
        <>
            <NavegationBarAdmin />
            <main className="flex flex-col items-center justify-center h-[100vh]">
                <form onSubmit={handlerSubmit} className="flex flex-col items-center justify-center border px-8 pt-6 pb-8 mb-4">
                    <h3 className="text-3xl pb-10 underline">Cargar un deporte</h3>
                    <label className="block text-gray-200 text-sm font-bold mb-2 w-full">Nombre del deporte<input className="shadow appearance-none border-2 focus:border-green-400 rounded w-full py-2 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" id="title" name="title" /></label>
                    <label className="block text-gray-200 text-sm font-bold mb-2 w-full">Descripción del deporte<input type="text" className="shadow appearance-none border-2 focus:border-green-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="description" name="description" /></label>
                    <button className="border text-white px-6 bg-dark3/20 rounded hover:bg-white hover:text-black transition duration-500">Cargar Deporte</button>

                </form>
            </main>
        </>

    )
}