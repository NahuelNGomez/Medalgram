import Image from "next/image";
export default function NavegationBar() {
  return (
    <section className="py-10 bg-cover relative">
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

    // <section className="flex flex-col justify-center items-center bg-dark2/50 w-4/5 my-4 rounded-xl">
    //   <div className="flex items-center justify-center w-1/5 align-items justify-content opacity-50">
    //     <img
    //       src="https://i.ibb.co/hCwXjMC/principal.png"
    //       className="h-[300px] w-[300px]"
    //       alt="principal Logo"
    //     />
    //   </div>
    //   <div>
    //     <h3 className="opacity-50 text-xl">Medalgram - By bugHunters</h3>
    //   </div>
    // </section>
  );
}
