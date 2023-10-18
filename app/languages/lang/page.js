"use client";

import { getLanguage } from "@/utils";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function Language() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const lang = searchParams.get("lang");
  const initPage = searchParams.get("page");
  const [page, setPage] = useState(+initPage);
  const [movies, setMovies] = useState();
  const router = useRouter();

  const handlePage = (param) => {
    if (param) {
      setPage(page + 1);
    } else {
      if (page == 1) {
        return null;
      } else {
        setPage(page - 1);
      }
    }
  };

  const getData = async () => {
    const movies = await getLanguage(code, page);
    setMovies(movies);
  };

  useEffect(() => {
    router.push(`?code=${code}&lang=${lang}&page=${page}`, { scroll: false });
    getData();
  }, [page]);

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white p-16 flex flex-col gap-4">
      <div className="mt-8 text-white">
        <p className="text-xl mb-8">
          Language: {lang} ({page})
        </p>
        <div className="grid grid-cols-auto gap-2 justify-between">
          {movies.results.length ? (
            movies.results.map((item) => (
              <span
                className="flex justify-center gap-2 text-white rounded-md px-2 py-1 border-slate-500 bg-white"
                key={item.id}
              >
                <div
                  className="rounded-md w-40 h-68 relative gap-1 flex flex-col"
                  onClick={() => router.push(`/movie-detail/${item.id}`)}
                >
                  <Image
                    src={
                      item.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                        : "https://fakeimg.pl/200x200/f1f1f1?text= &font=museo"
                    }
                    width={250}
                    height={150}
                    alt={`${item.title}-movie-poster`}
                    className="rounded-md w-42 h-60 object-cover hover:cursor-pointer"
                  />
                  <p className="text-slate-600 font-medium">{item.title}</p>
                </div>
              </span>
            ))
          ) : (
            <p>There is no data found for the {lang} language...</p>
          )}
        </div>
      </div>
      <div className="w-full text-black gap-4 flex flex-row justify-end child-hover:bg-slate-300 transition-all duration-300">
        <button
          className={`h-10 bg-slate-200 rounded-md px-4 w-28 ${
            page > 1 ? "flex" : "hidden"
          } flex-row justify-evenly items-center`}
          onClick={() => handlePage(0)}
        >
          <GrFormPrevious size={23} />
          <p>back</p>
        </button>
        <button
          className={`h-10 bg-slate-200 rounded-md px-4 w-28 ${
            movies.total_pages == page || !movies.results.length
              ? "hidden"
              : "flex"
          } flex-row justify-evenly items-center`}
          onClick={() => handlePage(1)}
        >
          <p>next</p>
          <GrFormNext size={23} />
        </button>
      </div>
    </div>
  );
}

export default Language;
