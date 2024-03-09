// Header.jsx
import React from "react";
import Menu from "./MenuItems";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import MyMovie from "../../public/MyMovie.png";
import Image from "next/image";
import Link from "next/link";
import ThemeChanger from "./ThemeChanger"; // Change to default import

export default function Header() {
  return (
    <nav className="flex justify-between w-full border items-center p-3">
      <ul className="flex border gap-4 basis-[50%]">
        <Menu title="Home" address="/" Icon={FaHome} />
        <Menu title="About" address="/about" Icon={FaInfoCircle} />
      </ul>
      <div className="border flex items-center basis-[50%] gap-4 justify-end">
        <ThemeChanger /> {/* Include ThemeChanger component */}
        <Link href={"/"}>
          <Image src={MyMovie} alt="" className="block w-20 cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
}
