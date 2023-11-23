"use client"
import { useEffect, useState } from "react";
import ManagerBox from "../../components/ManagerBox";
import NavegationBarAdmin from "@/components/NavegationBarAdmin";
import { verifyToken, viewProfiles } from "@/objects/mocks/functions";
import NavegationBar from "@/components/NavegationBar";
import { useRouter } from "next/navigation";



export default function Admin(){
    const router = useRouter()
    const [logged, setLogged] = useState(false);
    const [token, setToken] = useState<any>(null);

    useEffect(() => {
        if (document === undefined) return;
        if (verifyToken(document.cookie) != false) {
            setLogged(true);
            setToken(verifyToken(document.cookie))
        }
    }, [])

//action={() => viewProfiles(token)}
    return (
        <main className="flex flex-col items-center justify-center">
            {token != null ? <NavegationBarAdmin/> : <NavegationBar/> }
            <h1 className="text-white text-4xl font-bold">Gestion de página</h1>
            <ManagerBox token={token} description= "Ver perfiles" action={() => router.push("/admin/profiles")} />
            <ManagerBox token={token} description= "Agregar deporte" action={() => router.push("/admin/addSport")}/>
            <ManagerBox token={token} description= "Agregar Evento" action="null"/>
            <ManagerBox token={token} description= "Ver pedidos de validación" action="null"/>
            <ManagerBox token={token} description= "Agregar resultados" action="null"/>

        </main>
    )
}