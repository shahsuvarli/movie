import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Recommendation({ movies }) {
  const router = useRouter();
  return (
    <div className="w-[80%] bg-white p-8 flex flex-col gap-4 rounded-md min-h-8">
      <p className="text-black w-full text-left font-semibold text-lg">
        Recommendations
      </p>
      <div className="flex flex-row justify-between gap-2 box-border relative overflow-x-scroll overflow-y-scroll w-full">
        <div className="flex justify-between flex-row gap-2 h-full">
          {movies.length ? (
            movies.slice(0,6).map((item) => (
              <div
                key={item.id}
                className="h-68 w-40 rounded-md gap-1"
                onClick={() => router.push(`/${item.media_type}-detail/${item.id}`)}
              >
                <Image
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                      : "https://fakeimg.pl/200x200/f1f1f1?text= &font=museo"
                  }
                  width={150}
                  height={100}
                  sizes="100px"
                  alt={item.name || item.title}
                  className="rounded-md w-full h-60 object-cover hover:cursor-pointer"
                />
                <p className="text-slate-600 font-medium text-md">
                  {item.name || item.title} ({item.media_type})
                </p>
              </div>
            ))
          ) : (
            <p className="text-black">There are no movie recommendations</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
