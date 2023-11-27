import { BASE_PATH } from "@/constants/constants";
import Image from "next/image";
import { use, useEffect, useState } from "react";

export default function Comment({ id, content, date, username }: any) {
    const [runner, setRunner] = useState<any>(null);

    useEffect(() => {
        /*update to a particular runner */
        fetch(BASE_PATH + '/runners/')
            .then((response) => {
                return response.json()
            })
            .then((data) => setRunner(data))
            .catch((error) => {
                console.error('Error al cargar el comentario:', error);
            })
    }, [])

    return (
        <article className="flex flex-wrap">
            {
                runner ? runner.filter(
                    (runner:any) => runner.first === username
                ).map((runner: any) => {
                    return <img src={runner.second} width={50} height={50} alt={""} className="rounded-full mx-4" />
                }) : ""
            }
            <div className="flex flex-col ">
                <strong>{username} - {date && new Date(date).toString().split(" ").slice(1, 4).join(" ")} </strong>
                <p>{content}</p>
            </div>
            <div className="border w-full mt-4 border-dark2"></div>
        </article>
    )
}