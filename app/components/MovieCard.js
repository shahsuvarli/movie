import React from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { SlLike } from "react-icons/sl";

function MovieCard({ movie }) {
  return (
    <div className="w-[216px] snap-start group rounded-md hover:z-1000 shadow-2xl">
      <div className="w-[216px] hover:cursor-pointer group-hover:scale-[1.5] transition duration-500 rounded-md">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          className="rounded-md group-hover:rounded-b-none"
        />
        <div className="hidden group-hover:flex h-20 flex-col pt-2 pl-2 bg-[#2b2b2b] rounded-b-md">
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
              <p className="text-xs">{movie.vote_average}</p>
            </span>
          </div>
          <span className="text-xs mt-2">{movie.title}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
