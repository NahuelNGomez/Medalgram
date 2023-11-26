import Link from "next/link";
import { useEffect, useState } from "react";

export default function PendingResult({ id, position, idEvent, status, time, token }: any) {
  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    fetch("https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/events/" + idEvent, {
      method: "GET",
    }).then((response) => {
      return response.json();
    }).then((data) => setEvent(data));
  }, []);

  const modifyResult = (mode: string) => {

    fetch(`https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/me/results/${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json", "token": token },
      body: mode
    }).then((response) => {
      if (response.ok) window.location.reload();
    }).catch((error) => {
      console.error('Error al modificar el resultado:', error);
    })
  }

  return (
    <main className="flex flex-wrap w-full my-4 pl-2">
      <div className="border bg-dark3 w-1/4 py-2 flex justify-center items-center text-dark0 font-bold text-center">
        {event && event.name}
      </div>
      <div className="bg-dark2 w-3/4 text-white grid grid-cols-2 grid-rows-2 bg-gradient-to-r from-dark0 to-dark2/100">
        <div className="flex items-center justify-center pt-2 row-span-2 col-span-2">
          <p className="inline">Posición: #{position}</p>
          <p className="inline pl-4">Tiempo: {time}</p>
        </div>
        <div className="col-span-1 row-span-2 flex flex-wrap flex-col justify-center pl-4">
          <div className="row-span-1 flex flex-wrap flex-row justify-around">
            <button onClick={() => modifyResult("accepted")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#25b009"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </button>
            <button onClick={() => modifyResult("rejectedForUser")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#dd2616"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center py-4">
        <Link
          href={`/sports/` + 2 + "/events/" + 1}
          className="nav-link link-body-emphasis active"
          aria-current="page"
        >
          <div className="flex flex-wrap justify-center items-center px-8 py-3 text-sm text-gray-300 bg-dark0 font-bold">
            Ver evento
            <svg
              className="pl-3 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  </main >
);
}
