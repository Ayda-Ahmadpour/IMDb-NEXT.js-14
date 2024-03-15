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
    <div>
      <h1>{res.data.title}</h1>
      <p>{res.data.overview}</p>
      <p>{res.data.release_date}</p>
      <p>{res.data.vote_count}</p>
      <Image
        alt={res.data.title || res.data.name}
        src={`https://image.tmdb.org/t/p/original/${
          res.data.poster_path || res.data.backdrop_path
        }`}
        width={500}
        height={150}
        className="rounded-md border-2 border-gray-300 dark:border-gray-700 h-80"
      />
    </div>
  );
}
