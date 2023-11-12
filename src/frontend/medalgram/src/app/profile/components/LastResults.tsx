"use client";
import { useState } from "react";
import Image from "next/image";
import PreviewResult from "@/app/profile/components/PreviewResult";

export default function ProfileInfo() {
  // Hacer get del perfil
  return (
    <main className="h-[25rem] rounded-2xl bg-dark2 relative px-[20px] w-full">
      <div className="flex flex-col py-[20px]">
        <div className="flex flex-row justify-between items-center">
          <div className="flex text-[48px]">Ultimos resultados</div>
          <button className="bg-dark0 text-[30px] px-[20px]">
            Ver todos los resultados
          </button>
        </div>
        <PreviewResult />
      </div>
    </main>
  );

  /* left-[350px] absolute */
}
