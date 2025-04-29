// src/components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

const themeOptions = [
  { label: "Light", value: "light", icon: <Sun className="w-5 h-5 mr-2" /> },
  { label: "Dark", value: "dark", icon: <Moon className="w-5 h-5 mr-2" /> },
  { label: "System", value: "system", icon: <Monitor className="w-5 h-5 mr-2" /> },
];

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  if (!mounted) return null;

  const current = themeOptions.find(
    (opt) => opt.value === (theme === "system" ? resolvedTheme : theme)
  ) || themeOptions[2];

  return (
    <div className="relative inline-block text-left">
      <button
        ref={buttonRef}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 bg-white dark:bg-gray-900 shadow hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Toggle theme menu"
        title="Toggle theme"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setOpen((v) => !v);
          }
        }}
      >
        {resolvedTheme === "dark" ? <Moon className="w-5 h-5" /> : resolvedTheme === "light" ? <Sun className="w-5 h-5" /> : <Monitor className="w-5 h-5" />}
      </button>
      {open && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 animate-fade-in"
          role="menu"
        >
          <div className="py-1">
            {themeOptions.map((option) => (
              <button
                key={option.value}
                className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition ${theme === option.value ? "text-purple-500" : "text-gray-700 dark:text-gray-200"}`}
                onClick={() => {
                  setTheme(option.value);
                  setOpen(false);
                }}
                role="menuitem"
              >
                {option.icon}
                {option.label}
                {theme === option.value && (
                  <span className="ml-auto text-purple-500">•</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

