"use client";
import NavegationBar from "@/components/NavegationBar";
import SearchBar from "@/components/SearchBar";
import Sport from "@/components/Sport";
import { useState } from "react";

export default function Sports() {
  const sports = [
    { title: "Deporte 1", description: "Descripcion Deporte 1" },
    { title: "Deporte 2", description: "Descripcion Deporte 2" },
    { title: "Deporte 3", description: "Descripcion Deporte 3" },
    { title: "Deporte 4", description: "Descripcion Deporte 4" },
  ];
  const [filterInput, setFilterInput] = useState("");
  return (
    <main>
      <NavegationBar />
      <article className="col-span-1 border flex items-center justify-between outline-transparent border-transparent pt-6">
        <div>Deportes / Iron man</div>
        <SearchBar
          placeholder="Buscar Evento"
          onChange={(e) => {
            setFilterInput(e.toString().toLowerCase());
          }}
        />
      </article>
      <section className="mt-6 grid grid-cols-3 gap-4">
        {sports
          .filter((sport) => {
            return filterInput.length > 0
              ? sport.title.toLowerCase().includes(filterInput)
              : true;
          })
          .map((sport) => {
            return (
              <Sport
                key={sport.title}
                title={sport.title}
                description={sport.description}
              />
            );
          })}
      </section>
    </main>
  );
}
