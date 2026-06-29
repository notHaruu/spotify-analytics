"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [enabled, setEnabled] = useState(false);

  // load theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setEnabled(true);
    } else {
      document.documentElement.classList.remove("dark");
      setEnabled(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;

    if (enabled) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setEnabled(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setEnabled(true);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <Sun className="w-4 h-4" />

      {/* slider */}
      <button
        onClick={toggleTheme}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${
          enabled ? "bg-neutral-700" : "bg-yellow-400"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            enabled ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>

      <Moon className="w-4 h-4" />
    </div>
  );
}