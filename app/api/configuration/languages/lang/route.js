import { NextResponse } from "next/server";

export async function GET(request) {
  const search = new URLSearchParams(new URL(request.url).searchParams);
  const code = search.get("code");
  const page = search.get("page");
  const result = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_original_language=${code}&page=${page}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await result.json();

  return NextResponse.json(data);
}
