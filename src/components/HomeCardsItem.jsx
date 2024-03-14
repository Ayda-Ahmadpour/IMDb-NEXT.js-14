import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";

export default function HomeCardsItem({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`} className="m-3 hover:opacity-70">
      <div className="flex flex-col gap-4 items-center p-4 bg-gray-200 dark:bg-gray-800 rounded-md border-2 border-red-400">
        <Image
          alt="movie poster"
          src={`https://image.tmdb.org/t/p/original/${
            movie.poster_path || movie.backdrop_path
          }`}
          width={500}
          height={150}
          className="rounded-md border-2 border-gray-300 dark:border-gray-700 h-72"
        />
        <h1 className="text-xl font-bold text-center line-clamp-1">
          {movie.title || movie.name || "Title Not Available"}
        </h1>
        <p className="line-clamp-3 text-sm text-center">
          {movie.overview || "description Not Available"}
        </p>
        <div className="flex justify-between items-center w-full">
          <span className="text-left font-bold">
            {movie.release_date || movie.first_air_date}
          </span>
          <span className="flex items-center">
            <FaHeart className="text-orange-600 mr-3" />
            <span>{movie.vote_count}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
