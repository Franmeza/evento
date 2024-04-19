"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

function Header() {
  const activePathname = usePathname();
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
        alt="EVENTO logo"
        width={53}
        height={12}
      />
      <nav className="h-full">
        <ul className="flex gap-x-6 text-sm h-full">
          {routes.map((route) => (
            <li
              key={route.path}
              //clsx is an alternative to add styles conditionally
              className={clsx(
                " hover:text-white transition flex items-center cursor-pointer relative",
                {
                  "text-white": activePathname === route.path,
                  "text-white/50": activePathname !== route.path,
                }
              )}
            >
              <Link href={route.path}> {route.name} </Link>
              {activePathname === route.path && (
                <motion.div
                  layoutId="nav-active-link"
                  className="bg-accent h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
