// `https://api.themoviedb.org/3/discover/movie?api_key=1b0710c2d7ea099af51c2b0b40d2d35f`,

export async function getMovies() {
  const response = await fetch("http://localhost:3000/api/get-movies", {
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
  const response = await fetch("http:localhost:3000/api/now-playing", {
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
  const response = await fetch("http://localhost:3000/api/popular", {
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
  const response = await fetch("http://localhost:3000/api/upcoming", {
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
  const response = await fetch("http://localhost:3000/api/genres", {
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

export async function getMovie(movie_id, media_type) {
  const response = await fetch(
    `http://localhost:3000/api/${media_type}/${movie_id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movie data");
  }

  const data = await response.json();

  return data;
}

export async function getKeywords(movie_id, media_type) {
  const response = await fetch(
    `http://localhost:3000/api/${media_type}/${movie_id}/keywords`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to get the movie keywords data");
  }

  const data = await response.json();

  return data;
}

export async function getCredits(movie_id, media_type) {
  const response = await fetch(
    `http://localhost:3000/api/${media_type}/${movie_id}/credits/`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch the movie credits data");
  }

  const data = await response.json();

  return data;
}

export async function getRecommendations(movie_id, media_type) {
  const response = await fetch(
    `http://localhost:3000/api/${media_type}/${movie_id}/recommendations`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch the movie recommendations data");
  }

  const data = await response.json();

  return data;
}

export async function getVideos(movie_id, media_type) {
  const response = await fetch(
    `http://localhost:3000/api/${media_type}/${movie_id}/videos`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch the movie videos data");
  }

  const data = await response.json();

  return data;
}

export async function getPersonLong(id) {
  const response = await fetch(`http://localhost:3000/api/person/long/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch the person data (long)");
  }

  const data = await response.json();

  return data;
}

export async function getPersonShort(id) {
  const response = await fetch(`http://localhost:3000/api/person/short/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch the person data (short)");
  }

  const data = await response.json();

  return data;
}

export async function getLanguages() {
  const response = await fetch(
    "http://localhost:3000/api/configuration/languages",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch list of languages");
  }

  const data = await response.json();

  return data;
}

export async function getLanguage(code, page) {
  const response = await fetch(
    `http://localhost:3000/api/configuration/languages/lang?code=${code}&page=${page}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch language");
  }

  const data = await response.json();

  return data;
}
