"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full md:max-h-[85vh] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Header Image */}
            <div className="h-48 md:h-56 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl font-bold text-cyan-500/20">
                  {project.title.charAt(0)}
                </span>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors text-gray-700"
              >
                <X size={20} />
              </button>

              {/* Status badge */}
              <div className="absolute bottom-4 left-4">
                <span
                  className={cn(
                    "px-3 py-1 text-sm font-medium rounded-full",
                    project.status === "Live"
                      ? "bg-green-500 text-white"
                      : project.status === "In Development"
                      ? "bg-yellow-500 text-yellow-950"
                      : "bg-gray-200 text-gray-700"
                  )}
                >
                  {project.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(85vh-14rem)]">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>

              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                <Tag size={14} />
                {project.category.join(", ")}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.longDescription || project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                {/* View Full Details - Primary CTA */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  View Full Details
                  <ArrowRight size={18} />
                </Link>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    <ExternalLink size={18} />
                    View Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
