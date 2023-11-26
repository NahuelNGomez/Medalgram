"use client";
import { useState } from "react";

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
        profile_photo: profile_photo.value,
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
            <div className="mb-6 px-8 row-span-2 w-full flex justify-center items-center">
                            <div className='w-full block text-white text-sm font-bold mb-2'> Seleccione un ícono</div>
                            {[
                                { id: 'image1', src: 'icons/pingpong.png' },
                                { id: 'image2', src: 'icons/tenis.png' },
                                { id: 'image3', src: 'icons/basquet.png' },
                                { id: 'image4', src: 'icons/football.png' },
                                { id: 'image5', src: 'icons/volley.png' },
                            ].map((image) => (
                                <div key={image.id} className="flex flex-col items-center mb-4 mx-5">
                                    <img src={image.src} className={`rounded-full mb-2 width="50px" `} />
                                    <input
                                        id={image.src}
                                        type="radio"
                                        name="image"
                                        value={image.src}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                </div>
                            ))}
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
