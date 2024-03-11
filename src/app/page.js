import HomeCards from "@/components/HomeCards";

const API_KEY = process.env.TMDB_API_KEY;

export default async function page({ searchParams }) {
  const genre = searchParams.genre || "HighRatedFetching";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "HighRatedFetching" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
  const result = data.results;
  return (
    <div>
      <HomeCards result={result} />
    </div>
  );
}
