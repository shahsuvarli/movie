"use client";

import React, { useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MoviesNew from "./components/MoviesNew";
import { getMovies } from "@/utils";

export default function Home() {
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
      <div className="relative">
        <MoviesNew data={data} initial={true} title={"New release"} />
        <MoviesNew data={data} title={"hey"} />
        <MoviesNew data={data} />
      </div>
    </main>
  );
}
