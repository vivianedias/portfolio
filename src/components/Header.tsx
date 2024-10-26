import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/links": {
    name: "links",
  },
};

export default function Navbar() {
  return (
    <header className="flex flex-row h-20 w-full md:h-40 md:max-w-3xl items-center justify-between px-6">
      <nav className="flex flex-row justify-between w-full">
        <div className="flex flex-row gap-4">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle"
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
