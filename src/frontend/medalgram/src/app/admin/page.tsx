"use client"
import { useEffect, useState } from "react";
import ManagerBox from "../../components/ManagerBox";
import NavegationBarAdmin from "@/components/NavegationBarAdmin";
import { verifyToken, viewProfiles } from "@/objects/mocks/functions";
import NavegationBar from "@/components/NavegationBar";
import { useRouter } from "next/navigation";



export default function Admin() {

    const verifyAdminToken = (router: any, auxToken: any) => {

        fetch('https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/me', {
            method: 'GET',
            headers: { 'token': auxToken },
        }).then((response) => { if (response.ok) return response.json() })
            .then((data: any) => {
                if (data.first.mode !== "ADMIN") {
                    console.error("No tiene permisos para acceder a esta página.")
                    router.push("/profile")
                }
            })
    }

    const router = useRouter()
    const [logged, setLogged] = useState(false);
    const [token, setToken] = useState<any>(null);

    useEffect(() => {
        if (document === undefined) return;
        if (verifyToken(document.cookie) != false) {
            setLogged(true);
            setToken(verifyToken(document.cookie))
            verifyAdminToken(router, verifyToken(document.cookie))
        } else {
            router.push("/login")
        }
    }, [])

    return (
        <main className="flex flex-col items-center justify-center">
            {token != null ? <NavegationBarAdmin /> : <NavegationBar />}
            <h1 className="text-white text-4xl font-bold pt-20 pb-10">Gestion de página</h1>
            <section className="flex flex-col items-start justify-start h-[100vh]">

                <ManagerBox token={token} description="Ver perfiles" action={() => router.push("/admin/profiles")} />
                <ManagerBox token={token} description="Agregar deporte" action={() => router.push("/admin/addSport")} />
                <ManagerBox token={token} description="Agregar Evento" action={() => router.push("/admin/addEvent")} />
                <ManagerBox token={token} description="Ver pedidos de validación" action={() => router.push("/admin/validateResults")} />
                <ManagerBox token={token} description="Agregar resultados" action={() => router.push("/admin/addResults")} />
            </section>

        </main>
    )
}