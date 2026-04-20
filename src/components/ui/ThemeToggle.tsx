"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("theme") as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export default function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      title={`Switch to ${isLight ? "dark" : "light"} mode`}
      className={cn(
        "relative inline-flex items-center justify-center w-9 h-9 rounded-full",
        "border border-white/10 bg-white/5 text-slate-300",
        "hover:text-white hover:bg-white/10 hover:border-accent-500/40",
        "transition-all duration-300",
        className
      )}
    >
      <Sun
        className={cn(
          "w-4 h-4 absolute transition-all duration-300",
          isLight ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"
        )}
      />
      <Moon
        className={cn(
          "w-4 h-4 absolute transition-all duration-300",
          isLight ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100 rotate-0"
        )}
      />
    </button>
  );
}
