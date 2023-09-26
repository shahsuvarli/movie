"use client";

import Image from "next/legacy/image";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

function Main({ randMovie }) {
  return (
    <React.Fragment>
      <div className="flex justify-center flex-wrap items-center flex-col w-full h-screen relative -z-10 bg-red-400">
        <div className="w-full h-full absolute">
          <Image
            layout="fill"
            objectFit="cover"
            alt="background"
            className="absolute top-0 w-full -z-50"
            src={
              "https://image.tmdb.org/t/p/original/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg"
              // `https://image.tmdb.org/t/p/original${randMovie.backdrop_path}`
            }
          />
        </div>
        <div className="w-full flex relative">
          <div className="flex flex-col w-full absolut gap-6 z-10  text-white px-10">
            <p className="text-6xl w-2/5">{randMovie.original_title}</p>
            <p className="w-2/5">{randMovie.overview.split(".")[0]}</p>
            <div className="flex justify-between gap-4 w-1/5">
              <button className="bg-white text-black w-40 h-10 rounded flex flex-row items-center justify-evenly">
                <FaPlay />
                <span>Play</span>
              </button>
              <button className="bg-zinc-300/30 text-white w-60 h-10 rounded flex justify-evenly items-center">
                <AiOutlineInfoCircle size={23} />
                <span>More Info</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;
