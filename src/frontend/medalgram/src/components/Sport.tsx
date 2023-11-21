import Link from "next/link";

interface componentsArgs {
    title: string;
    description: string;
    id: number;
}
export default function Sport({id, title, description }: componentsArgs) {

    const sportId = 1; // Modificable con la id del deporte - request api

    return (
        <article className="col-span-1 border">
            <div className="flex justify-center items-center bg-dark1 w-full text-s p-2"><h3>{title}</h3></div>
            <div className="bg-dark3 w-full flex flex-col justify-center text-xs items-center"><p className="text-black p-3">{description}</p>
                <Link href={`/sports/${id}/events`} className="nav-link link-body-emphasis active" aria-current="page">
                    <div className="flex flex-wrap justify-center items-center px-8 py-0.5 rounded-3xl text-xs text-gray-300 text-xl bg-dark1">Ver carreras
                        <svg className="pl-3 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </Link>
            </div>

        </article>
    )
}