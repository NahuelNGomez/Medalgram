import Link from "next/link";
import { useEffect, useState } from "react";

const ACCEPTED = "accepted";

export default function PreviewEvent({ position, idEvent, status, time }: any) {
  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    fetch("https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/events/" + idEvent).then((response) => {
      return response.json();
    }).then((data) => setEvent(data));

  }, []);

  if (event == null) {
    return (<div className="container text-center">
      <div className="row align-items-center">
        <div className="col my-4">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>)
  }





  return (
    <main className="flex flex-wrap w-full my-6">
      <div className="bg-dark3 w-1/5 py-2 flex align-content justify-center items-center text-dark0 font-bold">
        {event.date && new Date(event.date).toString().split(" ").slice(1, 4).join(" ")}
      </div>
      <div className="bg-dark2 w-4/5 text-white grid grid-cols-3 bg-gradient-to-r from-dark0 to-dark2 p-4">
        <div className="col-span-1 flex flex-wrap flex-col justify-center pl-4">
          <div className="row-span-1 flex flex-wrap flex-row">
            <p className="block p-2 w-1/2 font-bold underline">{event.name}</p>
            <p className="block p-2 w-1/2"><p className="underline inline">Posicion:</p> {position}</p>
            <p className="block p-2 w-1/2"><p className="underline inline">Tiempo:</p> {time}</p>
          </div>
        </div>
        {status ==ACCEPTED &&
        <div className="flex items-center justify-center"><svg className="h-20 w-20 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg></div>}
        {status !==ACCEPTED &&
        <div className="flex items-center justify-center"></div>}
        <div className="flex justify-center items-center py-4">
          <Link
            href={`/sports/` + event.idSport + "/events/" + event.id}
            className="nav-link link-body-emphasis active"
            aria-current="page"
          >
            <button className="bg-dark0 rounded-2xl hover:text-dark0 hover:bg-dark3 transition duration-300 p-3 font-bold">más informacion del evento</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
