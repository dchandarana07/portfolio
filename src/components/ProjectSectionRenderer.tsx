"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  CheckCircle2,
  Clock,
  Circle,
  ImageIcon,
  ArrowRight
} from "lucide-react";
import {
  ProjectSection,
  StatItem,
  FeatureItem,
  ArchitectureSection as ArchitectureSectionData
} from "@/data/projectsData";

interface SectionRendererProps {
  section: ProjectSection;
  index: number;
}

export function ProjectSectionRenderer({ section, index }: SectionRendererProps) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className="mb-10"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.heading}</h2>
      {renderContent(section)}
    </motion.div>
  );
}

function renderContent(section: ProjectSection) {
  switch (section.kind) {
    case "callout":
      return <CalloutSection content={section.content as string} />;
    case "text":
      return <TextSection content={section.content as string} />;
    case "bullets":
      return <BulletsSection content={section.content as string[]} />;
    case "stats":
      return <StatsSection content={section.content as StatItem[]} />;
    case "features":
      return <FeaturesSection content={section.content as FeatureItem[]} />;
    case "architecture":
      return <ArchitectureSectionComponent content={section.content as ArchitectureSectionData} />;
    case "images":
      return <ImagesSection content={section.content as string[]} />;
    case "timeline":
      return <TimelineSection content={section.content as string[]} />;
    default:
      return null;
  }
}

function CalloutSection({ content }: { content: string }) {
  return (
    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-xl p-5">
      <div className="flex gap-3">
        <Lightbulb className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
        <p className="text-gray-700 leading-relaxed text-[15px]">{content}</p>
      </div>
    </div>
  );
}

function TextSection({ content }: { content: string }) {
  return (
    <p className="text-gray-600 leading-relaxed text-[15px]">{content}</p>
  );
}

function BulletsSection({ content }: { content: string[] }) {
  return (
    <ul className="space-y-2.5">
      {content.map((bullet, i) => (
        <li key={i} className="flex items-start gap-3 text-gray-600 text-[15px]">
          <Circle className="w-1.5 h-1.5 mt-2.5 fill-cyan-500 text-cyan-500 flex-shrink-0" />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  );
}

function StatsSection({ content }: { content: StatItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {content.map((stat, i) => (
        <div
          key={i}
          className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm"
        >
          <p className={`text-2xl font-bold ${stat.value.includes("TODO") ? "text-gray-400" : "text-gray-900"}`}>
            {stat.value}
          </p>
          <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

function FeaturesSection({ content }: { content: FeatureItem[] }) {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Completed":
        return { bg: "bg-green-50", text: "text-green-700", icon: CheckCircle2 };
      case "In Progress":
        return { bg: "bg-yellow-50", text: "text-yellow-700", icon: Clock };
      case "Planned":
        return { bg: "bg-gray-50", text: "text-gray-500", icon: Circle };
      default:
        return { bg: "bg-gray-50", text: "text-gray-500", icon: Circle };
    }
  };

  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {content.map((feature, i) => {
        const styles = getStatusStyles(feature.status);
        const StatusIcon = styles.icon;
        return (
          <div
            key={i}
            className="flex items-center justify-between gap-3 bg-white border border-gray-100 rounded-lg p-3"
          >
            <span className="text-gray-700 text-sm">{feature.name}</span>
            <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${styles.bg} ${styles.text}`}>
              <StatusIcon className="w-3 h-3" />
              {feature.status}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function ArchitectureSectionComponent({ content }: { content: ArchitectureSectionData }) {
  const flowSteps = content.flow?.split("\n").filter(Boolean) || [];

  return (
    <div className="space-y-4">
      {flowSteps.length > 0 && (
        <div className="bg-gray-50 rounded-xl p-4 overflow-x-auto">
          <div className="font-mono text-sm space-y-1.5">
            {flowSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-700">
                <ArrowRight className="w-3 h-3 text-cyan-500 flex-shrink-0" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {content.bullets && content.bullets.length > 0 && (
        <ul className="space-y-2">
          {content.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-600 text-[15px]">
              <Circle className="w-1.5 h-1.5 mt-2.5 fill-cyan-500 text-cyan-500 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ImagesSection({ content }: { content: string[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {content.map((placeholder, i) => (
        <div
          key={i}
          className="bg-gray-50 border border-gray-100 rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[160px]"
        >
          <ImageIcon className="w-8 h-8 text-gray-300 mb-3" />
          <p className="text-sm text-gray-400">{placeholder}</p>
        </div>
      ))}
    </div>
  );
}

function TimelineSection({ content }: { content: string[] }) {
  return (
    <div className="relative pl-6 border-l-2 border-cyan-200 space-y-4">
      {content.map((item, i) => (
        <div key={i} className="relative">
          <div className="absolute -left-[25px] w-3 h-3 rounded-full bg-cyan-500" />
          <p className="text-gray-600 text-[15px]">{item}</p>
        </div>
      ))}
    </div>
  );
}
