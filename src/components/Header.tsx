import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  // "/about": {
  //   name: "about",
  // },
};

export default function Navbar() {
  return (
    <header className="flex h-20 w-full flex-row items-center justify-between px-6 md:h-40 md:max-w-3xl">
      <nav className="flex w-full flex-row justify-between">
        <div className="flex flex-row gap-4">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="relative flex cursor-pointer p-2 align-middle transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-violet-600 after:opacity-0 after:transition-all after:duration-300 hover:text-violet-600 hover:after:opacity-100 dark:after:bg-violet-400 dark:hover:text-violet-400"
              >
                {name}
              </Link>
            );
          })}
        </div>
        <ToggleTheme />
      </nav>
    </header>
  );
}
