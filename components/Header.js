"use client";

import Image from "next/legacy/image";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const size = 20;
  return (
    <nav className="fixed bg-gradient-to-b from-5% from-[#141414] w-full px-6 drop-shadow-md text-white box-sizing border-box h-20 flex items-center justify-between z-50 gap-6">
      <div className="flex flex-row gap-6  text-sm">
        <span className=" w-40 justify-center flex relative min-w-60 h-10">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            layout="fill"
            priority
            className="object-contain hover:cursor-pointer"
            onClick={() => router.push("/")}
          />
        </span>
        <div className="md:flex hidden flex-row gap-6 flex-nowrap text-center justify-center items-center child-hover:cursor-pointer child-hover:text-slate-400 child:transition-all child:duration-150">
          <p>Home</p>
          <p>TV Shows</p>
          <p>Movies</p>
          <p>New & Popular</p>
          <p>My List</p>
          <p onClick={() => router.push("/languages")}>Browse by Languages</p>
        </div>
      </div>
      <div className="flex flex-row gap-5 justify-between items-center child-hover:cursor-pointer">
        <BsSearch size={size} />
        <p className="text-sm">Kids</p>
        <FiBell size={size} />
        <Image
          src={"https://avatars.githubusercontent.com/u/46631807?v=4"}
          width={32}
          height={32}
          className="rounded-md"
        />
        <AiFillCaretDown size={16} className="-ml-2" />
      </div>
    </nav>
  );
}

export default Header;
