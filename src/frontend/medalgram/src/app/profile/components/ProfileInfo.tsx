"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProfileInfo() {
  // Hacer get del perfil
  return (
    <main className="h-[25rem] rounded-2xl justify-self-center justify-center flex bg-dark2 relative w-full">
      <div className="flex flex-row	justify-around py-[8px] px-[24px] w-full">
        <div className="align-middle flex pr-[24px]">
          <div className="align-middle flex">
            <Image
              src="/avatar.svg"
              alt="Descripción de la imagen"
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="flex flex-col justify-around">
          <div className="flex text-text-3xl px-[12px]">
            Información de perfil
          </div>
          <div>
            <div className="flex text-xl px-[12px]">Lionel Messi</div>
            <div className="flex text-xl px-[12px]">23 años</div>
            <div className="flex text-xl px-[12px]">
              Buenos Aires, Argentina
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[340px]">
          <div className="py-[30px]">
            <button className="text-[20px] bg-dark3 rounded-3xl text-black w-[300px]">
              Editar Perfil
            </button>
          </div>
          <div className="w-[300px]">
            <Link href="/stats">
              <button className="text-[20px] bg-dark3 rounded-3xl text-black w-full">
                Ver Estadísticas
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );

  /* left-[350px] absolute */
}
