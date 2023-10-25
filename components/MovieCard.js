"use client";

import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import { useRouter } from "next/navigation";
import Image from "next/image";

function MovieCard({ movie, genres }) {
  const router = useRouter();
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    const selectedGenres = genres.filter((obj) =>
      movie.genre_ids.includes(obj.id)
    );
    const data = selectedGenres.map((item) => item.name).join(" • ");
    setSelectedGenres(data);
  }, []);

  return (
    <div
      className="w-[216px] snap-start group rounded-md hover:z-1000 shadow-2xl"
      onClick={() => router.push(`/movie-detail/${movie.id}`)}
    >
      <div className="w-[216px] hover:cursor-pointer group-hover:scale-[1.5] transition duration-500 rounded-md">
        <Image
          width={256}
          height={100}
          sizes="200px"
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          className="rounded-md group-hover:rounded-b-none h-auto"
        />
        <div className="hidden group-hover:flex min-h-20 flex-col pt-2 px-2 pb-2 bg-[#2b2b2b] rounded-b-md">
          <div className="flex flex-row justify-center">
            <div className="w-full flex jusify-center items-start gap-2 hover:cursor-auto">
              <span className="rounded-full hover:cursor-pointer border-solid border-[1px] border-white w-6 h-6 flex justify-center items-center bg-white group-hover:cursor-pointer">
                <FaPlay size={10} color="black" />
              </span>
              <span className="rounded-full hover:cursor-pointer border-solid border-[1px] border-white w-6 h-6 flex justify-center items-center">
                <AiOutlinePlus size={10} />
              </span>
              <span className="rounded-full hover:cursor-pointer border-solid border-[1px] border-white w-6 h-6 flex justify-center items-center">
                <SlLike size={10} />
              </span>
            </div>
            <span className="mr-8 font-normal rounded-full border-solid border-[1px] border-white w-8 h-6 flex justify-center items-center box-border">
              <p className="text-[9px]">{movie.vote_average}</p>
            </span>
          </div>
          <span className=" text-xs mt-2">{movie.title}</span>
          <div className="flex flex-row justify-between w-full">
            <span className="text-[8px] mt-2 text-[#bababa]">
              {selectedGenres}
            </span>
            {/* <span className="text-[9px] mt-2 text-[#bababa]">
              {movie.release_date.slice(0, 4)}
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
