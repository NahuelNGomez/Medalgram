import Image from "next/image";
import Comment from "@/components/Comment";

export default function Comments() {



    return (
        <>
            <h2 className="mb-4 text-xl">Comentarios</h2>
            <article className="flex flex-wrap">
                <Image className="inline pr-6 w-[10%]" src="/vercel.svg" width={50} height={50} alt={""} />
                <input type='text' placeholder="Escribe un comentario..." className="w-5/6 h-12 text-black p-2 text-xs"></input>
            </article>
            <div className="flex justify-center item-center">
            <div className="border my-6 w-[60%]"></div>
            </div>
            <div className="flex flex-col gap-8 text-xs">
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            </div>


        </>
    )
}