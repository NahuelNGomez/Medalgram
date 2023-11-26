"use client"
import NavegationBar from "@/components/NavegationBar";
import PreviewEvent from "@/components/PreviewEvent";
import Breadcrumbs from "@/components/Breadcrumbs";
import NavegationBarLogged from "@/components/NavegationBarLogged";
import { useEffect, useState } from "react";
import { eventsMock } from "@/objects/mocks/mock";
import SearchBar from "@/components/SearchBar";

interface SportProps {
    params: { id: number }
}

export default function Page({ params: { id } }: SportProps) {

    const [logged, setLogged] = useState(false);
    const [events, setEvents] = useState<any>(null);
    const [filterInput, setFilterInput] = useState("");

    useEffect(() => {
        fetch("https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/sports/" + id + "/events")
            .then((response) => {
                return response.json()
            })
            .then((data) => setEvents(data));
    }, []);

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
            <article className="col-span-1 border flex items-center justify-between outline-transparent border-transparent pt-6">
                <Breadcrumbs items={breadcrumb} />
                <SearchBar
                    placeholder="Buscar Evento"
                    onChange={(e) => {
                        setFilterInput(e.toString().toLowerCase());
                    }}
                />
            </article>
            {events != null && (events.filter((event:any) => {
                return filterInput.length > 0
                    ? event.name.toLowerCase().includes(filterInput)
                    : true;
            }).map((event: any) => {
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
            }))}
        </main>
    );
}