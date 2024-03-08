import React from "react";
import Menu from "./MenuItems";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import MyMovie from "../../public/MyMovie.png";
import Image from "next/image";
import { RiSunLine } from "react-icons/ri";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between w-full border items-center p-3">
      <ul className="flex border gap-4 basis-[50%]">
        <Menu title="Home" address="/" Icon={FaHome} />
        <Menu title="About" address="/about" Icon={FaInfoCircle} />
      </ul>
      <div className="border flex items-center basis-[50%] gap-4 justify-end">
        <RiSunLine className="text-black text-xl hover:text-amber-400 w-5 h-full cursor-pointer" />
        <Link href={"/"}>
          <Image src={MyMovie} alt="" className="block w-20 cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
}
