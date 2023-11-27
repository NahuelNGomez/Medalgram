"use client"
import Breadcrumbs from "@/components/Breadcrumbs";
import ListShared from "@/components/ListShared";
import MedalList from "@/components/MedalList";
import NavegationBar from "@/components/NavegationBar";
import NavegationBarLogged from "@/components/NavegationBarLogged";
import { createStats, verifyToken } from "@/objects/mocks/functions";
import { verify } from "crypto";
import { useEffect, useState } from "react";

export default function Stats() {
    const [logged, setLogged] = useState(false);
    const [checked, setChecked] = useState(false); // Llega del fetch
    const [token, setToken] = useState<any>(null);
    const [results, setResults] = useState<any>(null);
    const [stats, setStats] = useState<any>({
        totalTime: 0,
        totalRaces: 0,
        totalMedals: 0,
        totalGold: 0,
        totalSilver: 0,
        totalBronze: 0
    });

    const breadcrumb = [
        {
            title: 'Corredor',
            url: '/profile'
        },
        {
            title: 'Estadisticas',
            url: '/stats'
        }
    ];


    useEffect(() => {
        if (document === undefined) return;
        if (document.cookie !== 'token=null' && document.cookie !== '') {
            setLogged(true);
            setToken(verifyToken(document.cookie));
        }
    }, [])


    const handlerShared = (e: any) => {
        // Fetch para modificar el estado de la estadistica publica
        setChecked(e.target.checked);
    }

    useEffect(() => {
        if (token === null) return;
        fetch(`https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/me/results`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "token": token
            }
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then((data) => {
            setResults(data);
        }).catch((error) => {
            console.error('Error al obtener la estadistica publica:', error);
        })

    }, [token])

    useEffect(() => {
        if (results === null) return;
        setStats(createStats(results))
    }, [results])


    return (
        <main>
            {
                logged === true ? <NavegationBarLogged /> : <NavegationBar />
            }
            <Breadcrumbs items={breadcrumb} />
            <article className="grid grid-cols-6">
                <section className="col-span-4">
                    <div className='flex flex-wrap items-center justify-items-start justify-between px-10'>
                        <h2 className="text-3xl">Estadísticas</h2>
                    </div>
                    <MedalList stats={stats}></MedalList>
                    <article className="flex items-center justify-center">
                        <table className="w-4/5 mt-5">
                            <thead>
                                <tr>
                                    <th className="bg-dark1 font-normal p-1">Datos útiles</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-dark2/50 text-black font-semibold">
                                    <td className="p-1">
                                        <svg className=" inline mr-2 h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="inline">
                                            Tiempo total recorrido en carreras: {stats.totalTime ? stats.totalTime.split(":")[0] : ""} horas {stats.totalTime ? stats.totalTime.split(":")[1] : ""} minutos {stats.totalTime ? stats.totalTime.split(":")[2] : ""} segundos</p>
                                    </td>
                                </tr>
                                <tr className="bg-dark3 text-black font-semibold">
                                    <td className="p-1">
                                        <svg className=" inline h-7 w-7 text-black mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />  <line x1="4" y1="22" x2="4" y2="15" /></svg>
                                        Carreras totales: {stats.totalRaces}
                                    </td>
                                </tr>
                                <tr className="bg-dark2/50 text-black font-semibold">
                                    <td className="p-1">
                                        <svg className="inline mr-2 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                        Medallas totales: {stats.totalMedals}
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </article>
                </section>
                <ListShared />
            </article>


        </main>
    )
}

