"use client";
import NavegationBar from "@/components/NavegationBar";
import NavegationBarLogged from "@/components/NavegationBarLogged";
import { listResultMock } from "@/objects/mocks/mock";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PreviewResult from "../components/PreviewResult";
import { verifyToken } from "@/objects/mocks/functions";
import { BASE_PATH } from "@/constants/constants";

export default function Results() {

    const [logged, setLogged] = useState(false);
    const [results, setResults] = useState<any>(null);
    const [token, setToken] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        if (document === undefined) return;
        if (document.cookie !== 'token=null' && document.cookie !== '') {
            setLogged(true);
            setToken(verifyToken(document.cookie));
        } else {
            router.push('/login')
        }
    }, [])

    useEffect(() => {
        if (logged === false) {
            return;
        }
        fetch(BASE_PATH + "/me/results", {
            headers: { "token": token }
        }).then((response) => {
            return response.json();
        }).then((data) => setResults(data));
    }, [logged]);

    return (
        <>
            {
                logged === true ? <NavegationBarLogged /> : <NavegationBar />
            }
            <main>
                <div className="flex flex-col justify-center items-center">
                    <div className="w-[60%] mt-4">
                        <div className="bg-dark2/50 shadow-md rounded-3xl pt-6 mb-4">
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="text-2xl font-bold underline">Resultados</h1>
                                {
                                    results !== null && results !== undefined ?
                                        results.map((result: any) => {
                                            return (
                                                <PreviewResult
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
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}