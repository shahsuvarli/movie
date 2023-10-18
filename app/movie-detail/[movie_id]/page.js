"use client";

import Crew from "@/components/Crew";
import FullPoster from "@/components/FullPoster";
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

  const [expand, setExpand] = useState(false);

  const media_type = "movie";

  useEffect(() => {
    (async () => {
      const movie = await getMovie(params.movie_id, media_type);

      const keywords = await getKeywords(params.movie_id, media_type);
      const credits = await getCredits(params.movie_id, media_type);
      const recommendations = await getRecommendations(
        params.movie_id,
        media_type
      );
      const videos = await getVideos(params.movie_id, media_type);
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
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
            : "https://fakeimg.pl/200x200/f1f1f1?text= &font=museo"
        }
      />
      <div className="w-[80%] min-h-[500px] bg-[#1414147e] flex md:flex-row md:justify-normal p-8 gap-8 box-border items-center justify-center flex-col border-[0.5px] border-slate-300 rounded-md">
        <div className="border-[0.5px] border-slate-300 rounded-md">
          <span
            className="h-5/6 min-h-[350px] w-[300px] relative hover:cursor-pointer transition-all duration-200 flex flex-col bg-transparent gap-2 items-center justify-center group"
            onClick={() => setExpand(true)}
          >
            <Image
              width={300}
              height={300}
              // fill
              priority
              className="object-cover rounded-t-lg w-full group-hover:blur-md transition-all duration-300"
              alt={`${movie.title}-poster`}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : "https://fakeimg.pl/200x200/f1f1f1?text= &font=museo"
              }
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
          <span className="text-3xl mb-6 text-center w-full md:text-left">
            {movie.title}{" "}
            {movie.release_date ? `(${movie.release_date.slice(0, 4)})` : ""}
          </span>

          <span className="flex flex-row gap-1 self-center md:self-start border border-1 border-slate-400 px-2 py-1 rounded-md mb-2">
            <p className="text-slate-200">
              {movie.vote_count ? movie.vote_average.toFixed(1) : "no votes"}
            </p>
            <p className="text-slate-400 text-xs flex items-end">
              {movie.vote_count ? "/10" : ""}
            </p>
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
                return (
                  <Image
                    width={30}
                    height={30}
                    priority
                    alt={`${movie.title}-poster`}
                    src={`https://flagsapi.com/${flag.iso_3166_1}/shiny/64.png`}
                    key={flag.iso_3166_1}
                  />
                );
              })}
            </span>
          </span>

          <p className="text-wrap text-sm text-slate-300 text-center md:text-justify md:mr-[20%]">
            {movie.overview || "There is no movie description"}
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
      <Videos videos={videos} />
      <div
        className={
          expand
            ? "fixed w-full h-screen bg-[#c7c5c5c0] top-0 z-1000 flex justify-center items-center"
            : "hidden"
        }
        onClick={() => setExpand(false)}
      >
        <FullPoster image={movie.poster_path} />
      </div>
    </div>
  );
}

export default MovieDetail;
