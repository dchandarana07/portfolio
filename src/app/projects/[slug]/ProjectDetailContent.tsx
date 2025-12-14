"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  MapPin,
  Calendar,
  Building2,
  User
} from "lucide-react";
import { ProjectData } from "@/data/projectsData";
import { ProjectSectionRenderer } from "@/components/ProjectSectionRenderer";
import { cn } from "@/lib/utils";

const statusColors: Record<string, { bg: string; text: string }> = {
  "In Production": { bg: "bg-green-100", text: "text-green-700" },
  "Live": { bg: "bg-green-100", text: "text-green-700" },
  "In Progress": { bg: "bg-yellow-100", text: "text-yellow-700" },
  "Internal": { bg: "bg-purple-100", text: "text-purple-700" },
  "Completed": { bg: "bg-blue-100", text: "text-blue-700" },
};

interface Props {
  project: ProjectData;
}

export function ProjectDetailContent({ project }: Props) {
  const status = statusColors[project.statusBadge] || statusColors["Completed"];

  return (
    <main className="min-h-screen bg-white pt-20 pb-16">
      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        {/* Status Badge */}
        <div className="mb-4">
          <span className={cn(
            "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
            status.bg, status.text
          )}>
            {project.statusBadge}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {project.title}
        </h1>

        {/* One-liner */}
        <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
          {project.oneLiner}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
          {project.role && (
            <div className="flex items-center gap-1.5">
              <User size={14} />
              <span>{project.role}</span>
            </div>
          )}
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

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Links */}
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  link.href === "#"
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90"
                )}
              >
                {link.label}
                {link.href !== "#" && <ExternalLink size={14} />}
              </a>
            ))}
          </div>
        )}
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.techChips.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-700 text-sm rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Short Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        <div className="bg-gray-50 rounded-2xl p-6">
          <p className="text-gray-700 leading-relaxed">{project.shortDescription}</p>
        </div>
      </motion.div>

      {/* Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {project.sections.map((section, index) => (
          <ProjectSectionRenderer
            key={section.heading}
            section={section}
            index={index}
          />
        ))}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
      >
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Interested in this project?
          </h3>
          <p className="text-gray-600 mb-6">
            Let&apos;s discuss how I built it or explore collaboration opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
            <Link
              href="/#projects"
              className="px-6 py-3 bg-white text-gray-700 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
