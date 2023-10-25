"use client";

import Banner from "@/components/Banner";
import MoviesNew from "@/components/MoviesNew";
import React from "react";

function HomeCom({ banner, carousel, genres }) {
  return (
    <main className="z-100 relative">
      <Banner randMovie={banner} />
      <div className="relative -mt-48 px-8 bg-gradient-to-t from-85% from-[#141414]">
        {carousel.map(({ id, title, list }) => (
          <MoviesNew data={list} title={title} key={id} genres={genres} />
        ))}
      </div>
    </main>
  );
}

export default HomeCom;
