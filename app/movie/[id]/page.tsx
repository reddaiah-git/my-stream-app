import { getMovieDetails } from "@/lib/tmdb";
import Image from "next/image";

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const movie = await getMovieDetails(params.id);

  return (
    <main className="pb-10">
      {/* Backdrop */}
      <div className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto px-4 mt-[-120px] relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <div className="w-full md:w-1/3 relative h-[450px]">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Movie Info */}
          <div className="md:w-2/3 space-y-4">
            <h1 className="text-4xl font-bold">{movie.title}</h1>

            <p className="text-slate-200 text-lg">{movie.overview}</p>

            <div className="text-slate-400 text-sm space-y-1">
              <p>
                <span className="font-semibold">Release:</span>{" "}
                {movie.release_date}
              </p>
              <p>
                <span className="font-semibold">Runtime:</span> {movie.runtime}{" "}
                min
              </p>
              <p>
                <span className="font-semibold">Rating:</span> ⭐{" "}
                {movie.vote_average}
              </p>

              {/* Genres */}
              <p>
                <span className="font-semibold">Genres:</span>{" "}
                {movie.genres?.map((g: any) => g.name).join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
