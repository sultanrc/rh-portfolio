"use client";
import { motion, type Variants } from "motion/react";
import DarkModeButton from "./DarkModeButton";

const text = "Hello";
const CHAR_DELAY = 0.12; // jeda antar huruf
const START_DELAY = 0.3; // jeda sebelum mulai mengetik
const typingEnd = START_DELAY + text.length * CHAR_DELAY;

const ease = [0.22, 1, 0.36, 1] as const;

const intro: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 1.2, staggerChildren: 0.05 } },
};

const word: Variants = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.9, ease } },
};

const cta: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 2.4, staggerChildren: 0.3 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease },
  },
};

const point: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 200, damping: 14 },
  },
};

function Word({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="inline-block overflow-hidden pb-1 align-bottom">
        <motion.span variants={word} className="inline-block">
          {children}
        </motion.span>
      </span>{" "}
    </>
  );
}

const rest =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.".split(
    " ",
  );

export default function Hero() {
  return (
    <section
      id="about"
      className="mx-auto max-w-full pt-6 pb-32 px-10 md:pb-40 lg:px-20 lg:pb-60"
    >
      <div className="mx-auto max-w-7xl flex justify-end">
        <DarkModeButton />
      </div>

      <div className="mx-auto max-w-6xl flex flex-col gap-40 mt-20 sm:gap-12 md:mt-28 md:gap-16 lg:mt-32">
        <h2 className="text-4xl font-bold flex items-center">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: START_DELAY + index * CHAR_DELAY,
                duration: 0.25,
                ease: "easeOut",
              }}
            >
              {letter}
            </motion.span>
          ))}

          {/* Emoji tangan */}
          <motion.span
            className="ml-2"
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: [0, 20, -10, 20, -10, 0],
            }}
            transition={{
              opacity: { delay: typingEnd, duration: 0.2 },
              scale: {
                delay: typingEnd,
                type: "spring",
                stiffness: 300,
                damping: 15,
              },
              rotate: {
                delay: typingEnd + 0.1,
                duration: 0.8,
                ease: "easeInOut",
              },
            }}
            style={{
              display: "inline-block",
              transformOrigin: "bottom center",
            }}
          >
            👋
          </motion.span>
        </h2>

        <motion.p
          variants={intro}
          initial="hidden"
          animate="show"
          className="max-w-xl text-4xl md:text-4xl"
        >
          <Word>I’m</Word>
          <Word>
            <span className="font-bold">Rezza</span>,
          </Word>
          {rest.map((w, i) => (
            <Word key={i}>{w}</Word>
          ))}
        </motion.p>

        <motion.p
          variants={cta}
          initial="hidden"
          animate="show"
          className="max-w-xl font-medium font-mono text-xl sm:text-lg md:text-xl"
        >
          <motion.span variants={fadeUp} className="inline-block">
            Get in touch
          </motion.span>{" "}
          <motion.span variants={point} className="inline-block">
            👉
          </motion.span>{" "}
          <motion.a
            variants={fadeUp}
            href="mailto:rezzahanafiah@gmail.com"
            className="relative inline-block font-medium text-gray-900
      after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full
      after:bg-blue-600 after:transition-all after:duration-300
      after:content-['']
      before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full
      before:bg-blue-600 before:transition-all before:duration-300
      before:content-['']
      hover:before:h-full hover:text-white dark:text-gray-100"
          >
            <span className="relative z-10">rezzahanafiah@gmail.com</span>
          </motion.a>
        </motion.p>
      </div>
    </section>
  );
}
