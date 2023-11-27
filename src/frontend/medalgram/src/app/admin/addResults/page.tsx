"use client"
import NavegationBarAdmin from "@/components/NavegationBarAdmin";
import { BASE_PATH } from "@/constants/constants";
import { verifyToken, viewProfiles } from "@/objects/mocks/functions";
import { verify } from "crypto";
import { useEffect, useState } from "react";

const ERROR_MESSAGE = "Por favor, complete todos los campos."
const OK_MESSAGE = "Se ha cargado el evento correctamente."

const formatearDosDigitos = (numero: any) => {
    return numero < 10 ? `0${numero}` : numero;
};

export default function AddResults(token: any) {

    const handlerButtonNotification = () => {
        setNotification('')
    }

    const [notification, setNotification] = useState("")
    const [accounts, setAccounts] = useState<JSON | any>(null);
    const [events, setEvents] = useState<JSON | any>(null);
    const [tokenAux, setTokenAux] = useState<any>(null);

    useEffect(() => {
        if (document === undefined) return;
        setTokenAux(verifyToken(document.cookie))
    }, [])


    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { elements } = event.currentTarget
        const idEvent = elements.namedItem('idEvent') as HTMLInputElement
        const position = elements.namedItem('position') as HTMLInputElement
        const user = elements.namedItem('user') as HTMLInputElement
        const hours = elements.namedItem('hours') as HTMLInputElement
        const minutes = elements.namedItem('minutes') as HTMLInputElement
        const seconds = elements.namedItem('seconds') as HTMLInputElement

        if (!idEvent || !position || !hours || !user || !minutes || !seconds || idEvent.value == "" || user.value == "" || position.value == "" || hours.value == "" || minutes.value == "" || seconds.value == "") {
            setNotification(ERROR_MESSAGE)
            return
        }

        fetch(BASE_PATH + '/results', {
            method: 'POST',
            headers: { "Content-Type": "application/json", "token": tokenAux },
            body: JSON.stringify({
                idEvent: idEvent.value,
                position: position.value,
                tokenRunner: user.value,
                time: `${formatearDosDigitos(hours.value)}:${formatearDosDigitos(minutes.value)}:${formatearDosDigitos(seconds.value)}`
            })
        }).then((response) => {
            if (response.ok) {
                setNotification(OK_MESSAGE)
                idEvent.value = ""
                position.value = ""
                user.value = ""
                hours.value = ""
                minutes.value = ""
                seconds.value = ""
            }
        })
            .catch((error) => {
                console.error('Error al cargar el resultado:', error);
            })
    }

    const [profiles, setProfiles] = useState<JSON | any>(null);

    const printData = async () => {
        try {
            const data = await viewProfiles(tokenAux);
            setProfiles(data)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        printData()
    }, [tokenAux])

    useEffect(() => {
        fetch(BASE_PATH + '/events', {
            method: 'GET',
            headers: { "Content-Type": "application/json", "token": token }
        }).then(response => {
            return response.json()
        }).then(data => setEvents(data))
    }, [])




    return (
        <>
            <NavegationBarAdmin />
            <main className="flex flex-col items-center justify-center h-[100vh]">
                <div className="flex flex-col items-center justify-center border p-4">
                    <h2 className="text-3xl pb-8 underline">Cargar resultado</h2>
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

                    <form onSubmit={handlerSubmit}>
                        <div className="grid grid-cols-2 gap-[30px]">
                            <div className="flex flex-row">
                                <div className="px-[30px]">Evento: </div>
                                <select id="idEvent" name="idEvent" className="shadow border-2 focus:border-green-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                                    {
                                        events != null && (events.map((event: any) => (
                                            <option key={event.id} id="idEvent" value={event.id}>{event.id} - {event.name}</option>
                                        )
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="flex flex-row">
                                <div className="px-[30px]">Usuario: </div>
                                <select id="user" name="user" className="shadow border-2 focus:border-green-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                                    {
                                        profiles != null && (profiles.map((profile: any) => (
                                            <option key={profile.id} id="user" value={profile.id}>{profile.email}</option>
                                        )
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="flex flex-row items-center">
                                <label htmlFor="position" className="pl-8 pr-4">Posicion:</label>
                                <input type="number" min={1} id='position' name='position' className="text-black shadow border-2 focus:border-green-500 rounded w-[20%] py-2 px-2 leading-tight focus:outline-none focus:shadow-outline">
                                </input>
                            </div>
                            <div className="flex flex-row items-center">
                                <label htmlFor="hours" className="pl-8 pr-6">Horas:</label>
                                <input type="number" min={0} max={59} id='hours' name='hours' className="text-black shadow border-2 focus:border-green-500 rounded w-[20%] py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"></input>
                                <label htmlFor="minutes" className="pl-8 pr-6">Minutos:</label>
                                <input type="number" min={0} max={59} id='minutes' name='minutes' className="text-black shadow border-2 focus:border-green-500 rounded w-[20%] py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"></input>
                                <label htmlFor="seconds" className="pl-8 pr-6">Segundos:</label>
                                <input type="number" min={0} max={59} id='seconds' name='seconds' className="text-black shadow border-2 focus:border-green-500 rounded w-[20%] py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"></input>
                            </div>
                        </div>
                        <div className="flex justify-end pt-[30px]">
                            <button type='submit' className="border font-bold text-white px-6 bg-dark3/20 rounded hover:bg-green-600 transition duration-500">
                                GUARDAR
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}