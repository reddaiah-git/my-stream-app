"use client";

import Image from "next/image";
import Link from "next/link";

interface MovieRowProps {
  categoryTitle: string;
  movies: {
    id: number;
    title?: string;
    name?: string;
    poster_path: string | null;
  }[];
}

export default function MovieRow({ categoryTitle, movies }: MovieRowProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-3">{categoryTitle}</h2>

      <div
        className="
          flex gap-4 overflow-x-auto pb-4
          scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent
          snap-x snap-mandatory
        "
      >
        {movies.map((movie) => (
          <Link
            key={movie.id}
            href={`/movie/${movie.id}`}
            className="snap-start shrink-0 w-[140px]"
          >
            <div className="w-full aspect-[2/3] relative rounded-lg overflow-hidden bg-gray-900">
              <Image
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                    : "/no-poster.jpg"
                }
                alt={movie.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="mt-2 text-sm line-clamp-1">
              {movie.title || movie.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
