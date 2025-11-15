export interface MovieDetail {
  id: number;
  title: string;
  overview: string;
  genres: { id: number; name: string }[];
  backdrop_path: string | null;
  poster_path: string | null;
  runtime: number;
  release_date: string;
  vote_average: number;
  tagline?: string;
}
