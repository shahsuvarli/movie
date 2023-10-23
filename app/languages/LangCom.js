"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

function LangCom({ langs }) {
  const [selectedLangs, setSelectedLangs] = useState(langs);
  const router = useRouter();

  const handleSearch = (event) => {
    const input = event.target.value.toLowerCase();
    const newLangs = langs.filter((item) =>
      item.name.toLowerCase().includes(input)
    );
    setSelectedLangs(newLangs);
  };
  return (
    <div className="p-4">
      <div className="text-slate-300 mt-16 p-8 flex justify-center items-center flex-wrap gap-2">
        <h3 className="text-white float-left w-full text-xl mb-4">
          Select a language
        </h3>
        <input
          type="text"
          className="w-full border-[0.5px] border-slate-200 text-black p-2 mb-4 outline-none"
          onChange={handleSearch}
          placeholder="I want to watch a movie in ..."
        />
        {selectedLangs?.map((item) => (
          <div
            className="border-[0.5px] border-slate-200 p-2 hover:cursor-pointer w-full hover:bg-white hover:text-black hover:pl-8 transition-all duration-500 active:text-sm h-[43px] flex items-center"
            key={item.code}
            onClick={() =>
              router.push(
                `/languages/lang?code=${item.code}&lang=${item.name}&page=1`
              )
            }
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LangCom;
