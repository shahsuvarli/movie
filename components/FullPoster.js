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
        src={
          image
            ? `https://image.tmdb.org/t/p/original${image}`
            : "https://fakeimg.pl/200x200/f1f1f1?text= &font=museo"
        }
      />
    </span>
  );
}

export default FullPoster;
