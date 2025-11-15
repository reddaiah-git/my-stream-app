import {
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
} from "@/lib/tmdb";
import HeroBanner from "@/components/HeroBanner";
import MovieRow from "@/components/MovieRow";

export default async function HomePage() {
  const popular = await getPopularMovies();
  const topRated = await getTopRatedMovies();
  const nowPlaying = await getNowPlayingMovies();

  return (
    <main className="space-y-8 px-4 py-6">
      <HeroBanner movie={popular.results[0]} />

      <section>
        <h2>Popular</h2>
        <MovieRow categoryTitle="Popular" movies={popular.results} />
      </section>

      <section>
        <h2>Top Rated</h2>
        <MovieRow categoryTitle="Top Rated" movies={topRated.results} />
      </section>
      <MovieRow categoryTitle="Now Playing" movies={nowPlaying.results} />
    </main>
  );
}
