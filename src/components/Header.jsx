import React from "react";
import Menu from "./MenuItems";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import MyMovie from "../../public/MyMovie.png";
import Image from "next/image";
import Link from "next/link";
import ThemeChanger from "./ThemeChanger";

export default function Header() {
  return (
    <nav className="flex justify-between w-full items-center px-6 py-3 ">
      <ul className="flex gap-4 h-full">
        <Menu title="Home" address="/" Icon={FaHome} />
        <Menu title="About" address="/about" Icon={FaInfoCircle} />
      </ul>
      <div className="flex items-center gap-6 basis[50%]   justify-end">
        <ThemeChanger />
        <Link href={"/"}>
          <Image
            src={MyMovie}
            alt=""
            className="block w-20 rounded-md cursor-pointer  p-2 bg-amber-200 dark:bg-amber-100"
          />
        </Link>
      </div>
    </nav>
  );
}
