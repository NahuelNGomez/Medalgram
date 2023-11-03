import NavegationBar from "@/components/NavegationBar";
import PreviewEvent from "@/components/PreviewEvent";

interface SportProps {
    params: {id: number}
}

export default function Page({params: {id}}: SportProps) {

    return (
        <main className="flex flex-col">
           <NavegationBar/>
           <div className="flex flex-wrap justify-between p-10">
            <p>Breadcrumbs</p>
            <div className="border p-2 px-40">Buscador</div>
           </div>
            <PreviewEvent/>
            <PreviewEvent/>
            <PreviewEvent/>
            <PreviewEvent/>
        </main>


    );
}