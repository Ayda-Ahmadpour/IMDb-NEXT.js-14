"use client";
import { useTheme } from "next-themes";
import { RiSunLine } from "react-icons/ri";
import { FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark" ? theme === "dark" : theme === "light";
  useEffect(() => setMounted(true), []);
  return (
    <div>
      {mounted &&
        (theme === "dark" ? (
          <button onClick={() => setTheme("light")}>
            <RiSunLine className=" text-2xl hover:text-amber-300 cursor-pointer" />
          </button>
        ) : (
          <button onClick={() => setTheme("dark")}>
            <FaMoon className=" text-lg  hover:text-amber-300 cursor-pointer" />
          </button>
        ))}
    </div>
  );
}
