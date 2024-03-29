"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import NavegationBar from "@/components/NavegationBar";
import NavegationBarLogged from "@/components/NavegationBarLogged";
import SearchBar from "@/components/SearchBar";
import Sport from "@/components/Sport";
import { BASE_PATH } from "@/constants/constants";
import { sportMock } from "@/objects/mocks/mock";
import { useEffect, useState } from "react";

export default function Sports() {
  const [sports, setSports] = useState<Array<any>>([]);

  useEffect(() => {
    fetch(BASE_PATH + "/sports")
      .then((response) => {
        return response.json()
      })
      .then((data) => setSports(data));
  }, []);

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
    if (document.cookie !== 'token=null' && document.cookie !== '') {
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
          placeholder="Buscar Deporte"
          onChange={(e) => {
            setFilterInput(e.toString().toLowerCase());
          }}
        />
      </article>
      <section className="mt-6 grid grid-cols-2 gap-6">
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
                id={sport.id}
                title={sport.name}
                description={sport.description}
              />
            );
          })}
      </section>
    </main>
  );
}
