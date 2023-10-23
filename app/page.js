import React from "react";
import {
  getGenre,
  getMovies,
  getNowPlaying,
  getPopular,
  getUpcoming,
} from "@/utils";
import bannerMovies from "../asset/banner-movies.json";
import HomeCom from "./HomeCom";

export default async function Home() {
  const movies = await getMovies();
  const genres = await getGenre();
  const toprated = await getPopular();
  const upcoming = await getUpcoming();
  const nowPlaying = await getNowPlaying();

  const carousel = [
    { id: 0, title: "New Releases", list: movies },
    { id: 1, title: "Now Playing", list: nowPlaying },
    { id: 2, title: "Top Rated", list: toprated },
    { id: 3, title: "Upcoming", list: upcoming },
  ];

  const banner = bannerMovies[Math.floor(Math.random() * bannerMovies.length)];

  return <HomeCom banner={banner} carousel={carousel} genres={genres} />;
}
