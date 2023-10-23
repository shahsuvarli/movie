import { getPersonLong, getPersonShort } from "@/utils";
import React from "react";
import PersonComp from "./PersonComp";

export default async function Person({ params }) {
  const wait = () => new Promise((resolve) => setTimeout(resolve, 2000));
  await wait();
  const long = await getPersonLong(params.id);
  const short = await getPersonShort(params.id);

  return (
    <div className="text-white pt-24 min-h-screen flex flex-col items-center relative gap-4 py-4">
      <PersonComp short={short} long={long} />
    </div>
  );
}
