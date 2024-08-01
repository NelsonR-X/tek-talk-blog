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
      {mode === "dark" ? <Sun stroke="white" /> : <Moon />}
    </button>
  );
};

export default DarkModeToggle;