import Link from "next/link";

export default function PreviewEvent() {
  return (
    <main className="flex flex-wrap w-full my-4 ">
      <div className="border bg-dark3 w-1/5 py-2 flex align-content justify-center items-center">
        23 AGO
      </div>
      <div className="bg-dark2 w-4/5 text-white grid grid-cols-2 bg-gradient-to-r from-dark1 to-dark1">
        <div className="col-span-1 flex flex-wrap flex-col justify-center pl-4 ">
          <div className="row-span-1 flex flex-wrap flex-row justify-between  ">
            <p>Titulo</p>
            <p>Posicion: #3</p>
          </div>
          <p>Tiempo: 23 minutos 3 segundos</p>
        </div>
        <div className="flex justify-center items-center py-4">
          <Link
            href={`/sports/` + 2 + "/events/" + 1}
            className="nav-link link-body-emphasis active"
            aria-current="page"
          >
            <div className="flex flex-wrap justify-center items-center px-8 py-3 text-xs text-gray-300 text-xl bg-dark0">
              Más información
              <svg
                className="pl-3 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* sin terminar */}
    </main>
  );
}
