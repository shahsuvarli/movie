export async function getMovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=1b0710c2d7ea099af51c2b0b40d2d35f",
    { cache: "no-cache" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}
