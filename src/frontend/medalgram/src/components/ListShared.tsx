import { BASE_PATH } from "@/constants/constants";
import { getListShared, verifyToken } from "@/objects/mocks/functions";
import { verify } from "crypto";
import Link from "next/link";
import { useEffect, useState } from "react"

export default function ListShared() {
    const [runners, setRunners] = useState<any>(null);
    const [token, setToken] = useState<any>(null);
    const [me, setMe] = useState<any>(null);
    const [shared, setShared] = useState<any>(null);
    const [listShared, setListShared] = useState<any>(null);

    useEffect(() => {
        if (document === undefined) return;
        if (document.cookie !== 'token=null' && document.cookie !== '') {
            setToken(verifyToken(document.cookie));
        }
    }, [])

    useEffect(() => {
        if (shared === null || me === null) return;
        setListShared(getListShared(me.second.username, shared))
    }, [shared, me, shared])

    useEffect(() => {
        fetch(BASE_PATH + "/runners/", { method: 'GET', headers: { "Content-Type": "application/json" } })
            .then((response) => { return response.json() })
            .then((data) => { setRunners(data) })
            .catch((error) => { console.error('Error al obtener la estadistica publica:', error) })
    }, [])

    useEffect(() => {
        if (token === null) return;
        fetch(BASE_PATH + "/me", { method: 'GET', headers: { "Content-Type": "application/json", "token": token } })
            .then((response) => { return response.json() })
            .then((data) => { setMe(data) })
            .catch((error) => { console.error('Error al obtener informacion de perfil:', error) })
    }, [token])

    useEffect(() => {
        fetch(BASE_PATH + "/shares", { method: 'GET', headers: { "Content-Type": "application/json" } })
            .then((response) => { return response.json() })
            .then((data) => { setShared(data) })
            .catch((error) => { console.error('Error al obtener informacion de perfil:', error) })

    }, [])

    const handlerShare = (username: string) => {

        fetch(BASE_PATH + "/shares", { method: 'POST', headers: { "Content-Type": "application/json", "token": token }, body: username })
            .then((response) => { if (response.ok) window.location.reload(); })
            .catch((error) => { console.error('Error al Compartir el medallero:', error) })
        console.log("se quiere compartir el medallero con:" + username)
    }

    return (
        <section className="w-full h-full col-span-2 flex flex-col items-center bg-dark2/50 rounded-3xl">
            <h2 className="text-xl font-bold pt-8">Puedes compartir el medallero con las siguientes personas:</h2>
            {
                runners && me && listShared ?
                    runners.filter((runner: any) => runner.first !== 'admin' && runner.first !== me.second.username && !(listShared.includes(runner.first))).map((runner: any) => {
                        return (
                            <div key={runner.first} className="w-[60%] flex justify-between items-center py-2 px-4 my-1 bg-dark0 rounded-2xl">
                                <img src={runner.second} alt="profileImage" width={45} className="rounded-full" />
                                <strong>@{runner.first}</strong>
                                <button className="py-1 bg-dark3 rounded-xl text-black text-sm px-1 hover:bg-dark0 hover:text-white transition duration-300 border-4 border-gray-400 hover:border-blue-400 font-bold text-gray-600" onClick={() => handlerShare(runner.first)}>Compartir Medallero</button>
                            </div>
                        )
                    }) : "no hay runners"

            }
            <h2 className="text-xl font-bold pt-8">Puedes ver el medallero con las siguientes personas:</h2>
            {
                runners && me && listShared ?
                    runners.filter((runner: any) => runner.first !== 'admin' && runner.first !== me.second.username && (listShared.includes(runner.first))).map((runner: any) => {
                        return (
                            <div key={runner.first} className="w-[60%] flex justify-between items-center py-2 px-4 my-1 bg-dark0 rounded-2xl">
                                <img src={runner.second} alt="profileImage" width={45} className="rounded-full" />
                                <strong>@{runner.first}</strong>
                                <Link href={"/stats/" + runner.first}>
                                <button className="py-1 bg-dark3 rounded-xl text-black text-sm px-1 hover:bg-dark0 hover:text-white transition duration-300 border-4 border-gray-400 hover:border-blue-400 font-bold text-gray-600" onClick={() => handlerShare(runner.first)}>Ver su medallero</button>
                                </Link>
                            </div>
                        )
                    }) : "no hay runners"

            }
        </section>
    )
}