import { getLanguage } from "@/utils";
import React from "react";
import LangMovies from "./LangMovies";

export default async function Language({ searchParams }) {
  const wait = () => new Promise((resolve) => setTimeout(resolve, 3000));
  await wait();
  const movies = await getLanguage(searchParams.code, searchParams.page);

  return <LangMovies movies={movies} />;
}
