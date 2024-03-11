"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function NavBarItem({ title, params }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        href={`/?genre=${params}`}
        className={` font-semibold transition-all duration-300 ease-in-out cursor-pointer text-yellow-50 dark:bg-amber-100 dark:text-black rounded-md p-4 ${
          genre === params
            ? "shadow shadow-slate-900 transition-all duration-200 ease-linear bg-amber-200 text-black"
            : ""
        }`}
      >
        {title}
      </Link>
    </div>
  );
}
