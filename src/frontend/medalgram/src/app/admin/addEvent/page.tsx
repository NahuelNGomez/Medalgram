"use client"
import NavegationBarAdmin from "@/components/NavegationBarAdmin";
import { useEffect, useState } from "react";

export default function AddEvent(token: any) {
    const [sports, setSports] = useState<JSON | any>(null);


    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { elements } = event.currentTarget
        const name = elements.namedItem('name') as HTMLInputElement

        const idSport = elements.namedItem('idSport') as HTMLInputElement
        const description = elements.namedItem('description') as HTMLInputElement
        const date = elements.namedItem('date') as HTMLInputElement
        const location = elements.namedItem('location') as HTMLInputElement
        const url = elements.namedItem('url') as HTMLInputElement
        const edition = elements.namedItem('edition') as HTMLInputElement



        if (!name || !description ||!idSport || !date || !location || !edition || !url || name.value == "" || description.value == "" || idSport.value == "" || date.value == "" || location.value == "" || edition.value == "" || url.value == "" ) {
            console.error("Por favor, complete todos los campos.")
            return
        }
        
        fetch('https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/events', {
            method: 'POST',
            headers: { "Content-Type": "application/json", "token": token },
            body: JSON.stringify({
                name: name.value,
                description: description.value,
                idSport: idSport.value,
                date: new Date(date.value).toUTCString(),
                location: location.value,
                url: url.value,
                edition: edition.value
            })
        }).then((response) => {
            if (response.ok) window.location.reload();
        })
            .catch((error) => {
                console.error('Error al cargar el deporte:', error);
            })
    }

    useEffect(() => {
        fetch('https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/sports')
            .then(response => {
                return response.json()
            })
            .then(data => setSports(data))
    }, [])

    return (
        <>
            <NavegationBarAdmin />
            <main className="flex flex-col items-center justify-center h-[100vh]">
                <form onSubmit={handlerSubmit} className="flex flex-col items-center justify-center border px-8 pt-6 pb-8 mb-4">
                    <h3 className="text-3xl pb-10 underline">Cargar un evento</h3>
                    <label className="block text-gray-200 text-sm font-bold mb-2 w-full">Nombre del evento<input className="shadow appearance-none border-2 focus:border-green-400 rounded w-full py-2 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" name="name" /></label>
                    <label htmlFor="sport" className="block text-gray-200 text-sm font-bold mb-2 w-full">Selecciona una opción:
                        <select id="idSport" name="idSport" className="shadow border-2 focus:border-green-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                            {
                                sports != null && (sports.map((sport: any) => (
                                    <option key={sport.id} id="idSport" value={sport.id}>{sport.name}</option>
                                )
                                ))
                            }
                        </select></label>
                    <label className="block text-gray-200 text-sm font-bold mb-2 w-full">Descripción del evento<input type="text" className="shadow appearance-none border-2 focus:border-green-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="description" name="description" /></label>
                    <label className="block text-gray-200 text-sm font-bold mb-2 w-full">Fecha del evento<input type="date" className="shadow appearance-none border-2 focus:border-green-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="date" name="date" /></label>
                    <label className="block text-gray-200 text-sm font-bold mb-2 w-full">Lugar del evento<input type="text" className="shadow appearance-none border-2 focus:border-green-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="location" name="location" /></label>
                    <label className="block text-gray-200 text-sm font-bold mb-2 w-full">URL del evento<input type="text" className="shadow appearance-none border-2 focus:border-green-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="url" name="url" /></label>
                    <label className="block text-gray-200 text-sm font-bold mb-2 w-full">Edicion del evento<input type="number" className="shadow appearance-none border-2 focus:border-green-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="edition" name="edition" min="1"/></label>
                    <button className="border text-white px-6 bg-dark3/20 rounded hover:bg-white hover:text-black transition duration-500">Cargar Evento</button>

                </form>
            </main>
        </>

    )
}