import Image from "next/image";
export default function NavegationBar() {
  return (
    <div>
      <div className="flex justify-center items-right py-5">
        <img
          className="opacity-70"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.roadrunnersports.com%2Fblog%2Fwp-content%2Fuploads%2F2021%2F06%2FRunning-at-Night-Group-of-Girls-Running.jpg&f=1&nofb=1&ipt=0482570100ad56a775c27cf69cbce76f902a006ddba6f7047c91f3f40e638611&ipo=images"
          alt="Descripción de la imagen"
          width={800}
          height={640}
        />

        <section className="bg-cover relative">
          <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
            <div className="max-w-2xl text-center flex flex-col items-center">
              <h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl">
                Medalgram
              </h1>

              <section className="flex flex-col justify-center items-center bg-dark2/50 w-5/5 my-4 rounded-xl">
                <img
                  src="https://i.ibb.co/hCwXjMC/principal.png"
                  className="h-[300px] w-[300px]"
                  alt="principal Logo"
                />
              </section>
            </div>
          </div>

          <div className="absolute bottom-4 right-4">
            <h3 className="opacity-50 text-xl">By bugHunters</h3>
          </div>
        </section>
      </div>
    </div>
  );
}
