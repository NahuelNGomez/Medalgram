"use client"
import NavegationBarAdmin from "@/components/NavegationBarAdmin";
import { useEffect, useState } from "react";

const ERROR_MESSAGE = "Por favor, complete todos los campos."
const OK_MESSAGE = "Se ha cargado el evento correctamente."

export default function AddEvent(token: any) {
    const [sports, setSports] = useState<JSON | any>(null);
    const [notification, setNotification] = useState("")

    const handlerButtonNotification = () => {
        setNotification('')
    }


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



        if (!name || !description || !idSport || !date || !location || !edition || !url || name.value == "" || description.value == "" || idSport.value == "" || date.value == "" || location.value == "" || edition.value == "" || url.value == "") {
            setNotification(ERROR_MESSAGE)
            return
        }

        fetch('https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/events', {
            method: 'POST',
            headers: { "Content-Type": "application/json", "token": token },
            body: JSON.stringify({
                name: name.value,
                description: description.value,
                idSport: idSport.value,
                date: new Date(date.value).toISOString().slice(0, -1) + "+0000",
                location: location.value,
                url: url.value,
                edition: edition.value
            })
        }).then((response) => {
            if (response.ok) {
                setNotification(OK_MESSAGE)
                name.value = ""
                description.value = ""
                idSport.value = ""
                date.value = ""
                location.value = ""
                url.value = ""
                edition.value = ""
            };
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
                <form onSubmit={handlerSubmit} className="flex flex-col items-center justify-center border px-8 pt-6 pb-8 mb-4 w-[40%]">
                    <h3 className="text-3xl pb-10 underline">Cargar un evento</h3>
                    {notification === ERROR_MESSAGE ? <div className="mx-8 mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-[60%]" role="alert">
                        <strong className="font-bold">{notification}</strong>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg className="fill-current h-6 w-6 text-red-500" role="button" onClick={handlerButtonNotification} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span>
                    </div> : ''}
                    {notification === OK_MESSAGE ? <div className="mx-8 mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative w-[60%]" role="alert">
                        <strong className="font-bold">{notification}</strong>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg className="fill-current h-6 w-6 text-green-500" role="button" onClick={handlerButtonNotification} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span>
                    </div> : ''}
                    <label className="block text-gray-200 text-sm font-bold mb-2 w-full">Nombre del evento<input className="shadow appearance-none border-2 focus:border-green-400 rounded w-full py-2 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" name="name" /></label>
                    <label htmlFor="sport" className="block text-gray-200 text-sm font-bold mb-2 w-full">Selecciona un deporte:
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
                    <label className="block text-gray-200 text-sm font-bold mb-2 w-full">Edicion del evento<input type="number" className="shadow appearance-none border-2 focus:border-green-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="edition" name="edition" min="1" /></label>
                    <button className="border self-end font-bold text-white px-6 bg-dark3/20 rounded hover:bg-green-600 transition duration-500">Cargar Evento</button>

                </form>
            </main>
        </>

    )
}