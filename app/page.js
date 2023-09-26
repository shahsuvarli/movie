"use client";

import React, { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Movies from "./components/Movies";
import MoviesNew from "./components/MoviesNew";
import CenterMode from "./components/Slicker";
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
      <Main randMovie={randMovie} />
      {/* <div className="bg-gradient-to-t from-90% from-bg-black  -mt-40"> */}
      {/* <div className="bg-gradient-to-t from-90% from-bg-black -mt-40"> */}
      <div className="relative">
        <MoviesNew data={data} initial={true} title={'New release'} />
        {/* <CenterMode /> */}
        <MoviesNew data={data} title={'hey'} />
        <MoviesNew data={data} />
      </div>
    </main>
  );
}
