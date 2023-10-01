import { NextResponse } from "next/server";

export async function GET(request) {
  const result = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await result.json();

  return NextResponse.json(data);
}
