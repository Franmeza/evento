import Image from "next/image";
import Link from "next/link";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/event/all",
  },
];

function Header() {
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
        alt="EVENTO logo"
        width={53}
        height={12}
      />
      <nav>
        <ul className="flex gap-x-6 text-sm">
          {routes.map((route) => (
            <li
              key={route.path}
              className="text-white/50 hover:text-white transition cursor-pointer"
            >
              <Link href={route.path} /> {route.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
