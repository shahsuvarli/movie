"use client";

import React, { useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MoviesNew from "./components/MoviesNew";
import { getMovies } from "@/utils";

export default function Home() {
  const carousel = [
    { id: 0, title: "New releases" },
    { id: 1, title: "Continue Watching" },
    { id: 2, title: "Popular on Netflix" },
    { id: 3, title: "Trending Now" },
    { id: 4, title: "Casual Viewing" },
  ];
  const [data, setData] = React.useState([]);

  useEffect(() => {
    (async () => {
      const data = await getMovies();
      console.log(data, "data");
      setData(data);
    })();
  }, []);

  if (!data.results) {
    return <div>Loading...</div>;
  }
  const randMovie =
    data.results[Math.floor(Math.random() * data.results.length)];

  return (
    <main className="z-100 relative">
      <Header />
      <Banner randMovie={randMovie} />
      <div className="relative -mt-48 px-16 bg-gradient-to-t from-85% from-[#141414]">
        {carousel.map(({ id, title }) => (
          <MoviesNew data={data} title={title} key={id} />
        ))}
      </div>
    </main>
  );
}
// bg-gradient-to-t from-40% from-[#141414]
