import NavegationBar from "@/components/NavegationBar";

export default function Signup() {

    return (
        <main className="flex flex-col justify-center items-center">
            <NavegationBar />
            <div className="w-full max-w-xl mt-4">

                <form className="bg-dark2/50 shadow-md rounded-3xl pt-6 mb-4">
                    <div className="flex justify-center items-center">
                        <h2 className="text-white my-4 text-3xl">Crear Cuenta</h2>
                    </div>
                    <div className="mb-4 px-8 ">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input className="shadow appearance-none bg-dark3/80 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200" id="username" type="text" placeholder="Introduce tu email" />
                    </div>
                    <div className="mb-6 px-8 ">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input className="shadow appearance-none bg-dark3/80 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200" id="password" type="password" placeholder="Introduce tu contraseña" />
                        {/*<p className="text-red-500 text-xs italic">Please choose a password.</p>*/}
                    </div>
                    <div className="flex items-center justify-between px-8">
                        <a className="inline-block align-baseline text-sm underline text-gray-400 hover:text-white" href="/login">
                            Iniciar Sesión
                        </a>
                        <a className="inline-block align-baseline underline text-sm text-gray-400 hover:text-white" href="#">
                            Términos y Condiciones
                        </a>
                    </div>
                    <div className="w-full pt-5"><button className="w-full bg-white rounded-b-3xl hover:bg-blue-700 text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="button">
                        Iniciar Sesión
                    </button></div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2023 BugHunters. All rights reserved.
                </p>
            </div>
        </main>
    )
}