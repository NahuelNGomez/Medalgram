"use client"
import NavegationBarAdmin from "@/components/NavegationBarAdmin";
import { useState, useEffect } from "react";
import PendingAdminResult from "./components/PendingAdminResult";
import Loading from "@/components/Loading";
import { BASE_PATH } from "@/constants/constants";
import { verifyToken } from "@/objects/mocks/functions";

export default function ValidateResults(token: any) {
    const [results, setResults] = useState<JSON | any>(null);
    const [tokenAux, setTokenAux] = useState<any>(null)

    useEffect(() => {
        if (document === undefined) return;
        setTokenAux(verifyToken(document.cookie))
    }, [])


    useEffect(() => {
        if (tokenAux === null) return;

        fetch(BASE_PATH + '/results', {
            method: 'GET',
            headers: { "Content-Type": "application/json", "token": tokenAux }
        }).then((response) => {
            return response.json()
        }).then((data) => setResults(data))
            .catch((error) => {
                console.error('Error al obtener resultados:', error);
            })
    }, [tokenAux]);

    if (!results) return (<Loading />)

    return (
        <>
            <NavegationBarAdmin />
            <main className="flex flex-col items-center justify-center w-[100%]">
                <h2 className="text-3xl py-10 underline">Validar resultados</h2>
                {results ? results.filter((result: any) => result.status === 'pendingForAdmin').map((result: any, index: any) => {
                    return <PendingAdminResult result={result} key={result.time + result.tokenRunner + index} token={token} idEvent={result.idEvent} />;
                }) : ""}
                {
                    results.filter((result: any) => result.status === 'pendingForAdmin').length === 0
                    ? <div className="border p-4 bg-gray-900 border border-gray-800 text-gray-400">
                        <p className="text-2xl">No hay resultados pendientes de validación.</p>
                    </div>
                    
                    : ""
                }
            </main>
        </>
    )
}