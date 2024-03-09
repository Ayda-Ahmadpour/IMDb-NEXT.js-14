"use client";
import { useTheme } from "next-themes";
import { RiSunLine } from "react-icons/ri";
import { FaMoon } from "react-icons/fa";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark" ? theme === "dark" : theme === "light";
  return (
    <div>
      <button onClick={() => setTheme("light")}>
        <RiSunLine className="text-black text-xl hover:text-amber-400 w-5 h-full cursor-pointer" />
      </button>
      <button onClick={() => setTheme("dark")}>
        <FaMoon className="text-black text-xl hover:text-amber-400 w-5 h-full cursor-pointer" />
      </button>
    </div>
  );
}
