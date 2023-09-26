import React from "react";
import MovieCard from "./MovieCard";

function MoviesNew({ data, initial, title }) {
  return (
    <React.Fragment>
      <div
        className={
          "text-white min-h-[370px] -mt-40 flex flex-row w-full overflow-scroll snap-x snap-mandatory justify-center items-start gap-2 overflow-y-hidden p-16 relative"
        }
      >
        <span className="z-20 text-white font-bold text-xl left-0 top-6 absolute">
          <p>{title}</p>
        </span>
        {data.results.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default MoviesNew;
