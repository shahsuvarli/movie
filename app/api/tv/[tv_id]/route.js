import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const result = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie_id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await result.json();

  return NextResponse.json(data);
}
