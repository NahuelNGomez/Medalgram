"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProfileInfo() {
  // Hacer get del perfil
  return (
    <main className="h-[25rem] rounded-2xl justify-self-center justify-center flex bg-dark2 start-36 relative top-[200px]">
      <div className="flex flex-row	justify-around py-[8px] px-[12px]">
        <div>
          <Image
            src="/sport1.jpg"
            alt="Descripción de la imagen"
            width={290}
            height={290}
          />
        </div>
        <div className="flex flex-col justify-around">
          <div className="flex text-[48px] px-[12px]">
            Información de perfil
          </div>
          <div>
            <div className="flex text-[48px] px-[12px]">Lionel Messi</div>
            <div className="flex text-[48px] px-[12px]">23 años</div>
            <div className="flex text-[48px] px-[12px]">
              Buenos Aires, Argentina
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[340px]">
          <div className="py-[30px]">
            <button className="text-[30px] bg-dark3 rounded-3xl text-black w-[340px]">
              Editar Perfil
            </button>
          </div>
          <button className="text-[30px] bg-dark3 rounded-3xl text-black">
            Ver Estadísticas
          </button>
        </div>
      </div>
    </main>
  );

  /* left-[350px] absolute */
}
