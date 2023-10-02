"use client";

import Crew from "@/components/Crew";
import Recommendation from "@/components/Recommendations";
import Videos from "@/components/Videos";
import {
  getCredits,
  getKeywords,
  getMovie,
  getRecommendations,
  getVideos,
} from "@/utils";
import Image from "next/image";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import { FaImdb } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";

function MovieDetail({ params }) {
  const [movie, setMovie] = useState();
  const [genres, setGenres] = useState();
  const [keywords, setKeywords] = useState([]);
  const [credits, setCredits] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const movie = await getMovie(params.movie_id);
      const keywords = await getKeywords(params.movie_id);
      const credits = await getCredits(params.movie_id);
      const recommendations = await getRecommendations(params.movie_id);
      const videos = await getVideos(params.movie_id);
      const genres = movie.genres.map((item) => item.name).join(" • ");
      setCredits(credits);
      setKeywords(keywords.keywords);
      setGenres(genres);
      setRecommendations(recommendations.results);
      setVideos(videos.results);
      setMovie(movie);
    })();
  }, []);

  if (!movie) {
    return <div>Movie is loading...</div>;
  }

  return (
    <div className="text-white pt-24 min-h-screen flex flex-col justify-center items-center relative gap-4">
      <Image
        width={2000}
        height={2000}
        alt="background"
        className="absolute top-0 w-full -z-50 object-cover opacity-25"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
      />
      <div></div>
      <div className="w-[80%] min-h-[500px] bg-[#1414147e] flex md:flex-row md:justify-normal p-8 gap-8 box-border items-center justify-center flex-col border-[0.5px] border-slate-300 rounded-md">
        <div className="border-[0.5px] border-slate-300 rounded-md">
          <span className="h-5/6 min-h-[350px] w-[300px] relative  hover:cursor-pointer transition-all duration-200 flex flex-col bg-transparent gap-2 items-center justify-center group">
            <Image
              width={300}
              height={300}
              // fill
              priority
              className="object-cover rounded-t-lg w-full group-hover:blur-md transition-all duration-300"
              alt={`${movie.title}-poster`}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
            <div className="absolute hidden group-hover:flex justify-center items-center gap-2 font-medium transition-all duration-200">
              <MdOutlineZoomOutMap size={30} />
              <p>Expand</p>
            </div>
          </span>
          <span className="flex flex-col gap-2 p-2 box-border font-medium text-center text-slate-300 text-sm rounded-b-md w-[300px]">
            {movie.tagline}
          </span>
        </div>

        <div className="flex gap-2 flex-col md:items-baseline items-start h-full">
          <span className="text-3xl mb-8 text-center w-full md:text-left">
            {movie.title} ({movie.release_date.slice(0, 4)})
          </span>

          <span className="flex flex-row gap-3 items-center flex-wrap justify-center w-full md:justify-start">
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
              className="hover:cursor-pointer"
            >
              <FaImdb size={35} color="#f3ce13" />
            </a>
            <span className="flex text-xs gap-2 text-slate-200">{genres}</span>

            <span className="flex flex-row gap-4">
              {movie.production_countries.map((flag) => {
                const flag_url = `https://flagsapi.com/${flag.iso_3166_1}/shiny/64.png`;
                return (
                  <Image
                    // fill
                    width={30}
                    height={30}
                    priority
                    alt={`${movie.title}-poster`}
                    src={flag_url}
                    key={flag.iso_3166_1}
                  />
                );
              })}
            </span>
          </span>

          <p className="text-wrap text-sm text-slate-300 text-center md:text-justify md:mr-[20%]">
            {movie.overview}
          </p>
          <p>{numeral(movie.runtime).format("00:00:00").slice(2)}</p>
          <p>
            {movie.vote_average.toFixed(1)}/10 ({movie.vote_count} votes)
          </p>
          <div className="flex flex-row flex-wrap gap-2 mt-4 justify-center md:justify-start">
            {keywords.map((item) => (
              <span
                key={item.id}
                className="bg-[#e8e8e8] rounded-md px-2 text-slate-600 text-sm hover:cursor-pointer hover:bg-slate-500 hover:text-white"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Crew credits={credits} />
      <Recommendation movies={recommendations} />
      <Videos videos={videos}/>
    </div>
  );
}

export default MovieDetail;
