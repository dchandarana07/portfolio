"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skillsLE } from "@/data/portfolio-le";

export function SkillsLE() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              <span className="text-gray-900">Skills & </span>
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {skillsLE.intro}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillsLE.groups.map((group) => (
              <motion.div
                key={group.title}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 border border-gray-200/50 shadow-lg"
              >
                <h3 className="font-semibold text-lg mb-3 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  {group.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {group.details}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
