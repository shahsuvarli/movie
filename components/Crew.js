import Image from "next/image";
import React from "react";

function Crew({ credits }) {
  return (
    <div className="w-[80%] flex flex-col md:flex-row justify-between gap-8 bg-white p-8 box-border rounded-md relative ">
      <div className="border-2 border-slate-300 rounded-md p-4 flex justify-center">
        {credits.crew
          .filter((item) => item.job === "Director")
          .slice(0, 1)
          .map((item) => (
            <div key={item.id}>
              <Image
                src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                width={150}
                height={100}
                alt={item.name}
                className="rounded-md"
              />
              <p className="text-slate-600 font-medium text-lg">
                {item.original_name}
              </p>
              <p className="text-slate-400 text-md">{item.job}</p>
            </div>
          ))}
      </div>
      <div className="flex flex-row overflow-x-scroll overflow-y-scroll bg-white h-[330px] w-full">
        <div className="flex flex-row justify-between gap-4 h-60">
          {credits.cast.map((item) => (
            <div key={item.id} className="rounded-md w-40 min-h-80">
              <Image
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                    : "https://fakeimg.pl/200x200/f1f1f1?text= &font=museo"
                }
                width={150}
                height={150}
                alt={item.name}
                className="rounded-md w-full h-full object-cover"
              />
              <p className="text-slate-600 font-medium">{item.original_name}</p>
              <p className="text-slate-400 text-sm">{item.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Crew;
