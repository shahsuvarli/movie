import Image from "next/legacy/image";
import React from "react";

function Header() {
  return (
    <nav className="fixed bg-gradient-to-b from-black w-full px-12 drop-shadow-md text-white box-sizing border-box h-20 flex items-center justify-between z-50">
      {/* <Image src={'/images/netflix-logo.png'} width={100} height={100} alt="netflix logo"/> */}
      <div className="flex flex-row gap-6 child-hover:cursor-pointer">
        <p>Netflix</p>
        <p>Home</p>
        <p>TV Shows</p>
        <p>Movies</p>
        <p>New & Popular</p>
        <p>My List</p>
        <p>Browse by Languages</p>
      </div>
      <div className="flex flex-row gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <p>Kids</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
        {/* <Image /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </nav>
  );
}

export default Header;
