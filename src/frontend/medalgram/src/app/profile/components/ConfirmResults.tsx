"use client";
import { useState } from "react";
import Image from "next/image";
import PendingResult from "@/app/profile/components/PendingResult";

export default function ProfileInfo() {
  // Hacer get del perfil
  return (
    <main className="h-full rounded-2xl flex bg-dark2 col-span-2">
      <div className="flex flex-col">
        <div className="flex text-[48px] px-[12px] justify-center justify-self-center">
          Resultados sin confirmar
        </div>
        <PendingResult />
      </div>
    </main>
  );

  /* left-[350px] absolute */
}
