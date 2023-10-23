"use client";

import React, { useEffect } from "react";
import Banner from "../components/Banner";
import MoviesNew from "../components/MoviesNew";
import {
  getGenre,
  getMovies,
  getNowPlaying,
  getPopular,
  getUpcoming,
} from "@/utils";
import bannerMovies from "../asset/banner-movies.json";

export default function Home() {
  const [movies, setMovies] = React.useState([]);
  const [genres, setGenres] = React.useState([]);
  const [toprated, setToprated] = React.useState([]);
  const [upcoming, setUpcoming] = React.useState([]);
  const [nowPlaying, setNowPlaying] = React.useState([]);
  const [banner, setBanner] = React.useState({});

  const carousel = [
    { id: 0, title: "New Releases", list: movies },
    { id: 1, title: "Now Playing", list: nowPlaying },
    { id: 2, title: "Top Rated", list: toprated },
    { id: 3, title: "Upcoming", list: upcoming },
  ];

  useEffect(() => {
    const getData = async () => {
      const movies = await getMovies();
      const genres = await getGenre();
      const toprated = await getPopular();
      const upcoming = await getUpcoming();
      const nowPlaying = await getNowPlaying();
      setMovies(movies);
      setGenres(genres);
      setToprated(toprated);
      setUpcoming(upcoming);
      setNowPlaying(nowPlaying);

      const banner =
        bannerMovies[Math.floor(Math.random() * bannerMovies.length)];
      setBanner(banner);
    };

    getData();
  }, []);

  if (!movies.results) {
    return <div>Loading...</div>;
  }

  return (
    <main className="z-100 relative">
      <Banner randMovie={banner} />
      <div className="relative -mt-48 px-8 bg-gradient-to-t from-85% from-[#141414]">
        {carousel.map(({ id, title, list }) => (
          <MoviesNew data={list} title={title} key={id} genres={genres} />
        ))}
      </div>
    </main>
  );
}
// bg-gradient-to-t from-40% from-[#141414]
