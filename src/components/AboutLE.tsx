"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Rocket, Lightbulb } from "lucide-react";

export function AboutLE() {
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
    <section id="about" className="py-24 relative">
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
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">About</span>
            </h2>
            <p className="text-gray-500 text-base">
              Grounded engineering, long-term thinking
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-gray-500 max-w-3xl mx-auto mb-12"
          >
            Progressed across roles while building and shipping automation tools that reduce hours of manual work (including comprehensive market research pipelines), contributing to production AI systems (AI Transcript, AI Grader, and Claude Code enablement), and shipping high-volume backend services at Amazon—turning operational workflows into reliable, scalable systems.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
                  <Target className="w-5 h-5 text-violet-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">What I Care About</h3>
              </div>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                I enjoy working close to real delivery—systems that people actually rely on, not one-off prototypes. Having started in learner-facing program support and grown into engineering work, I’m drawn to problems where technical decisions directly affect accessibility, reliability, and day-to-day operations. I care about building things that are understandable, maintainable, and useful long after the initial launch.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-pink-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">How I Think About Impact</h3>
              </div>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                I tend to measure impact pragmatically: fewer manual steps, clearer workflows, and systems that scale without adding operational complexity. For applied AI, I focus on quality and trust—how models behave in real conditions, how outputs are evaluated, and how teams can confidently rely on them in production. This mindset also shapes my approach to Claude Code enablement: making advanced tools usable in practice through thoughtful onboarding, troubleshooting, and workflows that fit existing team processes.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Looking Ahead</h3>
            </div>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              I’m interested in continuing to push applied AI systems further inside Learning Enterprise. One area of focus is bringing speech-to-text capabilities in-house, building on early work with local ASR infrastructure within AI Labs @ Learning Enterprise (e.g., Whisper on Apple silicon). Over time, this could enable more efficient, cost-effective transcription and support broader accessibility across ASU lecture content—grounded in careful evaluation and responsible rollout.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
