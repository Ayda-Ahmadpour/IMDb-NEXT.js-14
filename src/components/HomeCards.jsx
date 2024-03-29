import React from "react";
import HomeCardsItem from "./HomeCardsItem";

export default function HomeCards({ result }) {
  return (
    <div className="sm:grid sm:grid-cols-2 p-3 lg:grid-cols-3 xl:grid-cols-5 3xl:grid-cols-5">
      {result.map((movie) => {
        return <HomeCardsItem key={movie.id} movie={movie} />;
      })}
    </div>
  );
}
