import Image from "next/image";
import React from "react";

function FullPoster({ image }) {
  return (
    <span className="w-4/5 h-4/5 flex relative rounded-md">
      <Image
        fill
        priority
        className="object-contain group-hover:blur-md transition-all duration-300 w-[200px] h-9 rounded-md"
        alt={`poster`}
        src={`https://image.tmdb.org/t/p/original${image}`}
      />
    </span>
  );
}

export default FullPoster;
