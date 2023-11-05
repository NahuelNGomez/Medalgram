import NavegationBar from "@/components/NavegationBar";
import PreviewEvent from "@/components/PreviewEvent";

interface EventProps {
    params: {id: number}
}

export default function Page({params: {id}}: EventProps) {

    return (
        <main className="flex flex-col">
           <NavegationBar/>
           <div className="flex flex-wrap justify-between p-10">
            <p>Breadcrumbs/RUTA</p>
           </div>

           <article className="flex justify-center items-center mx-20">
                <div className="flex flex-col justify-center items-center bg-dark2 w-full text-s p-2 rounded-xl">
                    <h1 className="text-xl">EVENT NAME</h1>
                    <div>
                        <div className="grid px-20 py-0.5 text-gray-300 text bg-dark1">EVENT DATE</div>
                        <div className="grid px-20 py-0.5 text-gray-300 text bg-dark1 ml-4">Ed. 1</div>
                    </div>
                </div>
            </article>

            <div className="flex flex-col justify-center items-center bg-dark2 mt-10 mx-10">
                Datos útiles
                <div className="items-left px-2 active">date</div>
                <div>location</div>
                <div>url</div>
                <div>kms</div>
            </div>
        </main>




    );
}