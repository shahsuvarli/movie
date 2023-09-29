import React from "react";
import MovieCard from "./MovieCard";

function MoviesNew({ data, title, genres }) {
  return (
    <div className="text-white min-h-[370px] -mt-40 flex flex-row w-full overflow-scroll snap-x snap-mandatory justify-center items-start gap-2 overflow-y-hidden p-16 relative">

      <span className="z-20 text-white font-bold text-xl left-0 top-6 absolute">
        <p className="text-white z-1000 text-[17px]">{title}</p>
      </span>

      {data.results.map((movie) => (
        <MovieCard movie={movie} key={movie.id} genres={genres} />
      ))}
    </div>
  );
}

export default MoviesNew;
