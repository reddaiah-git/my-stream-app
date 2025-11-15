interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string | null;
  };
}

export default function MovieCard({ movie }: MovieCardProps) {
  const img = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "/no-image.jpg";

  return (
    <div className="w-40 flex-shrink-0 cursor-pointer">
      <img
        src={img}
        alt={movie.title}
        className="rounded-lg shadow-md hover:scale-105 transition"
      />

      <p className="mt-2 text-sm text-gray-300">{movie.title}</p>
    </div>
  );
}
