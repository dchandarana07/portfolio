"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { projectsLE } from "@/data/portfolio-le";
import { cn } from "@/lib/utils";

const colorMap: Record<string, { bg: string; text: string }> = {
  cyan: { bg: "bg-cyan-50", text: "text-cyan-600" },
  blue: { bg: "bg-blue-50", text: "text-blue-600" },
  purple: { bg: "bg-purple-50", text: "text-purple-600" },
  orange: { bg: "bg-orange-50", text: "text-orange-600" },
};

export function ProjectsLE() {
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
    <section id="projects" className="py-24 bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              <span className="text-gray-900">Featured </span>
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base">
              Production systems and products—backend, AI, and mobile
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {projectsLE.map((project) => {
              const colors = colorMap[project.color];
              return (
                <motion.div
                  key={project.id}
                  layout
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300"
                >
                  <div className="p-5 pb-0">
                    <span
                      className={cn(
                        "inline-block px-2.5 py-1 rounded-full text-xs font-medium mb-3",
                        colors.bg,
                        colors.text
                      )}
                    >
                      Featured
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="px-5 pb-5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-md">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
