"use client";

import Image from "next/image";
import React from "react";

function Main() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=1b0710c2d7ea099af51c2b0b40d2d35f",
        { cache: "no-cache" }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await res.json();
      setData(jsonData);
    };
    getData();
  }, []);

  if (!data.results) {
    return <div>Loading...</div>;
  }

  const randMovie =
    data.results[Math.floor(Math.random() * data.results.length)];

  return (
    <div className="flex justify-center flex-wrap items-center flex-col absolute top-0 -z-50 w-full">
      <div className="w-full relative flex items-center">
        <img
          className="w-full h-screen"
          src={
            // "https://image.tmdb.org/t/p/original/{hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg}"
            `https://image.tmdb.org/t/p/original${randMovie.backdrop_path}`
          }
        />
        <div className="flex flex-col absolute left-10 text-white gap-6">
          <p className="text-6xl w-2/5">{randMovie.original_title}</p>
          <p className="w-2/5">{randMovie.overview}</p>
          <div className="flex justify-between gap-4 w-1/5">
            <button className="bg-white text-black w-40 h-10 rounded flex flex-row items-center justify-evenly">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 fill-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
              <span>Play</span>
            </button>
            <button className="bg-zinc-300/50 text-white w-60 h-10 rounded flex justify-evenly items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-row gap-2 -mt-40 overflow-x-scroll w-full bg-white">
        {data.results.map((item) => (
          <span
            key={item.original_title}
            className="hover:scale-150 cursor-pointer transition-all ease-in-out duration-300 z-50 hover:mx-5"
          >
            <Image
              src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
              width={200}
              height={500}
              alt={item.original_title}
              className="w-40"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Main;
