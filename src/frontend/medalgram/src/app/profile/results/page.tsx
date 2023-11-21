"use client";
import NavegationBar from "@/components/NavegationBar";
import NavegationBarLogged from "@/components/NavegationBarLogged";
import { listResultMock } from "@/objects/mocks/mock";
import { useEffect, useState } from "react";

export default function Results() {

    const [logged, setLogged] = useState(false);

    const listResult = listResultMock();

    useEffect(() => {
        if (document === undefined) return;
        if (document.cookie !== 'token=null' && document.cookie !== '') {
            setLogged(true);
        }
    }, [])

    return (
        <>
            {
                logged === true ? <NavegationBarLogged /> : <NavegationBar />
            }
            <main>
                <div className="flex flex-col justify-center items-center">
                    <div className="w-full max-w-xl mt-4">
                        <div className="bg-dark2/50 shadow-md rounded-3xl pt-6 mb-4">
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="text-2xl font-bold underline">Resultados</h1>
                                {
                                listResult === null ? <h2>No hay resultados</h2> :
                                (
                                    listResult.map((result: any, index:any) =>(
                                        <h2 key={index}>resultado {result.id}</h2>
                                    ))
                                )

                            }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}