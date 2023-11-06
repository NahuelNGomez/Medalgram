"use client";
import NavegationBar from "@/components/NavegationBar";
import ProfileInfo from "@/components/ProfileInfo";
import { useState } from "react";

export default function Sports() {
  // Hacer get del perfil
  return (
    <main>
      <NavegationBar />
      <div className="absolute start-36 top-32 text-[64px]">
        Perfil del corredor 0001
      </div>
      <ProfileInfo />
    </main>
  );
}
