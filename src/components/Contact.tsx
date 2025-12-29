"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Github, Linkedin, Download, Copy, Check, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
    <section id="contact" className="py-24">
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
              <span className="text-gray-900">Let&apos;s </span>
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Interested in collaboration or just want to chat about tech?
            </p>
          </motion.div>

          {/* Contact Cards - Centered */}
          <motion.div variants={itemVariants} className="max-w-md mx-auto space-y-4">
            {/* Email */}
            <motion.div
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 flex items-center justify-center">
                <Mail className="w-5 h-5 text-violet-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400">Email</p>
                <p className="font-medium text-gray-900 text-sm">{personalInfo.email}</p>
              </div>
              <button
                onClick={copyEmail}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200 rounded-lg hover:bg-gray-100"
              >
                {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
              </button>
            </motion.div>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400">LinkedIn</p>
                <p className="font-medium text-gray-900 text-sm">{personalInfo.name}</p>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center">
                <Github className="w-5 h-5 text-cyan-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400">GitHub</p>
                <p className="font-medium text-gray-900 text-sm">@{personalInfo.github.split("/").pop()}</p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-pink-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400">Location</p>
                <p className="font-medium text-gray-900 text-sm">{personalInfo.location}</p>
              </div>
            </motion.div>

            {/* Download Resume Button */}
            <motion.a
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-xl font-medium shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Open to Opportunities Badge */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-12"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-50 text-green-700 rounded-full font-medium text-sm border border-green-100">
              <Sparkles className="w-4 h-4" />
              Open to Opportunities
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-400 text-sm mt-5"
          >
            Open to full-time software engineering roles, with a focus on backend systems, applied AI, and production tooling..
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
