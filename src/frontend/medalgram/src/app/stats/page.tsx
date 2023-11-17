import Breadcrumbs from "@/components/Breadcrumbs";
import MedalList from "@/components/MedalList";
import NavegationBar from "@/components/NavegationBar";
import NavegationBarLogged from "@/components/NavegationBarLogged";

export default function Stats(){

    const breadcrumb = [
        {
            title: 'Corredor',
            url: '/profile'
        },
        {
            title:'Estadisticas',
            url: '/stats'
        }
    ];


    return (
        <main>
            {
                document.cookie === 'username=True' ? <NavegationBarLogged /> : <NavegationBar />
            }
            <Breadcrumbs items={breadcrumb}/>
            <section>
                <div className='flex flex-wrap items-center justify-items-start border justify-between px-10'>
                    <h2 className="text-3xl">Estadísticas</h2>
                    <div>Publico/privado</div>
                </div>

                <MedalList></MedalList>
            </section>

        </main>
    )
}