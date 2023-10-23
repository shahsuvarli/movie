import {
  getCredits,
  getKeywords,
  getMovie,
  getRecommendations,
  getVideos,
} from "@/utils";
import React from "react";
import MovieCom from "./MovieCom";

export default async function MovieDetail({ params }) {
  const media_type = "movie";

  const movie = await getMovie(params.movie_id, media_type);
  const keywords = await getKeywords(params.movie_id, media_type);
  const credits = await getCredits(params.movie_id, media_type);
  const recommendations = await getRecommendations(params.movie_id, media_type);
  const videos = await getVideos(params.movie_id, media_type);
  const genres = movie.genres?.map((item) => item.name).join(" • ");

  return (
    <MovieCom
      movie={movie}
      credits={credits}
      recommendations={recommendations}
      keywords={keywords}
      videos={videos}
      genres={genres}
    />
  );
}
