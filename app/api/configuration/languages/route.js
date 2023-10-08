import { NextResponse } from "next/server";

export async function GET(request) {
  const result = await fetch(
    `https://gist.githubusercontent.com/jrnk/8eb57b065ea0b098d571/raw/936a6f652ebddbe19b1d100a60eedea3652ccca6/ISO-639-1-language.json`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await result.json();

  return NextResponse.json(data);
}
