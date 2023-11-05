import Breadcrumbs from "@/components/Breadcrumbs";
import NavegationBar from "@/components/NavegationBar";
import Sport from "@/components/Sport";

export default function Sports() {
    const breadcrumb = [
        {
            title: 'Deportes',
            url: '/sports'
        },
    ];
    return (
        <main>
            <NavegationBar />
            <Breadcrumbs items={breadcrumb} />
            <section className="mt-6 grid grid-cols-3 gap-4">
                <Sport title={"Deporte 1"} description={"Descripcion Deporte 1"} />
                <Sport title={"Deporte 2"} description={"Descripcion Deporte 2"} />
                <Sport title={"Deporte 3"} description={"Descripcion Deporte 3"} />
                <Sport title={"Deporte 4"} description={"Descripcion Deporte 4"} />
            </section>
        </main>
    )
}