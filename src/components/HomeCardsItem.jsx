import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HomeCardsItem({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`} className="p-3">
      <div className="flex flex-col items-center gap-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-md border-2 border-red-400">
        <Image
          alt="movie poster"
          src={`https://image.tmdb.org/t/p/original/${
            movie.poster_path || movie.backdrop_path
          }`}
          width={500}
          height={300}
          className="rounded-md border-2 border-gray-300 dark:border-gray-700"
        />
        <h1 className="text-xl font-bold text-center">
          {movie.title || movie.original_title}
        </h1>
        <p className="line-clamp-3 text-sm">{movie.overview}</p>
      </div>
    </Link>
  );
}
