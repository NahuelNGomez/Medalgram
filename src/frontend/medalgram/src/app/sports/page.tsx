"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import NavegationBar from "@/components/NavegationBar";
import NavegationBarLogged from "@/components/NavegationBarLogged";
import SearchBar from "@/components/SearchBar";
import Sport from "@/components/Sport";
import { useEffect, useState } from "react";

export default function Sports() {
  const [sports, setSports] = useState<Array<any>>([]);
  useEffect(() => {
    fetch("https://grupo-3.2023.tecnicasdedisenio.com.ar/api/sports")
      .then((response) => response.json())
      .then((data) => setSports(data));
  }, []);
  /* const sports = [
    { title: "Deporte 1", description: "Descripcion Deporte 1" },
    { title: "Deporte 2", description: "Descripcion Deporte 2" },
    { title: "Deporte 3", description: "Descripcion Deporte 3" },
    { title: "Deporte 4", description: "Descripcion Deporte 4" },
  ]; */
  const [filterInput, setFilterInput] = useState("");
  const [logged, setLogged] = useState(false);

  const breadcrumb = [
    {
      title: "Deportes",
      url: "/sports",
    },
  ];

  useEffect(() => {
    if (document === undefined) return;
    if (document.cookie === 'username=True') {
      setLogged(true);
    }
  },[])

  return (
    <main>
      {
        logged === true ? <NavegationBarLogged /> : <NavegationBar />
      }
      <article className="col-span-1 border flex items-center justify-between outline-transparent border-transparent pt-6">
        <Breadcrumbs items={breadcrumb} />
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
              ? sport.name.toLowerCase().includes(filterInput)
              : true;
          })
          .map((sport) => {
            return (
              <Sport
                key={sport.id}
                title={sport.name}
                description={sport.description}
              />
            );
          })}
      </section>
    </main>
  );
}
