"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import PendingResult from "@/app/profile/components/PendingResult";

export default function ConfirmResults({token}:any) {

  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    fetch("https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/me/results", {
      headers: { "token": token }
    }).then((response) => {
      return response.json();
    }).then((data) => setResults(data));
  }, []);

  return (
    <main className="rounded-2xl bg-dark2 col-span-2">
      <div className="flex flex-col items-center justify-center pt-10">
        <strong className="text-3xl px-[12px]">
          Resultados sin confirmar
        </strong>
       {
          results !== null && results !== undefined ?
            results.filter((result: any) => result.status === 'pendingForUser').map((result: any) => {
              return (
                <PendingResult
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
