import React from "react";
import MovieCard from "./MovieCard";

function MoviesNew({ data, initial, title }) {
  return (
    <React.Fragment>
      <div
        className={`text-white h-80 flex flex-row w-full ${
          initial ? "-mt-60 bg-gradient-to-t from-40% from-[#141414]" : "bg-[#141414] -mt-20"
        }  overflow-scroll snap-x snap-mandatory justify-center items-center gap-2 overflow-y-hidden p-16`}
      >
        <span className="z-20 absolute text-white font-bold text-lg left-8 top-12">
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
