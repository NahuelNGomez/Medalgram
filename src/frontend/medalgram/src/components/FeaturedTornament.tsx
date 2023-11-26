import Image from 'next/image'

interface componentsArgs {
    image: string;
}

export default function FeaturedTournament({ image }: componentsArgs) {
    return (
        <article className="col-span-2 ml-5 flex justify-center items-center my-4 rounded-xl">
            <div className="flex items-center justify-between align-items justify-content opacity-70 border-8 border-dark2 shadow-lg shadow-dark2 hover:scale-[1.10] transition duration-500">
                <img
                    src={image}
                    alt="Imagen de evento"
                    width={250}
                    height={200}
                />
            </div>
        </article>
    )
}