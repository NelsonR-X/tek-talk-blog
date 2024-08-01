"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const DarkModeToggle = () => {
  const [mode, setMode] = useState("light");

  const onClick = () => {
    const toggle = document.documentElement.classList.toggle("dark");
    const theme = toggle ? "dark" : "light";
    setMode(theme);
  };

  return (
    <button onClick={onClick} title={`Enable ${mode === "dark" ? "light" : "dark"} mode`}>
      {mode === "dark"
        ? <Sun className="text-zinc-500 dark:text-zinc-200" />
        : <Moon className="text-zinc-500 dark:text-zinc-200"/>
      }
    </button>
  );
};

export default DarkModeToggle;