"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Mic2, Workflow, Users } from "lucide-react";

const impactCards = [
  {
    title: "Production AI systems in active use",
    body: "Contributed to production AI systems including AI Transcript and AI Grader, supporting accessibility, grader management, and internal scale across live programs. AI Transcript has supported accessibility improvements for 12,000+ learners across courses and programs.",
    icon: Sparkles,
    bgGradient: "from-cyan-50 to-blue-50",
    iconColor: "text-cyan-600",
  },
  {
    title: "ASR evaluation & quality benchmarking (owned)",
    body: "Led ASR evaluation and benchmarking in Python, calculating WER/CER to assess transcription quality and compare outputs against existing ASU systems—informing accuracy, reliability, and rollout decisions for AI Transcript and related workflows.",
    icon: Mic2,
    bgGradient: "from-blue-50 to-indigo-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Operational efficiency through automation",
    body: "Built and shipped automation tools—including comprehensive market research pipelines—that reduce hours of manual work and improve internal visibility for Learning Enterprise teams.",
    icon: Workflow,
    bgGradient: "from-purple-50 to-pink-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Org-wide AI enablement",
    body: "Led Claude Code onboarding and enablement sessions across Learning Enterprise teams, supporting setup, troubleshooting, and guided adoption of applied AI workflows.",
    icon: Users,
    bgGradient: "from-amber-50 to-orange-50",
    iconColor: "text-amber-600",
  },
];

export function ImpactLE() {
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
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              <span className="text-gray-900">Impact at </span>
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Learning Enterprise</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {impactCards.map((card) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.bgGradient} flex items-center justify-center mb-4`}>
                  <card.icon className={`w-5 h-5 ${card.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
