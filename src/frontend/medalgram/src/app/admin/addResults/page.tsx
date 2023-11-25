"use client"
import NavegationBarAdmin from "@/components/NavegationBarAdmin";
import { verifyToken, viewProfiles } from "@/objects/mocks/functions";
import { verify } from "crypto";
import { useEffect, useState } from "react";

const formatearDosDigitos = (numero: any) => {
    return numero < 10 ? `0${numero}` : numero;
};

export default function AddResults(token: any) {
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
            console.error("Por favor, complete todos los campos.")
            return
        }

        fetch('https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/results', {
            method: 'POST',
            headers: { "Content-Type": "application/json", "token": tokenAux },
            body: JSON.stringify({
                idEvent: "2",
                position: "2",
                tokenRunner: "mXh8vZBCt6SEGciLEUwQu4zhixl1",
                time: "10:18:05",
            })
        }).then((response) => {
            if (response.ok) window.location.reload();
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
        console.log("entro al print data con " + tokenAux)
        printData()
    }, [tokenAux])

    useEffect(() => {
        fetch('https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/events', {
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
                <h2>Cargar resultado</h2>
                <form onSubmit={handlerSubmit}>
                    <div className="grid grid-cols-2 gap-[30px] border">
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
                        <div className="flex flex-row ">
                            <label className="px-[30px]">Posicion:
                                <input type="number" min={1} id='position' name='position' className="text-black px-4">
                                </input></label>
                        </div>
                        <div className="flex flex-row">
                            <label className="px-[30px]">Horas:
                                <input type="number" min={0} max={59} id='hours' name='hours' className="text-black px-4"></input></label>
                        </div>
                        <div className="flex flex-row">
                            <label className="px-[30px]">Minutos:
                                <input type="number" min={0} max={59} id='minutes' name='minutes' className="text-black px-4"></input> </label>
                        </div>
                        <div className="flex flex-row">
                            <label className="px-[30px]">Segundos:
                                <input type="number" min={0} max={59} id='seconds' name='seconds' className="text-black px-4"></input> </label>
                        </div>
                    </div>
                    <div className="flex justify-end pt-[30px]">
                        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            GUARDAR
                        </button>
                    </div>
                </form>
            </main>
        </>
    )
}