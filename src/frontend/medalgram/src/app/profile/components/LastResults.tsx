"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PreviewResult from "@/app/profile/components/PreviewResult";

export default function LastResults({ newResult, closeNewResult, token }: any) {
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    fetch("https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/me/results", {
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
            results.slice(0, 3).map((result: any) => {
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
            <div className="w-full flex items-center justify-center py-5 mt-5 bg-dark1 text-gray-300">
              <h4>Aún no hay resultados cargados</h4>
            </div>
          </>
            : ""
        }
      </div>
    </main>
  );

  /* left-[350px] absolute */
}
