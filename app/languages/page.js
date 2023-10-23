import { getLanguages } from "@/utils";
import React from "react";
import LangCom from "./LangCom";

export default async function Languages() {
  const langs = await getLanguages();

  return <LangCom langs={langs} />;
}
