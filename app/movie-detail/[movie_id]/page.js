"use client";

import { getMovie } from "@/utils";
import Image from "next/image";
import numeral from "numeral";
import React, { useEffect, useState } from "react";

function MovieDetail({ params }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    (async () => {
      const movie = await getMovie(params.movie_id);
      setMovie(movie);
    })();
  }, []);

  if (!movie) {
    return <div>Movie is loading..</div>;
  }

  return (
    <div className="text-white pt-24 h-screen flex flex-col justify-center items-center relative">
      <Image
        fill
        alt="background"
        className="absolute top-0 w-full -z-50 object-cover opacity-25"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
      />
      <div className="w-[90%] h-[500px] bg-[#14141455] flex flex-row justify-normal p-8 gap-4">
        <span className="w-2/5 h-5/6 relative rounded-lg">
          <Image
            fill
            className="object-contain rounded-lg"
            alt="background"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          />
        </span>
        <div className="flex gap-2 flex-col">
          <h3 className="text-3xl ">{movie.title}</h3>
          <p>{movie.release_date}</p>
          <p className="text-wrap text-sm text-[#afadad] w-2/4">
            {movie.overview}
          </p>
          <span className="flex flex-row text-sm gap-2">
            {movie.genres.map((genre) => {
              return <p>{genre.name}</p>;
            })}
          </span>
          <p>{numeral(movie.budget).format("$0.0a")}</p>
          <p>{numeral(movie.revenue).format("$0.0a")}</p>
          <p>{numeral(movie.runtime).format("00:00:00").slice(2)}</p>
          <p>{movie.vote_average.toFixed(1)}/10</p>
          <span className="flex flex-row">
            {movie.production_companies.map((item) => {
              return (
                <Image
                  width={50}
                  height={50}
                  className="object-cover"
                  alt="background"
                  src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
                />
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
