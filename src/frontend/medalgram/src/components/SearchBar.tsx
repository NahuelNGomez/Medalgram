"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";

interface componentsArgs {
  placeholder: string;
  onChange: (input: string) => void;
}
export default function SearchBar({ placeholder, onChange }: componentsArgs) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };
  return (
    <article className="col-span-1 border flex flex-row">
      <input
        type="search"
        placeholder={placeholder}
        className="h-[32px] w-[700px] text-black gap-2 ps-4"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <button type="button">
        <Image
          src="/search.svg"
          alt="Search icon"
          width={32}
          height={32}
          className="fill-white bg-dark1 align-bottom"
        />
      </button>
    </article>
  );
}
