"use client"
import NavegationBar from "@/components/NavegationBar";
import PreviewEvent from "@/components/PreviewEvent";
import Breadcrumbs from "@/components/Breadcrumbs";
import NavegationBarLogged from "@/components/NavegationBarLogged";
import { useEffect, useState } from "react";
import { eventsMock } from "@/objects/mocks/mock";

interface SportProps {
    params: { id: number }
}

export default function Page({ params: { id } }: SportProps) {

    const [logged, setLogged] = useState(false);

    const events = eventsMock();

    const breadcrumb = [
        {
            title: 'Deportes',
            url: '/sports'
        },
        {
            title: id + ' / Eventos',
            url: '/sports/' + id + '/events'
        }
    ];

    useEffect(() => {
        if (document === undefined) return;
        if (document.cookie !== 'token=null' && document.cookie !== '') {
            setLogged(true);
        }
    }, [])

    return (
        <main className="flex flex-col">
            {
                logged === true ? <NavegationBarLogged /> : <NavegationBar />
            }
            <Breadcrumbs items={breadcrumb} />
            <div className="flex flex-wrap justify-between p-10">
                <div className="border p-2 px-40">Buscador</div>
            </div>
            {events.map((event: any) => {
                return (
                    <PreviewEvent
                        key={event.id}
                        idSport={id}
                        id={event.id}
                        name={event.name}
                        location={event.location}
                        date={event.date}
                    />
                );
            })}
        </main>
    );
}