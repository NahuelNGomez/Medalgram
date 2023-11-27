import Image from 'next/image'
import { BRONZE_MEDAL_PATH, SILVER_MEDAL_PATH, GOLD_MEDAL_PATH } from '@/constants/constants'

export default function MedalList({ stats }: any) {


    return (
        <aside className="flex flex-col items-center justify-center">
            <section className="flex flex-col justify-center items-center bg-dark2/50 w-4/5 my-4 rounded-xl">
                <div className="flex items-center justify-between align-items justify-content opacity-80 gap-8">
                    <div className="min-h-[200px] flex flex-col items-center justify-center ">
                        <Image src={SILVER_MEDAL_PATH} width={150} height={200} alt={"Medalla plata"} />
                        <strong>Medallas de Plata</strong>
                        <strong>{stats.totalSilver}</strong>
                    </div>
                    <div className="min-h-[200px] flex flex-col items-center justify-center">
                        <Image src={GOLD_MEDAL_PATH} width={200} height={200} alt={"Medalla oro"} />
                        <strong>Medallas de Oro</strong>
                        <strong>{stats.totalGold}</strong>
                    </div>
                    <div className="min-h-[200px] flex flex-col items-center justify-center">
                        <Image src={BRONZE_MEDAL_PATH} width={120} height={200} alt={"Medalla bronce"} />
                        <strong>Medallas de Bronce</strong>
                        <strong>{stats.totalBronze}</strong>
                    </div>
                </div>
            </section>
        </aside>

    )
}