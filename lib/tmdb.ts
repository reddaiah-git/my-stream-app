const API_KEY = process.env.TMDB_API_KEY!;
const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return res.json();
}

export async function getTopRatedMovies() {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  return res.json();
}

export async function getNowPlayingMovies() {
  // ← ADD THIS
  const res = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
  return res.json();
}

export async function getMovieDetails(id: string) {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return res.json();
}
