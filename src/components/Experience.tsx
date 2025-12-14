"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Building2, Circle } from "lucide-react";
import { experiences } from "@/data/portfolio";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="experience" className="py-24">
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
              <span className="text-gray-900">Professional </span>
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-gray-500 text-base">
              Shipping impact across Payments, education, and internal tooling
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - center on desktop, left on mobile */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 mb-14 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-500 border-4 border-white shadow-lg z-10 mt-8" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card */}
                <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300"
                  >
                    {/* Company Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {exp.company}
                        </h3>
                        <p className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-medium text-sm">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {exp.startDate} - {exp.endDate}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="text-gray-500 text-sm flex items-start gap-2"
                        >
                          <Circle className="w-1.5 h-1.5 mt-2 fill-cyan-500 text-cyan-500 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-50">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
