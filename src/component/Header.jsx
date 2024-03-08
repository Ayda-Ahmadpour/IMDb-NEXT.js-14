import React from "react";
import Menu from "./MenuItems";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <Menu title="Home" address="/" Icon={FaHome} />
      <Menu title="About" address="/about" Icon={FaInfoCircle} />
    </div>
  );
}
