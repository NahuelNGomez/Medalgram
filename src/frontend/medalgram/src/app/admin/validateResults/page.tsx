"use client"
import NavegationBarAdmin from "@/components/NavegationBarAdmin";
import { useState, useEffect } from "react";
import PendingAdminResult from "./components/PendingAdminResult";

export default function ValidateResults(token: any) {
    const [results, setResults] = useState<JSON | any>(null);
    useEffect(() => {
        fetch('https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/results', {
            method: 'GET',
            headers: { "Content-Type": "application/json", "token": token }
        }).then((response) => {
            return response.json()
        }).then((data) => setResults(data))
        .catch((error) => {
            console.error('Error al obtener resultados:', error);
        })
    },[]);
    return (
        <>
            <NavegationBarAdmin />
            <main className="flex flex-col items-center justify-center h-[40vh] px-96">
            <h2 className="text-3xl pb-10 underline">Validar resultados</h2>
                { results ? results.filter((result: any) => result.status === 'pendingForAdmin').map((result: any, index: any) => {
                    return <PendingAdminResult result={result} key={result.time+result.tokenRunner+index} token={token}/>;
                }): <h3 className="text-3xl pb-10">No hay resultados</h3>}
            </main>
        </>
    )
}