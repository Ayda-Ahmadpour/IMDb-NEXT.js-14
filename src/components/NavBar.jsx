import React from "react";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div className="flex gap-10 justify-center p-5 bg-red-500 dark:bg-amber-100  border-y-2 border-red-500">
      <NavBarItem title="High Rated" params="HighRatedFetching" />
      <NavBarItem title="Trending" params="TrendingFetching" />
    </div>
  );
}
