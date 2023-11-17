"use client";
import NavegationBar from "@/components/NavegationBar";
import ProfileInfo from "@/app/profile/components/ProfileInfo";
import ConfirmResults from "@/app/profile/components/ConfirmResults";
import LastResults from "@/app/profile/components/LastResults";
import EditProfileModal from "./components/EditProfileModal";
import { useEffect, useState } from "react";
import NavegationBarLogged from "@/components/NavegationBarLogged";

export default function Sports() {
  // Hacer get del perfil
  const [logged, setLogged] = useState(false);
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
      <EditProfileModal />
      <div className="flex flex-col">
        <div className="pt-[50px] pl-[130px] text-[64px]">
          Perfil del corredor 0001
        </div>
        <div className="grid grid-cols-6 pl-[130px] pr-[30px] gap-[30px]">
          <div className="col-span-4 grid grid-rows-2 gap-[30px]">
            <ProfileInfo />
            <LastResults />
          </div>
          <ConfirmResults />
        </div>
      </div>
    </main>
  );
}
