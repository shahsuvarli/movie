// `https://api.themoviedb.org/3/discover/movie?api_key=1b0710c2d7ea099af51c2b0b40d2d35f`,

export async function getMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie list");
  }
  const data = await response.json();
  return data;
}

export async function getNowPlaying() {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie/?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch now playing data");
  }
  const data = await response.json();
  return data;
}

export async function getPopular() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch popular movie data");
  }
  const data = await response.json();
  return data;
}

export async function getUpcoming() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch upcoming movie data");
  }
  const data = await response.json();
  return data;
}

export async function getGenre() {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch genre data");
  }

  const data = await response.json();

  const cleanData = Object.values(data)[0];
  return cleanData;
}

export async function getMovie(movie_id, media_type) {
  const response = await fetch(
    `https://api.themoviedb.org/3/${media_type}/${movie_id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
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
    `https://api.themoviedb.org/3/${media_type}/${movie_id}/keywords?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
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
    `https://api.themoviedb.org/3/${media_type}/${movie_id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
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
    `https://api.themoviedb.org/3/${media_type}/${movie_id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
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
    `https://api.themoviedb.org/3/${media_type}/${movie_id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
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
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch the person data (long)");
  }

  const data = await response.json();

  return data;
}

export async function getPersonShort(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch the person data (short)");
  }

  const data = await response.json();

  return data;
}

export async function getLanguages() {
  const response = await fetch(
    `https://gist.githubusercontent.com/jrnk/8eb57b065ea0b098d571/raw/936a6f652ebddbe19b1d100a60eedea3652ccca6/ISO-639-1-language.json`,
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
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_original_language=${code}&page=${page}`,
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
