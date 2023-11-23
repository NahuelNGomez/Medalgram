"use client";
import { useState } from "react";
import Image from "next/image";
import PendingResult from "@/app/profile/components/PendingResult";

export default function ProfileInfo() {
  // Hacer get del perfil
  return (
    <main className="rounded-2xl bg-dark2 col-span-2">
      <div className="flex flex-col items-center justify-center pt-10">
        <strong className="text-3xl px-[12px]">
          Resultados sin confirmar
        </strong>
       <PendingResult />
      </div>
    </main>
  );

  /* left-[350px] absolute */
}
