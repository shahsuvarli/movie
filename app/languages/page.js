"use client";

import { getLanguages } from "@/utils";
import React, { useEffect, useState } from "react";

function Languages() {
  const [langs, setLangs] = useState();
  const [selectedLangs, setSelectedLangs] = useState([]);

  useEffect(() => {
    (async () => {
      const langs = await getLanguages();
      setLangs(langs);
      setSelectedLangs(langs);
    })();
  }, []);

  const handleSearch = (event) => {
    const input = event.target.value.toLowerCase();
    const newLangs = langs.filter((item) =>
      item.name.toLowerCase().includes(input)
    );
    console.log(input);
    setSelectedLangs(newLangs);
  };

  if (!selectedLangs) {
    return <div className="text-white pt-24">Loading...</div>;
  }

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
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Languages;
