"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";
import { radarCategories, technicalSkills } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Hexagon, BarChart3 } from "lucide-react";

// Bar chart data - reflecting skill depth (number of technologies/areas of expertise)
const barChartData = [
  { name: "Backend &\nCloud", value: 12, color: "#06b6d4" },
  { name: "Applied AI\nSystems", value: 10, color: "#8b5cf6" },
  { name: "Full-Stack", value: 9, color: "#3b82f6" },
  { name: "Data &\nPipelines", value: 8, color: "#ec4899" },
  { name: "DevOps &\nInfra", value: 7, color: "#f97316" },
  { name: "Mobile/iOS", value: 5, color: "#10b981" },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [chartType, setChartType] = useState<"radar" | "bar">("radar");

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
            <p className="text-gray-500 max-w-xl mx-auto">
              A practical toolkit across backend, cloud, and applied AI—built for shipping
            </p>
          </motion.div>

          {/* Chart Type Toggle */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-2 mb-8"
          >
            <button
              onClick={() => setChartType("radar")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                chartType === "radar"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-gray-600 border border-gray-200"
              )}
            >
              <Hexagon size={16} />
              Radar Chart
            </button>
            <button
              onClick={() => setChartType("bar")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                chartType === "bar"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-gray-600 border border-gray-200"
              )}
            >
              <BarChart3 size={16} />
              Bar Chart
            </button>
          </motion.div>

          {/* Charts Section */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-6 mb-16"
          >
            {/* Skill Proficiency Chart */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/50 shadow-lg">
              <h3 className="text-lg font-semibold text-center mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Skill Proficiency
              </h3>
              <div className="h-72">
                {chartType === "radar" ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarCategories}>
                      <PolarGrid stroke="#e5e7eb" />
                      <PolarAngleAxis
                        dataKey="name"
                        tick={{ fill: '#6b7280', fontSize: 11 }}
                      />
                      <Radar
                        name="Skills"
                        dataKey="value"
                        stroke="#3b82f6"
                        fill="url(#radarGradient)"
                        fillOpacity={0.5}
                        strokeWidth={2}
                      />
                      <defs>
                        <linearGradient id="radarGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.8} />
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.4} />
                        </linearGradient>
                      </defs>
                    </RadarChart>
                  </ResponsiveContainer>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={radarCategories} layout="vertical">
                      <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11, fill: '#6b7280' }} />
                      <YAxis dataKey="name" type="category" width={80} tick={{ fontSize: 11, fill: '#6b7280' }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                        }}
                      />
                      <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                        {radarCategories.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={`hsl(${180 + index * 30}, 70%, 50%)`} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>

            {/* Tech Stack Distribution */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/50 shadow-lg">
              <h3 className="text-lg font-semibold text-center mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Tech Stack Distribution
              </h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barChartData}>
                    <XAxis dataKey="name" tick={{ fontSize: 9, fill: '#6b7280' }} interval={0} />
                    <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {barChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* Technical Skills Title */}
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-center mb-8 text-gray-900"
          >
            Technical Skills
          </motion.h3>

          {/* Technical Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {Object.entries(technicalSkills).map(([category, skills], index) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 border border-gray-200/50 shadow-lg"
              >
                <h4 className="font-semibold text-lg mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
