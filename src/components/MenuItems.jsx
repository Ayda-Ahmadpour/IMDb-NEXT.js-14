import Link from "next/link";

export default function MenuItems({ title, address, Icon }) {
  return (
    <li>
      <Link href={address}>
        <Icon className="inline-block sm:hidden text-xl hover:text-amber-400 transition-all duration-300 ease-in-out" />
        <span className="hidden sm:inline-block">{title}</span>
      </Link>
    </li>
  );
}
