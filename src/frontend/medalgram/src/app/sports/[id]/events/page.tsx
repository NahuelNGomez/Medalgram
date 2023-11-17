"use client"
import NavegationBar from "@/components/NavegationBar";
import PreviewEvent from "@/components/PreviewEvent";
import Breadcrumbs from "@/components/Breadcrumbs";
import NavegationBarLogged from "@/components/NavegationBarLogged";
import { useEffect, useState } from "react";

interface SportProps {
    params: { id: number }
}

export default function Page({ params: { id } }: SportProps) {

    const [logged, setLogged] = useState(false);

    const breadcrumb = [
        {
            title: 'Deportes',
            url: '/sports'
        },
        {
            title: 1 + ' / Eventos',
            url: '/sports/' + 1 + '/events'
        }
    ];

    useEffect(() => {
        if (document === undefined) return;
        if (document.cookie === 'username=True') {
          setLogged(true);
        }
      },[])

    return (
        <main className="flex flex-col">
            {
                logged === true ? <NavegationBarLogged /> : <NavegationBar />
            }
            <Breadcrumbs items={breadcrumb} />
            <div className="flex flex-wrap justify-between p-10">
                <div className="border p-2 px-40">Buscador</div>
            </div>
            <PreviewEvent />
            <PreviewEvent />
            <PreviewEvent />
            <PreviewEvent />
        </main>
    );
}