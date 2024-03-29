import Loading from "@/components/Loading";
import { BASE_PATH } from "@/constants/constants";
import { verifyToken } from "@/objects/mocks/functions";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PendingAdminResult({ result, token, idEvent }: any) {
  const [tokenAux, setTokenAux] = useState<any>(null);
  const [event, setEvent] = useState<any>(null);
  const [runner, setRunner] = useState<any>(null);

  useEffect(() => {
    if (document === undefined) return;
    setTokenAux(verifyToken(document.cookie))
  }, [])

  useEffect(() => {
    if (!tokenAux) return;
    fetch(BASE_PATH + '/runners/' + result.tokenRunner, {
      method: 'GET',
      headers: { "Content-Type": "application/json", "adminToken": tokenAux }
    }).then((response) => {
      return response.json()
    }).then((data) => setRunner(data))
      .catch((error) => {
        console.error('Error al obtener evento:', error);
      })
  }, [tokenAux])

  const modifyResult = (mode: string) => {

    fetch(BASE_PATH + '/results/' + result.id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json", "token": tokenAux },
      body: mode
    }).then((response) => {
      if (response.ok) window.location.reload();
    }).catch((error) => {
      console.error('Error al modificar el resultado:', error);
    })
  }

  useEffect(() => {
    fetch(BASE_PATH + '/events/' + idEvent, {
      method: 'GET',
      headers: { "Content-Type": "application/json", "token": tokenAux }
    }).then((response) => {
      return response.json()
    }).then((data) => setEvent(data))
      .catch((error) => {
        console.error('Error al obtener evento:', error);
      })
  }, [])

  if (!event || !runner) return (
    <Loading/>

  )

  return (
    <main className="flex flex-wrap my-4 w-[60%]">
      <div className="border bg-dark3 w-1/5 py-2 flex align-content justify-center items-center">
        {event && new Date(event.date).toString().split(" ").slice(1, 4).join(" ")}
      </div>
      <div className="bg-dark2 w-4/5 text-white grid grid-cols-2 bg-gradient-to-r from-dark1 to-dark1">
        <div className="col-span-1 flex flex-wrap flex-col justify-center pl-4 ">
          <div className="row-span-1 flex flex-wrap flex-row justify-between py-2 ">
            <p><strong>Evento:</strong> {event && event.name}</p>
            <p><strong>Runner:</strong> {runner && runner.username}</p>
          </div>
          <div className="row-span-1 flex flex-wrap flex-row justify-between py-2">
            <p><strong>Posición:</strong> #{result.position}</p>
            <p><strong>Tiempo:</strong> {result.time}</p>
          </div>
          <div className="row-span-1 flex flex-wrap flex-row justify-around">
            <button onClick={() => modifyResult("accepted")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#25e009"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </button>
            <button onClick={() => modifyResult("rejectedForAdmin")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff2616"
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
            <div className="flex flex-wrap justify-center items-center px-8 py-3 text-xs text-gray-300 text-xl bg-dark0">
              Más información
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

      {/* sin terminar */}
    </main>
  );
}
