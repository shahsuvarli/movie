import Image from "next/legacy/image";
import React from "react";

function Movies({ data }) {
  return (
    <div className="flex flex-col z-40 px-5 w-full h-48 mb-6 border">
      <div className="text-black text-xl z-10 bg-white">TV Shows</div>
      <div className="flex flex-row overflow-x-scroll gap-2 h-96 z-10 bg-transparent">
        {data.results.map((item) => (
          <div
            key={item.original_title}
            className="flex items-center transition-all ease-in-out duration-300 border group w-[300px] border-black bg-black"
          >
            <div className="w-[300px] rounded-md hover:z-1000 hover:scale-200 transition duration-200 border bg-white ">
              <Image
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                width={200}
                height={200}
                className="rounded-md hover:cursor-pointer hover:z-1000 translate-x-0 translate-y-0"
                alt={item.original_title}
              />
              <div className="hidden group-hover:flex text-black transition text-xs">
                {item.original_title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
