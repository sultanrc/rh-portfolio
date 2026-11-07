"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export default function DarkModeButton() {
  const [dark, setDark] = useState<boolean | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  const icon = {
    initial: { rotate: -90, scale: 0.4, opacity: 0 },
    animate: { rotate: 0, scale: 1, opacity: 1 },
    exit: { rotate: 90, scale: 0.4, opacity: 0 },
    transition: {
      duration: reduce ? 0 : 0.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };

  const svgProps = {
    width: 14,
    height: 14,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={!!dark}
      aria-label="Dark mode"
      onClick={toggle}
      className={`flex h-8 w-14 cursor-pointer items-center rounded-full p-1 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
        dark ? "justify-end bg-blue-600" : "justify-start bg-gray-300"
      }`}
    >
      {/* layout membuat thumb meluncur otomatis saat posisinya berpindah */}
      <motion.span
        layout
        transition={
          reduce
            ? { duration: 0 }
            : { type: "spring", stiffness: 500, damping: 32 }
        }
        whileTap={reduce ? undefined : { scale: 0.9 }}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-700 shadow-md"
      >
        {/* Ikon baru render setelah mount supaya tidak hydration mismatch */}
        <AnimatePresence mode="wait" initial={false}>
          {dark !== null &&
            (dark ? (
              <motion.svg key="moon" {...icon} {...svgProps}>
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </motion.svg>
            ) : (
              <motion.svg key="sun" {...icon} {...svgProps}>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2m-2.34-7.07-1.41 1.41M6.34 17.66l-1.41 1.41m0-12.73 1.41 1.41m11.32 11.32 1.41 1.41" />
              </motion.svg>
            ))}
        </AnimatePresence>
      </motion.span>
    </button>
  );
}
