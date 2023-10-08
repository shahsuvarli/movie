import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Crew({ credits, movie }) {
  const [creator, setCreator] = useState({});

  useEffect(() => {
    const creator =
      movie?.created_by ||
      credits.crew.filter((item) => item.job === "Director");
    setCreator(creator[0]);
  }, []);

  const router = useRouter();
  return (
    <div className="w-[80%] bg-white p-8 flex flex-col gap-4 rounded-md">
      <p className="text-black w-full text-left font-semibold text-lg">
        Movie Cast
      </p>
      <div className=" flex flex-col md:flex-row justify-between gap-8 box-border  relative">
        <div className="border-2 border-slate-300 rounded-md p-4 flex justify-center">
          <div key={creator?.id}>
            <Image
              src={
                creator.profile_path
                  ? `https://image.tmdb.org/t/p/original${creator.profile_path}`
                  : "https://fakeimg.pl/200x250/f1f1f1?text= &font=museo"
              }
              width={150}
              height={100}
              alt={creator?.name || "director image"}
              className="rounded-md mb-2"
            />
            <p className="text-slate-600 font-medium text-md">{creator?.name}</p>
            <p className="text-slate-400 text-md">Creator</p>
          </div>
        </div>
        <div className="flex flex-row overflow-x-scroll overflow-y-scroll bg-white h-[330px] w-full">
          <div className="flex flex-row justify-between gap-4 h-60">
            {credits.cast?.map((item) => (
              <div
                key={item.id}
                className="rounded-md w-40 min-h-80"
                onClick={() => router.push(`/person-detail/${item.id}`)}
              >
                <Image
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                      : "https://fakeimg.pl/200x200/f1f1f1?text= &font=museo"
                  }
                  width={150}
                  height={150}
                  alt={item.name}
                  className="rounded-md w-full h-full object-cover hover:cursor-pointer"
                />
                <p className="text-slate-600 font-medium">
                  {item.original_name}
                </p>
                <p className="text-slate-400 text-sm">{item.character}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
