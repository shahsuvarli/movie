import React from "react";

function loading() {
  return (
    <div className="flex flex-col text-white py-32 px-12 animate-pulse gap-4">
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-40 mb-4"></div>
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-52 mb-4"></div>
      <div className="grid grid-cols-auto gap-2 justify-center">
        {Array.from({ length: 12 }, (movie, i) => (
          <div
            className="text-white flex flex-col justify-center items-center w-52 h-80 rounded-md bg-gray-700/50"
            key={i}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default loading;
