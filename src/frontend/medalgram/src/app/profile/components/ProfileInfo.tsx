"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EditProfileModal from "./EditProfileModal";

export default function ProfileInfo({editProfile, closeEditProfile}: any) {
  
  // Hacer get del perfil
  return (
    <main className="h-[20rem] rounded-2xl justify-self-center justify-center grid grid-cols-3 bg-dark2 relative w-full">
      <div className="flex justify-center items-right">
        <Image
          src="/avatar.svg"
          alt="Descripción de la imagen"
          width={150}
          height={150}
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-bold underline pb-20">
          Información de perfil
        </h3>
        <div>
          <p className="text-xl">Lionel Messi</p>
          <p className="text-xl">23 años</p>
          <p className="text-xl">
            Buenos Aires, Argentina
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="py-10">
          <button className=" bg-dark3 rounded-3xl text-black w-[150px] 2xl:w-[300px] 2xl:text-[20px] hover:bg-dark0 hover:text-white transition duration-300" onClick={editProfile}>Editar Perfil</button>
        </div>
        <div className="w-[300px]">
          <Link href="/stats">
            <button className=" bg-dark3 rounded-3xl text-black w-[150px] 2xl:w-[300px] 2xl:text-[20px] hover:bg-dark0 hover:text-white transition duration-300">
              Ver Estadísticas
            </button>
          </Link>
        </div>
      </div>
      
    </main>
  );

  /* left-[350px] absolute */
}
