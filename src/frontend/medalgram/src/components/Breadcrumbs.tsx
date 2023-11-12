import Link from "next/link";

export default function Breadcrumbs({ items }: any) {

    return (
        <nav className="mx-6 mt-6">
            <ol className="">
                {
                    items.map((item: any, index: number) => (
                        <li className={index == 0 ? 'breadcrumb-item active inline' : 'breadcrumb-item inline'} key={index}>
                            <p className="inline">  / </p>
                            <Link href={item.url}>{item.title}</Link>
                        </li>
                    ))
                }
            </ol>
        </nav>
    )
}