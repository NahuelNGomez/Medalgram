"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProfileInfo() {
  // Hacer get del perfil
  return (
    <main className="h-[25rem] rounded-2xl justify-self-center justify-center flex bg-dark2 relative">
      <div className="flex flex-row	justify-around py-[8px] px-[24px]">
        <div className="align-middle flex pr-[24px]">
          <div className="align-middle flex">
            <Image
              src="/avatar.svg"
              alt="Descripción de la imagen"
              width={200}
              height={200}
            />
          </div>
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
