import Image from "next/image";

export default function Comment({id, content, date, idRunner}:any) {

    return (
        <article className="flex flex-wrap">
            <Image className="inline pr-6 w-[10%]" src="/vercel.svg" width={50} height={50} alt={""} />
            <div className="flex flex-col ">
                <strong>{idRunner} - {date} </strong>
                <p>{content}</p>
            </div>
        </article>
    )
}