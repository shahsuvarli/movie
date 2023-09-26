import Image from "next/legacy/image";
import React from "react";

function Auth() {
  return (
    <div className="relative w-full h-screen bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full bg-opacity-50">
        <nav className="px-10 py-4">
          <Image src={"/images/logo.png"} width={200} height={100} alt="logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 w-2/5 h-2/5 self-center flex text-white p-16">
            <h2 className="text-4xl font-semibold">Sign in</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
