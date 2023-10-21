"use client";

import Image from "next/legacy/image";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { RiShutDownLine } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";
import Link from "next/link";

function Header() {
  const router = useRouter();
  const size = 20;
  return (
    <nav className="fixed bg-gradient-to-b from-5% from-[#141414] w-full px-6 drop-shadow-md text-white box-sizing border-box h-20 flex items-center justify-between z-50 gap-6">
      <div className="flex flex-row gap-6  text-sm">
        <span className="w-36 justify-center flex relative min-w-60 h-10">
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
        <RiShutDownLine size={25} color="white" onClick={() => signOut()} />
        <MdLanguage
          size={28}
          color="white"
          onClick={() => router.push("/languages")}
          className="md:hidden block"
        />
        <BsSearch size={size} className="md:block hidden" />
        <p className="text-sm md:block hidden">Kids</p>
        <FiBell size={size} className="md:block hidden" />
        <Link href={"http://shahsuvarli.com"} target="_blank">
          <Image
            src={"https://avatars.githubusercontent.com/u/46631807?v=4"}
            width={32}
            height={32}
            className="rounded-md"
          />
        </Link>
        <AiFillCaretDown size={16} className="-ml-2" />
      </div>
    </nav>
  );
}

export default Header;
