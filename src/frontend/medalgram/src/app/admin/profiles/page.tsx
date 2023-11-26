"use client"
import Loading from "@/components/Loading";
import NavegationBarAdmin from "@/components/NavegationBarAdmin";
import { verifyToken, viewProfiles } from "@/objects/mocks/functions"
import { useEffect, useState } from "react"

export default function Profiles(token: any) {
    const [profiles, setProfiles] = useState<JSON | any>(null);
    const [tokenAux, setTokenAux] = useState<any>(null);

    useEffect(() => {
        if (document === undefined) return;
        setTokenAux(verifyToken(document.cookie))
    }, [])

    const printData = async () => {
        try {
            const data = await viewProfiles(tokenAux);
            setProfiles(data)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        printData()
    }, [tokenAux])


    if (profiles == null) {
        return (<Loading/>)
      }

    return (

        <main className="flex flex-col items-center">
            <NavegationBarAdmin />
            <h1 className="text-white text-4xl font-bold">Gestion de usuarios</h1>
            {
                profiles.map((profile: any) => (
                    <div key={profile.id} className="flex flex-col items-center justify-center border py-8 my-8">
                        <h1 className="text-white text-2xl font-bold">Nombre: {profile.email}</h1>
                        <h1 className="text-white text-2xl font-bold">Token: {profile.id}</h1>
                        <h1 className="text-white text-2xl font-bold">Mode: {profile.mode}</h1>
                    </div>
                )
                )
            }
        </main>
    )

}