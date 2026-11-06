"use client";
import { motion, type Variants } from "motion/react";
import { projects } from "../data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

const card: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const imageWrap: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  show: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 1.1, delay: 0.6, ease },
  },
};

const image: Variants = {
  hidden: { scale: 1.25 },
  show: { scale: 1, transition: { duration: 1.4, delay: 0.6, ease } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: 0.6, ease },
  },
};

export default function Projects() {
  return (
    <section className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-10 md:px-6 py-12 md:grid-cols-4 md:gap-16 md:py-20">
      {/* Section title */}
      <div className="col-span-1">
        <motion.h2
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="text-left text-md font-bold tracking-widest text-blue-500 md:text-right"
        >
          PROJECTS
        </motion.h2>
      </div>

      {/* Projects content */}
      <div className="col-span-1 flex flex-col gap-12 md:col-span-3">
        {projects.map((project) => (
          <motion.article
            key={project.id}
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-4 sm:flex-row sm:gap-6 md:gap-8"
          >
            {/* Project image */}
            <motion.div
              variants={imageWrap}
              className="aspect-video w-full shrink-0 overflow-hidden bg-sky-200 sm:aspect-square sm:w-40 md:aspect-auto md:h-80 md:w-100"
            >
              <motion.img
                variants={image}
                whileHover={{ scale: 1.05 }}
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Project details */}
            <div className="flex min-w-0 flex-col justify-between gap-3">
              <div className="flex flex-col gap-2">
                <motion.h3
                  variants={fadeUp}
                  className="text-sm font-bold leading-relaxed"
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  variants={fadeUp}
                  className="text-xs leading-relaxed text-gray-600"
                >
                  {project.description}
                </motion.p>
              </div>

              <motion.a
                variants={fadeUp}
                href="#"
                className="group inline-flex w-fit items-center gap-2 rounded-md border border-blue-600 bg-white px-3 py-1 text-[10px] font-mono font-semibold text-blue-600 transition-colors duration-300 hover:bg-blue-600 hover:text-white"
              >
                Details
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
