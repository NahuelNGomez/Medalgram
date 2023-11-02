import FeaturedTournament from "./FeaturedTornament";



export default function FeaturedTournaments() {
    const sport1 = "/sport1.jpg"
    const sport2 = "/sport2.jpg"
    return (
        <section className="grid grid-col-4 gap-3 w-full">
            <div className="col-span-4 flex ml-20 text-lg">
                    <h1>Torneos destacados</h1>
            </div>
            <FeaturedTournament image={sport1}/>
            <FeaturedTournament image={sport2}/>
        </section>

    )
}