"use client";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import { BASE_PATH } from "@/constants/constants";


const formatearDosDigitos = (numero: any) => {
  return numero < 10 ? `0${numero}` : numero;
};

export default function AddResultModal({ cancelFunction, token }: any) {
  const [events, setEvents] = useState<any>(null);


  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget
    const idEvent = elements.namedItem('idEvent') as HTMLInputElement
    const position = elements.namedItem('position') as HTMLInputElement
    const hours = elements.namedItem('hours') as HTMLInputElement
    const minutes = elements.namedItem('minutes') as HTMLInputElement
    const seconds = elements.namedItem('seconds') as HTMLInputElement

    if (!idEvent || !position || !hours || !minutes || !seconds || idEvent.value == "" || position.value == "" || hours.value == "" || minutes.value == "" || seconds.value == "") {
      console.error("Por favor, complete todos los campos.")
      return
    }

    fetch(BASE_PATH + "/me/results", {
      method: 'POST',
      headers: { "Content-Type": "application/json", "token": token },
      body: JSON.stringify({
        idEvent: idEvent.value,
        position: position.value,
        tokenRunner: token,
        time: `${formatearDosDigitos(hours.value)}:${formatearDosDigitos(minutes.value)}:${formatearDosDigitos(seconds.value)}`,
      })
    }).then((response) => {
      if (response.ok) window.location.reload();
    })
      .catch((error) => {
        console.error('Error al cargar el resultado:', error);
      })
  }

  useEffect(() => {
    fetch(BASE_PATH + "/events/").then((response) => {
      return response.json();
    }).then((data) => setEvents(data));
  }, [])

  return (
    <section className='absolute grid place-items-center w-[100%] h-[100%] bg-[#111]/70 bottom-0 left-0'>
      <div className='flex flex-col gap-20 border-2 border-gray-100 rounded-3xl items-center justify-center bg-dark2'>
        <div className="flex flex-col	justify-around py-[8px] px-[24px] w-[1200px]">
          <div className="text-4xl justify-left flex m-4 mb-10 underline">Agregar un resultado</div>
          <form onSubmit={handlerSubmit}>
            <div className="grid grid-cols-2 gap-[20px]">
              <div className="flex flex-row  items-center">
                <label className="pl-8 pr-4">Evento: </label>
                <select id="idEvent" name="idEvent" className="shadow border-2 focus:border-green-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  {
                    events != null && (events.map((event: any) => (
                      <option key={event.id} id="idEvent" value={event.id}>{event.id} - {event.name}</option>
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
              <button type='submit' className="bg-blue-500 hover:bg-blue-700 mr-6 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                GUARDAR
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded" onClick={cancelFunction}>
                CANCELAR
              </button>
            </div>
          </form>
        </div>
      </div>

    </section >
  );

  /* left-[350px] absolute */
}
