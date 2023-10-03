"use client";

import Image from "next/legacy/image";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

function Banner({ randMovie }) {
  const router = useRouter();
  return (
    <React.Fragment>
      <div className="flex justify-center flex-wrap items-center flex-col w-full h-screen relative">
        <div className="w-full h-full absolute">
          <Image
            layout="fill"
            objectFit="cover"
            alt="background"
            className="absolute top-0 w-full -z-50"
            src={`https://image.tmdb.org/t/p/original${randMovie.backdrop_path}`}
          />
        </div>
        <div className="w-full flex relative">
          <div className="flex flex-col w-full absolut gap-6 z-10 text-white px-10">
            <p className="md:text-5xl text-3xl w-4/5">
              {randMovie.title}
            </p>
            <p className="md:w-2/5 w-full">
              {randMovie.overview.split(".")[0]}
            </p>
            <div className="flex  gap-4">
              <button
                className="bg-white text-black min-w-40 h-10 px-4 rounded flex flex-row items-center justify-evenly hover:cursor-pointer gap-2"
                onClick={() => router.push(`/movie-detail/${randMovie.id}`)}
              >
                <FaPlay />
                <span>Play</span>
              </button>
              <button
                className="bg-zinc-300/50 text-white w-40 h-10 rounded flex justify-evenly items-center hover:cursor-pointer dash"
                onClick={() => router.push(`/movie-detail/${randMovie.id}`)}
              >
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

export default Banner;
