import Image from 'next/image'

interface componentsArgs {
    image: string;
}

export default function FeaturedTournament({ image }: componentsArgs) {
    return (
        <article className="col-span-2 ml-5 flex justify-center items-center bg-dark2/50 w-4/5 my-4 rounded-xl">
            <div className="flex items-center justify-between w-1/5 align-items justify-content opacity-50">
                <Image
                    src={image}
                    alt="Descripción de la imagen"
                    layout="responsive"
                    width={300}
                    height={200}
                />
            </div>
        </article>
    )
}