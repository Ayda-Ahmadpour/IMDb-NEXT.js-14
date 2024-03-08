import Link from "next/link";

export default function MenuItems({ title, address, Icon }) {
  return (
    <li>
      <Link href={address}>
        <Icon />
        <span>{title}</span>
      </Link>
    </li>
  );
}
