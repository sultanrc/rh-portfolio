"use client";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,

        ease: "easeOut",
      }}
      className="mx-auto max-w-full pt-6 pb-32 px-10 md:pb-40 lg:px-20 lg:pb-60"
    >
      <div className="flex justify-end">
        {/* Dark mode button */}
        dark mode button
      </div>

      <div className="mx-auto max-w-6xl flex flex-col gap-40 mt-20 sm:gap-12 md:mt-28 md:gap-16 lg:mt-32">
        <h2 className="text-4xl font-bold">Hello 👋</h2>

        <p className="max-w-xl text-4xl md:text-4xl">
          I’m <span className="font-bold">Rezza</span>, Lorem ipsum dolor sit
          amet consectetur adipiscing elit Ut et massa mi.
        </p>

        <p className="max-w-xl font-medium font-mono text-xl sm:text-lg md:text-xl">
          Get in touch 👉{" "}
          <a
            href="mailto:rezzahanafiah@gmail.com"
            className="relative inline-block font-medium text-gray-900
              after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full
              after:bg-blue-600 after:transition-all after:duration-300
              after:content-['']
              before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full
              before:bg-blue-600 before:transition-all before:duration-300
              before:content-['']
              hover:before:h-full hover:text-white"
          >
            <span className="relative z-10">rezzahanafiah@gmail.com</span>
          </a>
        </p>
      </div>
    </motion.section>
  );
}
