import { verifyToken } from "@/objects/mocks/functions";
import { verify } from "crypto";
import { useEffect, useState } from "react"

export default function ListShared() {
    const [runners, setRunners] = useState<any>(null);
    const [token, setToken] = useState<any>(null);

    useEffect(() => {
        if (document === undefined) return;
        if (document.cookie !== 'token=null' && document.cookie !== '') {
            setToken(verifyToken(document.cookie));
        }
    }, [])

    useEffect(() => {
        fetch("https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/runners/", { method: 'GET', headers: { "Content-Type": "application/json" } })
            .then((response) => { return response.json() })
            .then((data) => { setRunners(data) })
            .catch((error) => { console.error('Error al obtener la estadistica publica:', error) })
    }, [])

    const handlerShare = (e: string) => {/*

        fetch("https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/shares", { method: 'POST', headers: { "Content-Type": "application/json", "token": token }, body: JSON.stringify({ "username": e }) })
            .then((response) => { return response.json() })
            .catch((error) => { console.error('Error al Compartir el medallero:', error) })*/

        console.log("se quiere compartir el medallero con:" + e)
    }


    return (
        <section className="w-full h-full col-span-2 flex flex-col items-center bg-dark2/50 rounded-3xl">
            <h2 className="text-xl font-bold pt-8">Puedes compartir el medallero con las siguientes personas:</h2>
            {
                runners ?
                    runners.filter((runner: any) => runner.first !== 'admin').map((runner: any) => {
                        return (
                            <div className="w-[60%] flex justify-between items-center py-2 px-4 my-1 bg-dark0 rounded-2xl">
                                <img src={runner.second} alt="profileImage" width={45} className="rounded-full"/>
                                <strong>@{runner.first}</strong>
                                <button className="py-1 bg-dark3 rounded-xl text-black text-sm px-1 hover:bg-dark0 hover:text-white transition duration-300 border-4 border-gray-400 hover:border-blue-400 font-bold text-gray-600" onClick={() => handlerShare(runner.first)}>Compartir Medallero</button>
                            </div>
                        )
                    }) : "Cargando"

            }
            <h2 className="mt-4">Puedes ver el medallero con las siguientes personas:</h2>
            <div className="border w-[60%]">persona1</div>
            <div className="border w-[60%]">persona1</div>
            <div className="border w-[60%]">persona1</div>
            <div className="border w-[60%]">persona1</div>


        </section>
    )
}