import Link from "next/link";

interface componentsArgs {
    title: string;
    id: number;
    description: string;
}
export default function Sport({ id, title, description }: componentsArgs) {

    return (
        <article className="col-span-1 border text-xl">
            <div className="flex justify-center items-center bg-dark1 w-full p-2"><h3>{title}</h3></div>
            <div className="bg-dark3 w-full flex flex-col justify-center text-base items-center"><p className="text-black p-3">{description}</p>
                <Link href={`/sports/${id}/events`} className="nav-link link-body-emphasis active" aria-current="page">
                    <div className="flex flex-wrap justify-center items-center px-8 py-0.5 rounded-3xl text-base text-gray-300 bg-dark1">Ver carreras
                        <svg className="pl-3 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </Link>
            </div>

        </article>
    )
}