// `https://api.themoviedb.org/3/discover/movie?api_key=1b0710c2d7ea099af51c2b0b40d2d35f`,

export async function getMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { cache: "no-cache" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export async function getNowPlaying() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { cache: "no-cache" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export async function getPopular() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { cache: "no-cache" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export async function getUpcoming() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { cache: "no-cache" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export async function getGenre() {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch genre data");
  }

  const data = await res.json();

  const cleanData = Object.values(data)[0];
  return cleanData;
}

export async function getMovie(movie_id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch genre data");
  }

  const data = await res.json();

  return data;
}
