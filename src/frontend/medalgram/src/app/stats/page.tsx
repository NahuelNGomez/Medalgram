"use client"
import Breadcrumbs from "@/components/Breadcrumbs";
import MedalList from "@/components/MedalList";
import NavegationBar from "@/components/NavegationBar";
import NavegationBarLogged from "@/components/NavegationBarLogged";
import { useEffect, useState } from "react";

export default function Stats() {
    const [logged, setLogged] = useState(false);
    const [checked, setChecked] = useState(false); // Llega del fetch

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
        if (document.cookie === 'username=True') {
            setLogged(true);
        }
    }, [])

    const handlerShared = (e: any) => {
        // Fetch para modificar el estado de la estadistica publica
        setChecked(e.target.checked);
    }


    return (
        <main>
            {
                logged === true ? <NavegationBarLogged /> : <NavegationBar />
            }
            <Breadcrumbs items={breadcrumb} />
            <section>
                <div className='flex flex-wrap items-center justify-items-start justify-between px-10'>
                    <h2 className="text-3xl">Estadísticas</h2>
                    <label className="relative inline-flex items-center cursor-pointer" >
                        <input
                            type="checkbox"
                            value="shared"
                            id="cboxShared"
                            className="sr-only peer"
                            onClick={handlerShared}
                            checked={checked}
                        />
                        <div className="w-28 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-14 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Estadísticas públicas</span>
                    </label>
                </div>

                <MedalList></MedalList>
            </section>

        </main>
    )
}