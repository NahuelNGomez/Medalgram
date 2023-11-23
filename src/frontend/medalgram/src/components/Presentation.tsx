import Image from 'next/image'
export default function NavegationBar() {
    return (
        <section className="flex flex-col justify-center items-center bg-dark2/50 w-4/5 my-4 rounded-xl">
            <div className="flex items-center justify-center w-1/5 align-items justify-content opacity-50">
                <img src="https://i.ibb.co/hCwXjMC/principal.png" className="h-[300px] w-[300px]" alt="principal Logo" />
            </div>
            <div>
                <h3 className='opacity-50 text-xl'>Medalgram - By bugHunters</h3></div>
        </section>
    )
}