"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Brain, Code2, BarChart3, Server } from "lucide-react";
import { personalInfo, projects, experiences } from "@/data/portfolio";
import Image from "next/image";

export function Hero() {
  const stats = [
    { value: projects.length.toString(), label: "Shipped Projects" },
    { value: experiences.length.toString(), label: "Roles" },
    { value: "Live", label: "Production Systems" },
  ];

  const featureCards = [
    {
      icon: Server,
      title: "Backend & Distributed Systems",
      description: "AWS, Java/Python APIs, reliability, observability, rollout safety",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50",
      iconColor: "text-cyan-600",
    },
    {
      icon: Brain,
      title: "AI Systems in Production",
      description: "ASR pipelines, task queues, evaluation, accessibility-first outputs",
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50",
      iconColor: "text-violet-600",
    },
    {
      icon: Code2,
      title: "Full-Stack + iOS Delivery",
      description: "Next.js + FastAPI apps, SwiftUI products, real UX and edge cases",
      gradient: "from-orange-500 to-rose-600",
      bgGradient: "from-orange-50 to-rose-50",
      iconColor: "text-orange-600",
    },
  ];

  const nameText = personalInfo.name;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-24 pb-16">
      {/* Background gradients - matching reference */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-violet-300/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-32 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-cyan-300/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-1/3 w-[350px] h-[350px] bg-gradient-to-tr from-pink-300/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Profile Photo - larger like reference */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1.5 shadow-2xl shadow-blue-500/20">
            <div className="w-full h-full rounded-full bg-gray-100 overflow-hidden">
              {personalInfo.profileImage ? (
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                  <span className="text-5xl font-bold text-blue-600">
                    {personalInfo.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Tagline Badge - matching reference style */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-600 border border-gray-200/60 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            {personalInfo.tagline}
          </span>
        </motion.div>

        {/* Main Heading - larger like reference */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5rem] font-bold mb-5 leading-tight"
        >
          <span className="text-gray-900">Hi, I&apos;m </span>
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {nameText}
            </span>
            {/* Shimmer animation */}
            <motion.span
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 2,
                delay: 0.8,
                ease: "easeInOut"
              }}
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
            />
          </span>
        </motion.h1>

        {/* Subtitle - matching reference */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl font-medium text-gray-700 mb-6"
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* Description - matching reference styling */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {personalInfo.shortBio}
        </motion.p>

        {/* Feature Cards - matching reference exactly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12"
        >
          {featureCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300 cursor-default"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.bgGradient} flex items-center justify-center mb-4 mx-auto`}>
                <card.icon className={`w-5 h-5 ${card.iconColor}`} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1.5 text-base">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-full font-medium text-base shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-shadow duration-300"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="px-8 py-3.5 bg-white text-gray-700 rounded-full font-medium text-base border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
          >
            Contact
          </motion.a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-12 sm:gap-16 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="text-center"
            >
              <p className={`text-3xl sm:text-4xl font-bold ${stat.value === "Live" ? "bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent" : "text-gray-900"}`}>
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          {[
            { href: personalInfo.github, icon: Github, label: "GitHub" },
            { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
            { href: "#skills", icon: BarChart3, label: "Skills" },
          ].map((social) => (
            <motion.a
              key={social.label}
              whileHover={{ scale: 1.1, y: -2 }}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="p-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block text-gray-300 hover:text-gray-500 transition-colors duration-200"
          >
            <ArrowDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
