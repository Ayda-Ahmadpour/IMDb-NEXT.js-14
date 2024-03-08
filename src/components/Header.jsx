import React from "react";
import Menu from "./MenuItems";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

export default function Header() {
  return (
    <nav>
      <ul className="bg-zinc-950">
        <Menu
          title="Home"
          address="/"
          Icon={FaHome}
          className="border-l-orange-400 text-9xl"
        />
        <Menu title="About" address="/about" Icon={FaInfoCircle} />
      </ul>
    </nav>
  );
}
