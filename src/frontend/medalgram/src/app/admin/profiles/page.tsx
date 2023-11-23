"use client"
import NavegationBarAdmin from "@/components/NavegationBarAdmin";
import { viewProfiles } from "@/objects/mocks/functions"
import { useEffect, useState } from "react"

export default function Profiles(token: any) {
    const [profiles, setProfiles] = useState<JSON | any>(null);

    const printData = async () => {
        try {
            const data = await viewProfiles(token);
            setProfiles(data)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        printData()
    }, [])


    if (profiles == null) {
        return (<div className="container text-center">
            <div className="row align-items-center">
                <div className="col my-4">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>)
    }

    return (

        <main className="flex flex-col items-center">
            <NavegationBarAdmin />
            <h1 className="text-white text-4xl font-bold">Gestion de usuarios</h1>
            {
                profiles.map((profile: any) => (
                    <div key={profile.token} className="flex flex-col items-center justify-center border py-8 my-8">
                        <h1 className="text-white text-2xl font-bold">Nombre: {profile.email}</h1>
                        <h1 className="text-white text-2xl font-bold">Token: {profile.token}</h1>
                        <h1 className="text-white text-2xl font-bold">Mode: {profile.mode}</h1>
                    </div>
                )
                )
            }
        </main>
    )

}