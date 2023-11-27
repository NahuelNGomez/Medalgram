"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PreviewResult from "@/app/profile/components/PreviewResult";
import { BASE_PATH } from "@/constants/constants";

export default function LastResults({ newResult, closeNewResult, token }: any) {
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    fetch(BASE_PATH + "/me/results", {
      headers: { "token": token }
    }).then((response) => {
      return response.json();
    }).then((data) => setResults(data));
  }, []);

  return (
    <main className="h-full rounded-2xl bg-dark2 relative px-[20px] w-full">
      <div className="flex flex-col py-[20px]">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold underline">Resultados</h3>
          <button className="py-2 bg-dark3 rounded-xl text-sm text-green-700 w-[150px] 2xl:w-[250px] 2xl:text-[17px] hover:bg-green-600 hover:text-white transition duration-300 border-4 border-gray-400 hover:border-blue-400 font-bold text-gray-600" onClick={newResult}>
            Cargar un resultado
          </button>
          <Link href="/profile/results">
            <button className="py-2 bg-dark3 rounded-xl text-sm text-black w-[150px] 2xl:w-[300px] 2xl:text-[17px] hover:bg-dark0 hover:text-white transition duration-300 border-4 border-gray-400 hover:border-blue-400 font-bold text-gray-600">
              Ver Todos los resultados
            </button>
          </Link>
        </div>
        {
          results !== null && results !== undefined ?
            results.slice(0, 3).filter((result: any) => result.status === 'accepted' || result.status === 'pendingForAdmin' || result.status === 'rejectedForAdmin').map((result: any) => {
              return (
                <PreviewResult
                  key={result.id}
                  position={result.position}
                  idEvent={result.idEvent}
                  status={result.status}
                  time={result.time}
                />
              );
            })
            : "Cargando"
        }

        {
          results !== null && results !== undefined && results.length === 0 ?
            <>
              <div className="border p-4 bg-gray-900/50 border border-gray-800/40 text-gray-400 rounded my-2 flex items-center justify-center">
              <p className="text-2xl">No hay resultados cargados.</p>
            </div>
            </>
            : ""
        }
      </div>
    </main>
  );

  /* left-[350px] absolute */
}
