"use client";
import { useState } from "react";
import Image from "next/image";

export default function EditProfileModal({
  cancelFunction,
  userData,
  token,
}: any) {
  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { elements } = event.currentTarget;
    const name = elements.namedItem("name") as HTMLInputElement;
    const age = elements.namedItem("age") as HTMLInputElement;
    const location = elements.namedItem("location") as HTMLInputElement;
    const profile_photo = elements.namedItem(
      "profile_photo"
    ) as HTMLInputElement;

    if (
      !name ||
      !age ||
      !profile_photo ||
      !location ||
      name.value == "" ||
      age.value == "" ||
      profile_photo.value == "" ||
      location.value == ""
    ) {
      console.error("Por favor, complete todos los campos.");
      return;
    }

    fetch("https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/me/", {
      method: "PUT",
      headers: { "Content-Type": "application/json", token: token },
      body: JSON.stringify({
        name: name.value,
        age: age.value,
        location: location.value,
        //profile_photo: profile_photo.value
      }),
    })
      .then((response) => {
        if (response.ok) window.location.reload();
      })
      .catch((error) => {
        console.error("Error al actualizar los datos:", error);
      });
  };

  return (
    <section className="absolute grid place-items-center w-[100%] h-[100%] bg-[#111]/70 bottom-0 left-0">
      <form
        className="flex flex-col gap-20 border-2 border-gray-100 rounded-3xl items-center justify-center bg-dark2"
        onSubmit={handlerSubmit}
      >
        <div className="flex flex-col	justify-around py-[8px] px-[24px] w-[1200px]">
          <div className="text-4xl justify-left flex m-4 mb-10 underline">
            Editar Perfil
          </div>
          <div className="grid grid-cols-2 gap-[30px]">
            <div className="flex flex-row">
              <label className="px-[30px]">
                Nombre:{" "}
                <input
                  className="text-black shadow border-2 focus:border-green-500 rounded w-[  0%] py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={userData.second.name || ""}
                ></input>
              </label>
            </div>
            {/* <div className="flex flex-row ">
              <label className="px-[30px]">
                Edad:{" "}
                <input
                  className="text-black"
                  type="text"
                  id="age"
                  name="age"
                  defaultValue={userData.second.age || ""}
                ></input>
              </label>
            </div> */}

            <div className="flex flex-row items-center">
              <label htmlFor="Edad" className="pl-8 pr-4">
                Edad:
              </label>
              <input
                type="number"
                id="age"
                name="age"
                defaultValue={userData.second.age || ""}
                min={1}
                className="text-black shadow border-2 focus:border-green-500 rounded w-[12%] py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"
              ></input>
            </div>

            <div className="flex flex-row">
              <label className="px-[23px]">
                Ubicacion:{" "}
                <input
                  className="text-black shadow border-2 focus:border-green-500 rounded w-[40%] py-2 px-2 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="location"
                  name="location"
                  defaultValue={userData.second.location || ""}
                ></input>
              </label>
            </div>
            <div className="flex flex-row ">
              <label className="px-[26px]">
                Imagen de Perfil:{" "}
                <input
                  //className="text-black shadow border-2 focus:border-green-500 rounded w-[80%] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  className="rounded-md p-2 py-2 px-3 w-[80%] leading-tight"
                  type="file"
                  id="profile_photo"
                  name="profile_photo"
                ></input>
              </label>
            </div>
          </div>
          <div className="flex justify-end pt-[30px]">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
              GUARDAR
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
              onClick={cancelFunction}
            >
              CANCELAR
            </button>
          </div>
        </div>
      </form>
    </section>
  );

  /* left-[350px] absolute */
}
