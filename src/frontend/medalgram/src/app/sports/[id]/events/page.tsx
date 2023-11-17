import NavegationBar from "@/components/NavegationBar";
import PreviewEvent from "@/components/PreviewEvent";
import Breadcrumbs from "@/components/Breadcrumbs";
import NavegationBarLogged from "@/components/NavegationBarLogged";

interface SportProps {
    params: { id: number }
}

export default function Page({ params: { id } }: SportProps) {

    const breadcrumb = [
        {
            title: 'Deportes',
            url: '/sports'
        },
        {
            title: 1 + ' / Eventos',
            url: '/sports/' + 1 + '/events'
        }
    ];

    return (
        <main className="flex flex-col">
            {
                document.cookie === 'username=True' ? <NavegationBarLogged /> : <NavegationBar />
            }
            <Breadcrumbs items={breadcrumb} />
            <div className="flex flex-wrap justify-between p-10">
                <div className="border p-2 px-40">Buscador</div>
            </div>
            <PreviewEvent />
            <PreviewEvent />
            <PreviewEvent />
            <PreviewEvent />
        </main>
    );
}