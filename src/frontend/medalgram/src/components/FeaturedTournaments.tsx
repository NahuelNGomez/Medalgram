import FeaturedTournament from "./FeaturedTornament";



export default function FeaturedTournaments() {
    const sport1 = "/sport1.jpg"
    const sport2 = "/sport2.jpg"
    return (
        <section className="grid grid-cols-4 gap-3 w-full">
            <div className="col-span-4 flex ml-20 text-lg mx-10 p-2 bg-gradient-to-r from-dark2 to-emerald-500/0 to-60%">
                <h1 className="text-2xl tracking-widest text-white font-bold text-white/70 z-10">Torneos destacados</h1>
            </div>
            <FeaturedTournament image={sport1} />
            <FeaturedTournament image={sport2} />
            
        </section>

    )
}