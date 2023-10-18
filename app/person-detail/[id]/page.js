"use client";

import { getPersonLong, getPersonShort } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Person({ params }) {
  const [short, setShort] = useState();
  const [long, setLong] = useState([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const short = await getPersonShort(params.id);
      const long = await getPersonLong(params.id);
      setShort(short);
      setLong(long);
    })();
  }, []);

  if (!short) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white pt-24 min-h-screen flex flex-col items-center relative gap-4 py-4">
      <div className=" w-[90%] h-full flex flex-col gap-4">
        <section className="border border-1 border-slate-500 p-4 flex flex-row gap-4 rounded-md">
          <Image
            width={500}
            height={500}
            priority
            className="object-cover rounded-lg w-60 h-80"
            alt={`${short.name}-poster`}
            src={
              short.profile_path
                ? `https://image.tmdb.org/t/p/w500/${short.profile_path}`
                : "https://fakeimg.pl/200x200/f1f1f1?text= &font=museo"
            }
          />
          <div className="flex flex-col gap-2">
            <span className="flex flex-row gap-2 items-end">
              <h3 className="text-3xl">{short.name}</h3>
              <p className="text-xl text-slate-300">
                {short.deathday
                  ? `(died in ${short.deathday.slice(0, 4)})`
                  : short.birthday
                  ? `(${
                      new Date().getFullYear() -
                      Number(short.birthday?.slice(0, 4))
                    } years old)`
                  : ""}
              </p>
            </span>
            <span className="flex flex-row gap-2 text-sm">
              <p className="text-slate-300">Known for:</p>
              <p>{short.known_for_department}</p>
            </span>
            <span className="flex flex-row gap-2 text-sm">
              <p className="text-slate-300">Place of birth:</p>
              <p>{short.place_of_birth || "no data"}</p>
            </span>
            <p className="text-md text-slate-400 text-sm">{short.biography}</p>
          </div>
        </section>
        <section className="flex flex-col bg-black rounded-md py-8 px-4 gap-4">
          <p className="text-white">Movies</p>
          <div className=" text-black flex items-center flex-row overflow-x-auto w-full">
            <div className="flex flex-row gap-3 ">
              {long.cast
                .filter(
                  (item) => item.poster_path && item.media_type === "movie"
                )
                .sort(
                  (a, b) =>
                    Number(a.release_date.slice(0, 4)) -
                    Number(b.release_date.slice(0, 4))
                )
                .reverse()
                .map((item) => (
                  <span
                    className="flex flex-row gap-2 text-white rounded-md px-2 py-1 border-slate-500 bg-white"
                    key={item.credit_id}
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
                      <p className="text-slate-400 text-sm">{item.character}</p>
                    </div>
                  </span>
                ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col bg-black rounded-md py-8 px-4 gap-4">
          <p className="text-white">TV Series</p>
          <div className=" text-black flex items-center flex-row overflow-x-auto w-full">
            <div className="flex flex-row gap-3 ">
              {long.cast.find((item) => item.media_type === "tv") ? (
                long.cast
                  .filter(
                    (item) => item.poster_path && item.media_type === "tv"
                  )
                  .sort(
                    (a, b) =>
                      Number(a.first_air_date.slice(0, 4)) -
                      Number(b.first_air_date.slice(0, 4))
                  )
                  .reverse()
                  .slice(0, 10)
                  .map((item) => (
                    <span
                      className="flex flex-row gap-2 text-white rounded-md px-2 py-1 border-slate-500 bg-white"
                      key={item.credit_id}
                    >
                      <div
                        className="rounded-md w-40 h-68 relative gap-1 flex flex-col"
                        onClick={() => router.push(`/tv-detail/${item.id}`)}
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
                        <p className="text-slate-600 font-medium">
                          {item.name}
                        </p>
                        <p className="text-slate-400 text-sm">
                          {item.character}
                        </p>
                      </div>
                    </span>
                  ))
              ) : (
                <p className="text-white">No data</p>
              )}
            </div>
          </div>
        </section>
        <section className="flex flex-col bg-black rounded-md py-8 px-4 gap-4">
          <p className="text-white">Cast Member</p>
          <div className=" text-black flex items-center flex-row overflow-x-auto w-full">
            <div className="flex flex-row gap-3 ">
              {long.crew.length ? (
                long.crew
                  .filter((item) => item.poster_path)
                  .reverse()
                  .slice(0, 10)
                  .map((item) => (
                    <span
                      className="flex flex-row gap-2 text-white rounded-md px-2 py-1 border-slate-500 bg-white"
                      key={item.credit_id}
                    >
                      <div
                        className="rounded-md w-40 h-68 relative gap-1 flex flex-col"
                        onClick={() =>
                          router.push(`/${item.media_type}-detail/${item.id}`)
                        }
                      >
                        <Image
                          src={
                            item.poster_path
                              ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                              : "https://fakeimg.pl/200x200/f1f1f1?text= &font=museo"
                          }
                          width={250}
                          height={150}
                          alt={`${item.title || item.name}-movie-poster`}
                          className="rounded-md w-42 h-60 object-cover hover:cursor-pointer"
                        />
                        <p className="text-slate-600 font-medium">
                          {item.title || item.name} ({item.media_type})
                        </p>
                        <p className="text-slate-400 text-sm">{item.job}</p>
                      </div>
                    </span>
                  ))
              ) : (
                <p className="text-white">No data</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Person;
