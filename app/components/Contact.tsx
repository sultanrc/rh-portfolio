"use client"; // hapus kalau bukan Next.js App Router

import { motion, type Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const headline: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const word: Variants = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.9, ease } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease },
  },
};

const title = "Your Next Project Starts with a Conversation";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mx-auto flex max-w-2xl flex-col justify-between px-6 py-36 gap-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2
        className="mx-auto text-center text-4xl font-bold"
        variants={headline}
        aria-label={title}
      >
        {title.split(" ").map((w, i) => (
          <span
            key={i}
            aria-hidden
            className="inline-block overflow-hidden pb-1 align-bottom"
          >
            <motion.span variants={word} className="inline-block">
              {w}
            </motion.span>
            {"\u00A0"}
          </span>
        ))}
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mx-10 md:mx-20 text-center text-sm lg:text-md leading-relaxed text-gray-500"
      >
        Looking for someone with hands-on engineering experience and a
        commitment to quality? Let’s connect and explore what we can accomplish
        together. Feel free to click the button below to get in touch with me
        via email.
      </motion.p>

      <motion.a
        href="mailto:rezzahanafiah@gmail.com"
        variants={fadeUp}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.97 }}
        className="group mx-auto inline-flex items-center gap-2 rounded-lg border border-blue-600 bg-white px-6 py-3 text-sm font-mono font-semibold text-blue-600 transition-colors duration-300 hover:bg-blue-600 hover:text-white"
      >
        Get in Touch
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </motion.a>
    </motion.section>
  );
}
