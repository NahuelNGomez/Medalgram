interface SportProps {
    params: {id: number}
}

export default function Page({params: {id}}: SportProps) {

    return (
        <div>Esto es un evento del deporte id:{id}</div>
    );
}