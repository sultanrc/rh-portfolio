"use client";
import { motion } from "framer-motion";

export default function Background() {
  return (
    <section className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-10 py-16 md:grid-cols-4 md:gap-16 md:px-6 md:py-24">
      {/* Heading */}
      <motion.div
        className="col-span-1"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <h2 className="text-md text-left font-bold tracking-widest text-blue-500 md:text-right">
          BACKGROUND
        </h2>
      </motion.div>

      {/* Description */}
      <motion.div
        className="col-span-1 md:col-span-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <p className="text-sm font-regular leading-relaxed text-gray-600">
          Civil engineer with{" "}
          <strong className="font-semibold text-gray-900">
            3.5 years of experience
          </strong>{" "}
          in quantity take-off, shop/as-built drawings, and project
          documentation, progressing from supporting{" "}
          <strong className="font-semibold text-gray-900">
            10 parallel projects
          </strong>{" "}
          (up to IDR 6 billion) to a site engineering role on an{" "}
          <strong className="font-semibold text-gray-900">
            IDR 27 billion tank repair project
          </strong>{" "}
          at{" "}
          <strong className="font-semibold text-gray-900">
            Pertamina TBBM Plumpang
          </strong>
          .{" "}
          <strong className="font-semibold text-gray-900">
            BNSP-certified Building Construction Site Manager
          </strong>{" "}
          and Associate Expert in Construction K3. Skilled in aligning
          engineering documents with actual site conditions.
        </p>
      </motion.div>
    </section>
  );
}
