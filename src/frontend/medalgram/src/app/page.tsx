"use client";
import Image from 'next/image'
import { useState } from 'react'
import NavegationBar from '../components/NavegationBar'
export default function Home() {
  const [backendPetitionState, setBackendPetitionState] = useState('Loading');
  const handleClick = async () => {
    const resultValue = await fetch(`https://grupo-3.2023.tecnicasdedisenio.com.ar/api/counter`, {
			method: "POST"
		});
		
		const value = (await resultValue.json()).result;
		setBackendPetitionState(value);

  }
  return (
    <main className="flex flex-col items-center justify-between">
      <NavegationBar/>
              {/*<div>{backendPetitionState}</div>*/}
      <div>this is a div</div>
    </main>
  )
}
