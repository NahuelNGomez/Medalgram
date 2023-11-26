"use client";
import NavegationBar from "@/components/NavegationBar";
import ProfileInfo from "@/app/profile/components/ProfileInfo";
import ConfirmResults from "@/app/profile/components/ConfirmResults";
import LastResults from "@/app/profile/components/LastResults";
import EditProfileModal from "./components/EditProfileModal";
import { useEffect, useState } from "react";
import NavegationBarLogged from "@/components/NavegationBarLogged";
import AddResultModal from "./components/AddResultModal";
import { useRouter } from "next/navigation";
import { verifyToken } from "@/objects/mocks/functions";
import { data } from "autoprefixer";
import Loading from "@/components/Loading";

export default function Sports() {
  // Hacer get del perfil
  const [logged, setLogged] = useState(false);

  const [modalProfile, setModalProfile] = useState(false);
  const [modalNewResult, setModalNewResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<any>(null);
  const [token, setToken] = useState<any>(null);
  const router = useRouter();

  const closeEditProfile = () => {
    setModalProfile(false);
  };

  const editProfile = () => {
    setModalProfile(true);
  };

  const closeNewResult = () => {
    setModalNewResult(false);
  };

  const newResult = () => {
    setModalNewResult(true);
  };

  useEffect(() => {
    if (document === undefined) {
    }
    if (verifyToken(document.cookie)) {
      setLogged(true);
      setToken(verifyToken(document.cookie));
    } else {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    if (logged === false) {
      setLoading(false);
      return;
    }
    fetch("https://grupo-3.2023.tecnicasdedisenio.com.ar/api/api/me", {
      method: "GET",
      headers: {
        token: token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => setUserData(data))
      .catch((error) => {
        router.push("/createProfile");
        console.log("No hay datos del usuario - debe crearse un perfil");
      });
  }, [logged]);

  useEffect(() => {
    if (userData == null) {
      return;
    }
    if (userData.first.mode === "ADMIN") {
      router.push("/admin");
    }
  }, [userData]);

  if (userData == null) {
    return <Loading />;
  }

  return (
    <main>
      {logged === true ? <NavegationBarLogged /> : <NavegationBar />}
      {loading === true ? (
        <div>Cargando...</div>
      ) : (
        <div className="">
          {/* <div className="pt-[50px] pl-[130px] text-3xl">
            @{userData.second.username}
          </div> */}
          <div className="grid grid-cols-6 h-[100px] pr-[30px] pl-[20px] gap-[30px]">
            <div className="col-span-4">
              <ProfileInfo
                editProfile={editProfile}
                closeEditProfile={closeEditProfile}
                userData={userData}
              />
            </div>
            <div className="col-span-2">
              <ConfirmResults />
            </div>
            <div className="col-span-4">
              <LastResults
                newResult={newResult}
                closeNewResult={closeNewResult}
                token={token}
              />
            </div>
          </div>
        </div>
      )}
      {modalProfile === true && (
        <EditProfileModal
          cancelFunction={closeEditProfile}
          userData={userData}
          token={token}
        />
      )}

      {modalNewResult === true && (
        <AddResultModal cancelFunction={closeNewResult} token={token} />
      )}
    </main>
  );
}
