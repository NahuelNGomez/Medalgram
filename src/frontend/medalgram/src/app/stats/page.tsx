"use client"
import Breadcrumbs from "@/components/Breadcrumbs";
import MedalList from "@/components/MedalList";
import NavegationBar from "@/components/NavegationBar";
import NavegationBarLogged from "@/components/NavegationBarLogged";
import { useEffect, useState } from "react";

export default function Stats(){
    const [logged, setLogged] = useState(false);

    const breadcrumb = [
        {
            title: 'Corredor',
            url: '/profile'
        },
        {
            title:'Estadisticas',
            url: '/stats'
        }
    ];

    useEffect(() => {
        if (document === undefined) return;
        if (document.cookie === 'username=True') {
          setLogged(true);
        }
      },[])


    return (
        <main>
            {
                logged === true ? <NavegationBarLogged /> : <NavegationBar />
            }
            <Breadcrumbs items={breadcrumb}/>
            <section>
                <div className='flex flex-wrap items-center justify-items-start border justify-between px-10'>
                    <h2 className="text-3xl">Estadísticas</h2>
                    <div>Publico/privado</div>
                </div>

                <MedalList></MedalList>
            </section>

        </main>
    )
}