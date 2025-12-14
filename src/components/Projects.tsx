"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { projects, projectCategories, Project } from "@/data/portfolio";
import { ProjectModal } from "./ProjectModal";
import { cn } from "@/lib/utils";

const colorMap: Record<string, { bg: string; text: string; border: string; hover: string }> = {
  cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-100", hover: "hover:bg-cyan-100" },
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100", hover: "hover:bg-blue-100" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100", hover: "hover:bg-purple-100" },
  pink: { bg: "bg-pink-50", text: "text-pink-600", border: "border-pink-100", hover: "hover:bg-pink-100" },
  green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-100", hover: "hover:bg-green-100" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-100", hover: "hover:bg-orange-100" },
};

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) =>
        project.category.some((cat) =>
          cat.toLowerCase().includes(activeCategory.toLowerCase())
        )
      );

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

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
    <>
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

            {/* Category Filter */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    activeCategory === category
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-blue-500/20"
                      : "bg-white text-gray-500 hover:text-gray-700 hover:bg-gray-100 border border-gray-200"
                  )}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredProjects.map((project) => {
                const colors = colorMap[project.color || "blue"];
                return (
                  <motion.div
                    key={project.id}
                    layout
                    variants={itemVariants}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300"
                  >
                    {/* Project Header with Badge */}
                    <div className="p-5 pb-0">
                      {/* Featured Badge */}
                      {project.featured && (
                        <span className={cn(
                          "inline-block px-2.5 py-1 rounded-full text-xs font-medium mb-3",
                          colors.bg, colors.text
                        )}>
                          Featured
                        </span>
                      )}

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {project.title}
                      </h3>

                      {/* Subtitle */}
                      {project.subtitle && (
                        <p className={cn("text-sm font-medium mb-2", colors.text)}>
                          {project.subtitle}
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-gray-500 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="px-5 pb-4">
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

                    {/* Footer with Links */}
                    <div className="px-5 py-4 border-t border-gray-50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors duration-200 rounded-md hover:bg-gray-100"
                          >
                            <Github size={16} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors duration-200 rounded-md hover:bg-gray-100"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>

                      <button
                        onClick={() => openProjectModal(project)}
                        className={cn(
                          "flex items-center gap-1 text-sm font-medium transition-colors duration-200",
                          colors.text,
                          "hover:opacity-80"
                        )}
                      >
                        View Details
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </>
  );
}
