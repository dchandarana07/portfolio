"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, MapPin, Calendar, Building2 } from "lucide-react";
import { projectsData } from "@/data/projectsData";
import { cn } from "@/lib/utils";

const statusColors: Record<string, { bg: string; text: string }> = {
  "In Production": { bg: "bg-green-100", text: "text-green-700" },
  "Live": { bg: "bg-green-100", text: "text-green-700" },
  "In Progress": { bg: "bg-yellow-100", text: "text-yellow-700" },
  "Internal": { bg: "bg-purple-100", text: "text-purple-700" },
  "Completed": { bg: "bg-blue-100", text: "text-blue-700" },
};

const colorMap: Record<string, { border: string; hoverBg: string }> = {
  cyan: { border: "hover:border-cyan-200", hoverBg: "group-hover:bg-cyan-50" },
  blue: { border: "hover:border-blue-200", hoverBg: "group-hover:bg-blue-50" },
  purple: { border: "hover:border-purple-200", hoverBg: "group-hover:bg-purple-50" },
  green: { border: "hover:border-green-200", hoverBg: "group-hover:bg-green-50" },
  orange: { border: "hover:border-orange-200", hoverBg: "group-hover:bg-orange-50" },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white pt-20 pb-16">
      {/* Back Navigation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          All Projects
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          A collection of projects I&apos;ve worked on — from production AI systems to mobile apps and backend infrastructure.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {projectsData.map((project, index) => {
            const status = statusColors[project.statusBadge] || statusColors["Completed"];
            const colors = colorMap[project.color || "blue"];

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={`/projects/${project.slug}`} className="block group">
                  <div className={cn(
                    "bg-white rounded-2xl border border-gray-100 p-6 transition-all duration-300",
                    "hover:shadow-lg hover:shadow-gray-200/60",
                    colors.border
                  )}>
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      {/* Content */}
                      <div className="flex-1">
                        {/* Status Badge */}
                        <span className={cn(
                          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mb-3",
                          status.bg, status.text
                        )}>
                          {project.statusBadge}
                        </span>

                        {/* Title */}
                        <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                          {project.title}
                        </h2>

                        {/* One-liner */}
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {project.oneLiner}
                        </p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                          {project.organization && (
                            <div className="flex items-center gap-1.5">
                              <Building2 size={14} />
                              <span>{project.organization}</span>
                            </div>
                          )}
                          {project.timeframe && (
                            <div className="flex items-center gap-1.5">
                              <Calendar size={14} />
                              <span>{project.timeframe}</span>
                            </div>
                          )}
                          {project.location && (
                            <div className="flex items-center gap-1.5">
                              <MapPin size={14} />
                              <span>{project.location}</span>
                            </div>
                          )}
                        </div>

                        {/* Tech Chips */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.techChips.slice(0, 5).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techChips.length > 5 && (
                            <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-md">
                              +{project.techChips.length - 5}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Links */}
                      {project.links.length > 0 && (
                        <div className="flex md:flex-col gap-2 md:items-end">
                          {project.links.slice(0, 2).map((link) => (
                            link.href !== "#" && (
                              <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-cyan-600 transition-colors"
                              >
                                {link.label}
                                <ExternalLink size={12} />
                              </a>
                            )
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
      >
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Want to work together?
          </h3>
          <p className="text-gray-600 mb-6">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
