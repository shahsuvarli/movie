// `https://api.themoviedb.org/3/discover/movie?api_key=1b0710c2d7ea099af51c2b0b40d2d35f`,

export async function getMovies() {
  const response = await fetch("/api/get-movies", {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch movie list");
  }
  const data = await response.json();
  return data;
}

export async function getNowPlaying() {
  const response = await fetch("/api/now-playing", {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch now playing data");
  }
  const data = await response.json();
  return data;
}

export async function getPopular() {
  const response = await fetch("/api/popular", {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch popular movie data");
  }
  const data = await response.json();
  return data;
}

export async function getUpcoming() {
  const response = await fetch("/api/upcoming", {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch upcoming movie data");
  }
  const data = await response.json();
  return data;
}

export async function getGenre() {
  const response = await fetch("/api/genres", {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch genre data");
  }

  const data = await response.json();

  const cleanData = Object.values(data)[0];
  return cleanData;
}

export async function getMovie(movie_id) {
  const response = await fetch(`/api/movie/${movie_id}`, {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch movie data");
  }

  const data = await response.json();

  return data;
}

export async function getKeywords(movie_id) {
  const response = await fetch(`/api/movie/${movie_id}/keywords`, {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get the movie keywords data");
  }

  const data = await response.json();

  return data;
}

export async function getCredits(movie_id) {
  const response = await fetch(`/api/movie/${movie_id}/credits/`, {
    cache: "no-cache",
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch the movie credits data");
  }

  const data = await response.json();

  return data;
}

export async function getRecommendations(movie_id) {
  const response = await fetch(`/api/movie/${movie_id}/recommendations`, {
    cache: "no-cache",
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch the movie recommendations data");
  }

  const data = await response.json();

  return data;
}

export async function getVideos(movie_id) {
  const response = await fetch(`/api/movie/${movie_id}/videos`, {
    cache: "no-cache",
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch the movie videos data");
  }

  const data = await response.json();

  return data;
}