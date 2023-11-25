import Link from "next/link";
import { useEffect, useState } from "react";

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
      <div className="border bg-dark3 w-1/5 py-2 flex align-content justify-center items-center">
        {event.date}
      </div>
      <div className="bg-dark2 w-4/5 text-white grid grid-cols-2 bg-gradient-to-r from-dark1 to-dark1 p-4">
        <div className="col-span-1 flex flex-wrap flex-col justify-center pl-4 ">
          <div className="row-span-1 flex flex-wrap flex-row justify-between  ">
            <p>{event.name}</p>
            <p>Posicion: {position}</p>
            <p>status: {status}</p>
          </div>
          <p>Tiempo: {time}</p>
        </div>
        <div className="flex justify-center items-center py-4">
          <Link
            href={`/sports/` + event.idSport + "/events/" + event.id}
            className="nav-link link-body-emphasis active"
            aria-current="page"
          >
            <button className="bg-dark0 p-2 rounded-2xl hover:text-dark0 hover:bg-dark3 transition duration-300">más informacion del evento</button>
          </Link>
        </div>
      </div>

      {/* sin terminar */}
    </main>
  );
}
