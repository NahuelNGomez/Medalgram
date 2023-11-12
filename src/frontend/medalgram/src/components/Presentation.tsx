import Image from 'next/image'
export default function NavegationBar() {
    return (
        <section className="flex flex-col justify-center items-center bg-dark2/50 w-4/5 my-4 rounded-xl">
            <div className="flex items-center justify-between w-1/5 align-items justify-content opacity-50">
                <Image
                    src="https://i.ibb.co/hCwXjMC/principal.png"
                    alt="Descripción de la imagen"
                    layout="responsive"
                    width={300}
                    height={200}
                />
            </div>
            <div>
                <h3 className='opacity-50 text-xl'>Medalgram - By bugHunters</h3></div>
        </section>
    )
}