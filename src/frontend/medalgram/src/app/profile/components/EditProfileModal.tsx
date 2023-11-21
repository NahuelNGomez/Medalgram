"use client";
import { useState } from "react";
import Image from "next/image";

export default function EditProfileModal({ cancelFunction }: any) {
  // Hacer get del perfil
  return (
    <section className='absolute grid place-items-center w-[100%] h-[100%] bg-[#111]/70 bottom-0 left-0'>
      <div className='flex flex-col gap-20 border-2 border-gray-100 rounded-3xl items-center justify-center bg-dark2'>
        <div className="flex flex-col	justify-around py-[8px] px-[24px] w-[1200px]">
          <div className="text-[64px] justify-left flex">Editar Perfil</div>
          <div className="grid grid-cols-2 gap-[30px]">
            <div className="flex flex-row">
              <div className="px-[30px]">Nombre: </div>
              <input></input>
            </div>
            <div className="flex flex-row ">
              <div className="px-[30px]">Edad: </div>
              <input></input>
            </div>
            <div className="flex flex-row">
              <div className="px-[23px]">Ubicacion: </div>
              <input></input>
            </div>
            <div className="flex flex-row ">
              <div className="px-[26px]">Avatar: </div>
              <input></input>
            </div>
          </div>
          <div className="flex justify-end pt-[30px]">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              GUARDAR
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded" onClick={cancelFunction}>
              CANCELAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  /* left-[350px] absolute */
}
