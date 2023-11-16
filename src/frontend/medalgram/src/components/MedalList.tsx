import Image from 'next/image'
export default function MedalList() {


    return (
        <aside className="flex items-center justify-center">
            <section className="flex flex-col justify-center items-center bg-dark2/50 w-4/5 my-4 rounded-xl">
                <div className="flex items-center justify-between align-items justify-content opacity-50 gap-8">
                    <div className="min-h-[200px] flex flex-col items-center justify-center ">
                        <Image src="/medal2.png" width={150} height={200} alt={"Medalla plata"} />
                        <strong>Medallas de Plata</strong>
                        <strong>2</strong>
                    </div>
                    <div className="min-h-[200px] flex flex-col items-center justify-center">
                        <Image src="/medal1.png" width={200} height={200} alt={"Medalla oro"} />
                        <strong>Medallas de Oro</strong>
                        <strong>2</strong>
                    </div>
                    <div className="min-h-[200px] flex flex-col items-center justify-center">
                        <Image src="/medal3.png" width={120} height={200} alt={"Medalla bronce"} />
                        <strong>Medallas de Bronce</strong>
                        <strong>5</strong>
                    </div>
                </div>
            </section>
        </aside>

    )
}