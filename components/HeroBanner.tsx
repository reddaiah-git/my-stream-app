import Image from "next/image";

interface HeroBannerProps {
  movie: {
    id: number;
    title: string;
    overview: string;
    backdrop_path: string | null;
  };
}

export default function HeroBanner({ movie }: HeroBannerProps) {
  const img = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "/no-banner.jpg";

  return (
    <section className="relative w-full h-[60vh] max-h-[700px] mb-10 rounded-xl overflow-hidden">
      {/* Background Image */}
      <Image
        src={img}
        alt={movie.title}
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-10 left-10 max-w-2xl">
        <h1 className="text-4xl font-bold mb-3 drop-shadow-lg">
          {movie.title}
        </h1>
        <p className="text-lg text-gray-200 line-clamp-3 max-w-xl drop-shadow-lg">
          {movie.overview}
        </p>
      </div>
    </section>
  );
}
