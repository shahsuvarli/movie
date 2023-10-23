import {
  getCredits,
  getKeywords,
  getMovie,
  getRecommendations,
  getVideos,
} from "@/utils";
import React from "react";
import TvCom from "./TvCom";

export default async function MovieDetail({ params }) {
  const media_type = "tv";

  const movie = await getMovie(params.tv_id, media_type);
  const keywords = await getKeywords(params.tv_id, media_type);
  const credits = await getCredits(params.tv_id, media_type);
  const recommendations = await getRecommendations(params.tv_id, media_type);
  const videos = await getVideos(params.tv_id, media_type);
  const genres = movie.genres.map((item) => item.name).join(" • ");

  return (
    <TvCom
      keywords={keywords.results}
      videos={videos.results}
      recommendations={recommendations.results}
      credits={credits}
      genres={genres}
      movie={movie}
    />
  );
}
