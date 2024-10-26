"use client";

import "@theme-toggles/react/css/Within.css";
import { useEffect, useState } from "react";
import { Within } from "@theme-toggles/react";

export default function ToggleTheme() {
  const [mode, setMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setMode(true);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setMode(false);
    }
  };

  return (
    <Within
      toggled={mode}
      onToggle={toggleTheme}
      placeholder={""}
      duration={750}
    />
  );
}
