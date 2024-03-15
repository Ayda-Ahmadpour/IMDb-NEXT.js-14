import axios from "axios";
import Image from "next/image";

export default async function MovieDetails({ params }) {
  const Id = params.id;
  const API_KEY = process.env.TMDB_API_KEY;

  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${Id}?api_key=${API_KEY}`
  );
  console.log(res.data);

  return (
    <div className="flex w-full p-6 mt-10">
      <Image
        alt={res.data.title || res.data.name}
        src={`https://image.tmdb.org/t/p/original/${
          res.data.poster_path || res.data.backdrop_path
        }`}
        width={300}
        height={250}
        className="rounded-md border-2 border-gray-300 dark:border-gray-700"
      />
      <div className="flex flex-col justify-center space-y-5 ml-24">
        <h1>{res.data.title}</h1>
        <p>{res.data.overview}</p>
        <p>{res.data.release_date}</p>
        <p>{res.data.vote_count}</p>
      </div>
    </div>
  );
}
