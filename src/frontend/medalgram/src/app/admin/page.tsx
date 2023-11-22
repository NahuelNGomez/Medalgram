"use client"
import { useEffect, useState } from "react";
import ManagerBox from "../../components/ManagerBox";
import NavegationBarAdmin from "@/components/NavegationBarAdmin";
import { verifyToken, viewProfiles } from "@/objects/mocks/functions";
import NavegationBar from "@/components/NavegationBar";

export default function Admin(){
    const [logged, setLogged] = useState(false);
    const [token, setToken] = useState<any>(null);

    useEffect(() => {
        if (document === undefined) return;
        if (verifyToken(document.cookie) != false) {
            setLogged(true);
            setToken(verifyToken(document.cookie))
        }
    }, [])


    return (
        <main className="flex flex-col items-center justify-center">
            {token != null ? <NavegationBarAdmin/> : <NavegationBar/> }
            <h1 className="text-white text-4xl font-bold">Gestion de página</h1>
            <ManagerBox description= "Ver perfiles" action={() => viewProfiles(token)}/>
            <ManagerBox description= "Agregar deporte" action="null"/>
            <ManagerBox description= "Agregar Evento" action="null"/>
            <ManagerBox description= "Ver pedidos de validación" action="null"/>
            <ManagerBox description= "Agregar resultados" action="null"/>

        </main>
    )
}