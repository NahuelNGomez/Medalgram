"use client"
import Comments from "@/components/Comments";
import NavegationBar from "@/components/NavegationBar";
import PreviewEvent from "@/components/PreviewEvent";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { oneEventMock } from "@/objects/mocks/mock";
import NavegationBarLogged from "@/components/NavegationBarLogged";
import { verifyToken } from "@/objects/mocks/functions";
import { BASE_PATH } from "@/constants/constants";

interface SportProps {
    params: { id: number, id2: number }
}

export default function Page({ params: { id, id2 } }: SportProps) {
    const [event, setEvent] = useState<any>([]);
    const [logged, setLogged] = useState(false);
    const [token, setToken] = useState<any>(null);
    // Params -> id de evento
    // fetch events/{id_event}
    // fetch events/{id_event}/comments

    useEffect(() => {
        //setEvent(oneEventMock())
        fetch(BASE_PATH + "/events/" + id2)
            .then((response) => {
                return response.json()
            })
            .then((data) => setEvent(data));
    }, [])

    const breadcrumb = [
        {
            title: 'Deportes',
            url: '/sports'
        },
        {
            title: id + ' / Eventos',
            url: '/sports/' + id + '/events'
        },
        {
            title: event.name,
            url: '/sports/' + id + '/events' + id2
        }
    ];

    useEffect(() => {
        if (document === undefined) return;
        if (document.cookie !== 'token=null' && document.cookie !== '') {
            setLogged(true);
            setToken(verifyToken(document.cookie))
        }
    }, [])
    return (
        <main>
            {
                logged === true ? <NavegationBarLogged /> : <NavegationBar />
            }
            <Breadcrumbs items={breadcrumb} />
            <section className="flex flex-col justify-center items-center">
                <article className="flex flex-col bg-dark2/50 justify-center items-center w-4/5 py-10 relative rounded-3xl">
                    <h2 className="text-xl">{event.name}</h2>
                    <div className="absolute px-20 py-0.5 text-gray-300 text-xs bg-dark1 bottom-0 ">{event.location}</div>
                    <div className="absolute px-5 py-0.5 text-gray-300 text-xs bg-dark1 ml-4 bottom-0 right-0 rounded-br-3xl">Ed. {event.edition}</div>
                </article>
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
                                {event.date && new Date(event.date).toString().split(" ").slice(1, 4).join(" ")}
                            </td>
                        </tr>
                        <tr className="bg-dark3 text-black font-semibold">
                            <td className="p-1">
                                <svg className="inline mr-2 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {event.location}
                            </td>
                        </tr>
                        <tr className="bg-dark2/50 text-black font-semibold">
                            <td className="p-1">
                                <svg className="inline mr-2 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                {event.url}
                            </td>
                        </tr>
                        <tr className="bg-dark3 text-black font-semibold">
                            <td className="p-1">
                                <img className="inline  mr-2" src="/distance.png" width={30} height={30} alt={""} />
                                {event.kms} Kms
                            </td>
                        </tr>
                    </tbody>

                </table>
                <section className="mt-4 w-4/5">
                    <Comments token={token} logged={logged} id2={id2}/>
                </section>

            </section>


        </main>

    );
}