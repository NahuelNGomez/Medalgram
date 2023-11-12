import Link from "next/link";

export default function PreviewEvent() {
  return (
    <main className="flex flex-wrap w-full my-4 ">
      <div className="border bg-dark3 w-1/5 py-2 flex align-content justify-center items-center">
        23 AGO
      </div>
      <div className="bg-dark2 w-4/5 text-white grid grid-cols-2 bg-gradient-to-r from-dark1 to-dark1">
        <div className="col-span-1 flex flex-wrap flex-col justify-center pl-4 ">
          {/* <div className="row-span-1 flex flex-wrap flex-row justify-between  ">
            <p>Titulo</p>
            <p>Posicion: #3</p>
          </div>
          <p>Tiempo: 23 minutos 3 segundos</p> */}
          <div className="row-span-1 flex flex-wrap flex-row justify-around">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#25e009"
              stroke-width="2"
              stroke-linecap="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff2616"
              stroke-width="2"
              stroke-linecap="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffbf16"
              stroke-width="2"
              stroke-linecap="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
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
