import Image from "next/image";
export default function NavegationBar() {
  return (
      <div className="flex justify-center items-center py-5 w-[80%]">
          <div className="flex h-full w-full items-center justify-center mx-auto px-8">
            <div className=" flex flex-col items-center w-full justify-center">
              <section className="relative flex flex-col justify-start items-center w-full my-4 rounded-xl h-[400px]">
                <img className="absolute object-cover h-[400px] w-full overflow-hidden object-top z-0" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.roadrunnersports.com%2Fblog%2Fwp-content%2Fuploads%2F2021%2F06%2FRunning-at-Night-Group-of-Girls-Running.jpg"></img>
              <h1 className="text-3xl sm:text-5xl tracking-widest text-white lg:text-7xl font-bold text-white/70 z-10">
                Medalgram
              </h1>
                <img
                  src="https://i.ibb.co/hCwXjMC/principal.png"
                  className="h-[300px] w-[300px] filter brightness-90 z-10"
                  alt="principal Logo"
                />
              </section>
            </div>
          </div>

          <div className="absolute bottom-4 right-4">
            <h3 className="opacity-50 text-xl">By bugHunters</h3>
          </div>
      </div>
  );
}
