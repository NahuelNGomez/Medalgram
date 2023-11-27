"use client"
import Image from "next/image";
import Comment from "@/components/Comment";
import { commentsMock } from "@/objects/mocks/mock";
import { useEffect, useState } from "react";
import { BASE_PATH } from "@/constants/constants";

export default function Comments({ token, logged, id2 }: any) {
    const [comments, setComments] = useState<any>(null);

    useEffect(() => {
        console.log(id2)
        if (id2 == null || id2 == undefined) return;
        fetch(BASE_PATH + "/events/" + id2 + "/comments")
            .then((response) => {
                return response.json()
            })
            .then((data) => setComments(data));
    }, [id2])

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { elements } = event.currentTarget
        const content = elements.namedItem('content') as HTMLInputElement

        if (!content || content.value == "") {
            console.error("Por favor, complete todos los campos.")
            return
        }

        fetch(BASE_PATH + '/events/' + id2 + '/comments', {
            method: 'POST',
            headers: { "Content-Type": "application/json", "token": token },
            body: JSON.stringify({
                content: content.value,
                date: new Date().toISOString()
            })
        }).then((response) => {
            if (response.ok) window.location.reload();
        })
            .catch((error) => {
                console.error('Error al cargar el comentario:', error);
            })

    }

    if (comments == null) {
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
        <>
            <h2 className="mb-4 text-xl">Comentarios</h2>


            {logged == true ? (
                <article className="flex flex-nowrap">
                    <img className="inline pr-6 w-[10%]" src="/vercel.svg" width={50} height={50} alt={""} />
                    <form onSubmit={handlerSubmit} className="w-full">
                        <input type='text' placeholder="Escribe un comentario..." id='content' name='content' className="w-5/6 h-12 text-black p-2 text-xs"></input>
                        <button type='submit' className="w-1/6 h-12 bg-dark1 text-white text-xs">Comentar</button>
                    </form>
                </article>
            ) : (<div>No estas iniciado sesion - No puedes comentar</div>)}
            <div className="flex justify-center item-center">
                <div className="border my-6 w-[60%]"></div>
            </div>
            <div>
                {comments !== null && comments.length > 0 ? (
                    comments.map((comment: any) => (
                        <Comment
                            key={comment.id}
                            id={comment.id}
                            content={comment.content}
                            idRunner={comment.tokenRunner}
                            date={comment.date}
                        />
                    ))
                ) : (
                    <p>No hay comentarios</p>
                )}
            </div>
        </>
    )
}
