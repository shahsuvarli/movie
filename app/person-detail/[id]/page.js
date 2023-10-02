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
      setLong(long.cast);
    })();
  }, []);

  if (!short) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white pt-24 min-h-screen flex flex-col items-center relative gap-4">
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
                ? `https://image.tmdb.org/t/p/original${short.profile_path}`
                : "https://fakeimg.pl/200x200/f1f1f1?text= &font=museo"
            }
          />
          <div className="flex flex-col gap-2">
            <span className="flex flex-row gap-2 items-end">
              <h3 className="text-3xl">{short.name}</h3>
              <p className="text-xl text-slate-300">
                {!short.deathday
                  ? `(${
                      new Date().getFullYear() -
                      Number(short.birthday.slice(0, 4))
                    } years old)`
                  : `(died in ${short.deathday.slice(0, 4)})`}
              </p>
            </span>
            <span className="flex flex-row gap-2 text-sm">
              <p className="text-slate-300">Known for:</p>
              <p>{short.known_for_department}</p>
            </span>
            <span className="flex flex-row gap-2 text-sm">
              <p className="text-slate-300">Place of birth:</p>
              <p>{short.place_of_birth}</p>
            </span>
            <p className="text-md text-slate-400 text-sm">{short.biography}</p>
          </div>
        </section>
        <section className="bg-black text-black flex justify-center items-center">
          <div className="flex flex-wrap gap-3 justify-between py-8 px-4">
            {long
              .filter((item) => item.poster_path)
              .map((item) => (
                <span
                  className="flex flex-row gap-2 text-white rounded-md px-2 py-1  border-slate-500 bg-white"
                  key={item.credit_id}
                >
                  <div
                    className="rounded-md w-40 h-68 relative gap-1 flex flex-col"
                    onClick={() => router.push(`/movie-detail/${item.id}`)}
                  >
                    <Image
                      src={
                        item.poster_path
                          ? `https://image.tmdb.org/t/p/original${item.poster_path}`
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
        </section>
      </div>
    </div>
  );
}

export default Person;
