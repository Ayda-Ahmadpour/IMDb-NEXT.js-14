import Link from "next/link";
import React from "react";

export default function MenuItems() {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link href="/"></Link>
    </div>
  );
}
