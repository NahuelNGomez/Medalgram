"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProfileInfo({ editProfile, userData }: any) {
  // Hacer get del perfil
  return (
    <main className="h-[20rem] rounded-2xl justify-self-center justify-center grid grid-cols-3 bg-dark2 relative w-full">
      <div className="py-3">
        <div className="flex justify-center items-right">
          <Image
            src="/avatar.svg"
            alt="Descripción de la imagen"
            width={220}
            height={150}
          />
        </div>
        <div className="pt-[5px] pl-[100px] text-2xl">
          @{userData.second.username}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold underline pt-8 pb-20">
          Información de perfil
        </h3>
        <div>
          <p className="text-xl">
            <p className="inline underline font-bold">Nombre:</p>{" "}
            {userData !== null && userData !== undefined
              ? userData.second.name
              : "Cargando"}
          </p>
          <p className="text-xl py-2">
            <p className="inline underline font-bold">Edad:</p>{" "}
            {userData !== null && userData !== undefined
              ? userData.second.age + " años"
              : "Cargando"}
          </p>
          <p className="text-xl">
            <p className="inline underline font-bold">Ubicación:</p>{" "}
            {userData !== null && userData !== undefined
              ? userData.second.location
              : "Cargando"}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="pt-10">
          <button
            className="py-2 bg-dark3 rounded-xl text-black w-[150px] 2xl:w-[200px] 2xl:text-[20px] hover:bg-dark0 hover:text-white transition duration-300 border-4 border-gray-400 hover:border-blue-400 font-bold text-gray-600"
            onClick={editProfile}
          >
            Editar Perfil
          </button>
        </div>
        <div className="py-5">
          <Link href="/stats">
            <button className="py-2  bg-dark3 rounded-xl text-black w-[150px] 2xl:w-[200px] 2xl:text-[20px] hover:bg-dark0 hover:text-white transition duration-300 border-4 border-gray-400 hover:border-blue-400 font-bold text-gray-600">
              Ver Estadísticas
            </button>
          </Link>
        </div>
      </div>
    </main>
  );

  /* left-[350px] absolute */
}
