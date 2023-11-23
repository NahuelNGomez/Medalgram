"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PreviewResult from "@/app/profile/components/PreviewResult";

export default function ProfileInfo({ newResult, closeNewResult }: any) {
  // Hacer get del perfil
  return (
    <main className="h-[25rem] rounded-2xl bg-dark2 relative px-[20px] w-full">
      <div className="flex flex-col py-[20px]">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold underline">Información de perfil</h3>
          <button className=" bg-green-300 rounded-3xl text-black w-[150px] 2xl:w-[300px] 2xl:text-[20px] hover:bg-dark0 hover:text-white transition duration-3 00" onClick={newResult}>
            Cargar un resultado
          </button>
          <Link href="/profile/results">
            <button className=" bg-dark3 rounded-3xl text-black w-[150px] 2xl:w-[300px] 2xl:text-[20px] hover:bg-dark0 hover:text-white transition duration-3 00">
              Ver Todos los resultados
            </button>
          </Link>
        </div>
        <PreviewResult />
      </div>
    </main>
  );

  /* left-[350px] absolute */
}
