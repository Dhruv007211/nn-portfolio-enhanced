import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const resumePath = "/resume.html"; // public folder me

  return (
    <section id="resume" className="py-12">
      <motion.h2
        className="text-3xl font-bold glow-underline text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Resume
      </motion.h2>

      <motion.div
        className="mt-6 flex justify-center gap-4 flex-wrap"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Open Resume */}
        <button
          onClick={() => window.open(resumePath, "_blank")}
          className="px-5 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Open Resume
        </button>

        {/* Download Resume */}
        <a
          href={resumePath}
          download="Dhruv_Singh_Resume.html"
          className="px-5 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition-colors duration-200"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
