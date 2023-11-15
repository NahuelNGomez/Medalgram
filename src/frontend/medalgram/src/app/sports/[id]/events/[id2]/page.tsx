import Comments from "@/components/Comments";
import NavegationBar from "@/components/NavegationBar";
import PreviewEvent from "@/components/PreviewEvent";
import Image from "next/image";



export default function Page({ params } :any) {

    const {slug} = params;

    return (
        <section className="flex flex-col justify-center items-center">
            <NavegationBar />
            <div className="flex flex-wrap justify-between p-5 w-full ">
                <p>Breadcrumbs/RUTA</p>
            </div>
            <article className="flex flex-col bg-dark2/50 justify-center items-center w-4/5 py-10 relative rounded-3xl">
                <h2 className="text-xl">EVENT NAME</h2>
                <div className="absolute px-20 py-0.5 text-gray-300 text-xs bg-dark1 bottom-0 ">EVENT DATE</div>
                <div className="absolute px-5 py-0.5 text-gray-300 text-xs bg-dark1 ml-4 bottom-0 right-0 rounded-br-3xl">Ed. 1</div>
            </article>
            <table className="w-4/5 mt-5">
                <thead>
                    <tr>
                        <th className="bg-dark1 font-normal p-1">Datos útiles</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-dark2/50 text-black font-semibold">
                        <td className="p-1">
                            <svg className=" inline mr-2 h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Date
                        </td>
                    </tr>
                    <tr className="bg-dark3 text-black font-semibold">
                        <td className="p-1">
                            <svg className="inline mr-2 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Location
                        </td>
                    </tr>
                    <tr className="bg-dark2/50 text-black font-semibold">
                        <td className="p-1">
                            <svg className="inline mr-2 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            Url
                        </td>
                    </tr>
                    <tr className="bg-dark3 text-black font-semibold">
                        <td className="p-1">
                            <Image className="inline  mr-2" src="/distance.png" width={30} height={30} alt={""} />
                            Kms
                        </td>
                    </tr>

                </tbody>

            </table>
            <section className="mt-4 w-4/5">
                <Comments />
            </section>

        </section>




    );
}