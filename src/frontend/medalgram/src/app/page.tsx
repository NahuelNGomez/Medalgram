"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react'
import NavegationBar from '../components/NavegationBar'
import Presentation from '../components/Presentation'
import FeaturedTournaments from '../components/FeaturedTournaments'
import NavegationBarLogged from '@/components/NavegationBarLogged';
import { useRouter } from 'next/navigation';
import {BASE_PATH} from '@/constants/constants';

export default function Home() {
  const [backendPetitionState, setBackendPetitionState] = useState('Loading');
  const router = useRouter();

  const [logged, setLogged] = useState(false);
  const handleClick = async () => {
    const resultValue = await fetch(BASE_PATH + '/counter', {
      method: "POST"
    });
    const value = (await resultValue.json()).result;
    setBackendPetitionState(value);
  }
  useEffect(() => {
    if (document === undefined) return;
    if (document.cookie !== 'token=null' && document.cookie !== '') {
      setLogged(true);
    }
  },[])

  return (
    <main className="flex flex-col items-center justify-between">
      {
        logged === true ? <NavegationBarLogged /> : <NavegationBar />
      }
      {/*<div>{backendPetitionState}</div>*/}
      <Presentation />
      <FeaturedTournaments />
      
    </main>
    
  )
}
