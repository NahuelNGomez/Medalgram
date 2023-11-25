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
          <h3 className="text-2xl font-bold underline">Información de perfil</h3>
          <button className=" bg-green-300 rounded-3xl text-black w-[150px] 2xl:w-[300px] 2xl:text-[20px] hover:bg-dark0 hover:text-white transition duration-3 00" onClick={newResult}>
            Cargar un resultado
          </button>
          <Link href="/profile/results">
            <button className=" bg-dark3 rounded-3xl text-black w-[150px] 2xl:w-[300px] 2xl:text-[20px] hover:bg-dark0 hover:text-white transition duration-3 00">
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
      </div>
    </main>
  );

  /* left-[350px] absolute */
}
