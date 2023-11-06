import Image from "next/image";

export default function Comment() {




    return (

        <article className="flex flex-wrap">
            <Image className="inline pr-6 w-[10%]" src="/vercel.svg" width={50} height={50} alt={""} />
            <div className="flex flex-col ">
                <strong>Nombre - fecha </strong>
                <p>Ejemplo de un comentario </p>
            </div>
        </article>
    )
}