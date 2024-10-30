// import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

// const navItems = {
//   "/": {
//     name: "home",
//   },
//   "/blog": {
//     name: "blog",
//   },
//   "/about": {
//     name: "about",
//   },
// };

export default function Navbar() {
  return (
    <header className="flex h-20 w-full flex-row items-center justify-between px-6 md:h-40 md:max-w-3xl">
      <nav className="flex w-full flex-row justify-between">
        <div className="flex flex-row gap-4">
          {/* {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="flex align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
              >
                {name}
              </Link>
            );
          })} */}
        </div>
        <ToggleTheme />
      </nav>
    </header>
  );
}
