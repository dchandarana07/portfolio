export const personalInfo = {
  name: "Divyansh Chandarana",
  title: "Software Engineer",
  tagline: "Software Engineering • AI Systems",
  subtitle: "Computer Science @ Arizona State University",
  shortBio: "Building production software at the intersection of backend systems and applied AI. Shipping high-volume services and reliability-first tooling—from Payments APIs at Amazon to accessibility-first transcription platforms at ASU—turning messy operational workflows into clean, scalable systems.",
  email: "divyanshc097@gmail.com",
  phone: "+1 623-286-5457",
  github: "https://github.com/dchandarana07",
  linkedin: "https://linkedin.com/in/dchandarana",
  location: "Tempe, Arizona",
  profileImage: "", // Add your profile image path here, e.g., "/profile.jpg"
  resumeUrl: "/resume.pdf",
  about: `Focused on backend/cloud engineering and applied AI systems where reliability matters. Building APIs, pipelines, and automation that reduce manual load, improve observability, and ship safely under real traffic. Recent work includes a production transcription platform used across live university programs and a distributed Payments API at Amazon operating at high daily volume.`,
  mission: `Focused on backend/cloud engineering and applied AI systems where reliability matters. Building APIs, pipelines, and automation that reduce manual load, improve observability, and ship safely under real traffic. Recent work includes a production transcription platform used across live university programs and a distributed Payments API at Amazon operating at high daily volume.`,
  highlights: [
    "Shipped a distributed Payments compliance API at Amazon handling 250K+ requests/day, deployed with staged rollouts and zero-downtime releases",
    "Improved performance and reliability with observability-first instrumentation—cutting p99 latency by 17.8% and speeding detection/recovery by 22%",
    "Built an accessibility-first transcription platform at ASU serving 12,760+ learners, standardizing output quality and reducing manual operations",
    "Led Claude Code enablement across cross-functional course teams—Canvas-connected workflows, troubleshooting, and guided adoption sessions",
    "Delivered a SwiftUI study spot finder with MapKit + filtering + offline favorites + Apple Maps deep linking",
  ],
  currentFocus: [
    "Scaling ASU transcription workflows with stronger evaluation (WER/CER), reliability, and cost efficiency",
    "Building SignalQ: a QR-based, multi-tenant feedback + rewards platform (React/TypeScript + Flask + Firestore)",
    "Continuing growth in backend/distributed systems: observability, queues, caching, and production hardening",
  ],
  impactIntro: "Optimizing for outcomes that teams feel: faster debugging, fewer manual steps, clearer metrics, and systems that stay stable as usage scales.",
  impactBullets: [
    "Shipped a distributed Payments compliance API at Amazon handling 250K+ requests/day with staged rollouts and zero-downtime releases",
    "Built an accessibility-first transcription platform at ASU serving 12,760+ learners, standardizing output quality and reducing manual operations",
    "Architecting SignalQ: a QR-based, multi-tenant customer feedback platform with secure, scalable data modeling",
  ],
};

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  problem?: string;
  solution?: string;
  engineeringHighlights?: string[];
  results?: string[];
  ownership?: string[];
  technologies: string[];
  category: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: "Live" | "In Development" | "Completed" | "In Production" | "Shipped";
  color?: string;
}

export const projects: Project[] = [
  {
    id: "ai-transcript-platform",
    slug: "ai-transcript",
    title: "AI Transcript Platform",
    subtitle: "Accessibility-first transcription → clean, WCAG-friendly HTML at scale",
    description: "Production transcription pipeline for university programs: file ingestion, background processing, and structured HTML generation for screen readers and web delivery.",
    longDescription: "AI Transcript is a production transcription pipeline built to generate clean, accessible transcript outputs for real university programs. It handles file ingestion, background processing, and output formatting into structured, web-friendly HTML designed for accessibility. The system was built to reduce manual formatting overhead and make transcripts available faster, while standardizing output quality across courses.",
    problem: "Teams needed transcripts that met accessibility expectations without spending 20+ minutes manually converting messy outputs into clean HTML — and without paying expensive per-minute vendor costs.",
    solution: "Built a web-based transcription pipeline with a queued worker model, S3-backed storage, and automated HTML generation designed for accessibility.",
    engineeringHighlights: [
      "Hybrid Next.js frontend with Python FastAPI backend and Redis worker queue",
      "Cloud storage with hash-based deduplication and background task orchestration",
      "Authentication with ASU SSO (CAS) and secure JWT sessions; production deployment on AWS ECS behind an ALB",
      "Accessibility-first HTML generation (semantic structure + deep-linking)",
    ],
    results: [
      "Improved accessibility for 12,760+ learners across Learning Enterprise programs",
      "Reduced manual transcript operations by hundreds of hours per term",
    ],
    ownership: [
      "End-to-end engineering across pipeline + deployment (API/worker flow), plus ASU SSO integration and reliability hardening",
      "Led evaluation work (WER/CER methodology) to measure transcription quality and guide iteration",
    ],
    technologies: ["Next.js 15", "FastAPI", "AWS ECS", "AWS S3", "Redis", "Python", "Docker", "PostgreSQL", "JWT", "CAS SSO"],
    category: ["Backend & Cloud", "Full-Stack AI", "Educational Tech"],
    featured: true,
    status: "In Production",
    color: "cyan",
  },
  {
    id: "claude-code-enablement",
    slug: "claude-code-enablement",
    title: "Claude Code Enablement",
    subtitle: "Agentic AI adoption → Canvas-connected workflows for course teams",
    description: "Department-wide rollout enabling non-technical course teams to use agentic AI workflows through Claude Code with Canvas LMS integration.",
    longDescription: "Led an internal enablement initiative to expand agentic AI usage across ASU Learning Enterprise. The goal was to let course designers and course managers describe course-development and course-insight tasks in plain English while Claude Code runs against configured tools and course systems (Canvas) in a controlled workflow.",
    problem: "Course teams who need AI help in course production aren't developers. They needed a way to leverage agentic AI without touching code.",
    solution: "Built structured, repeatable setup processes and workflow playbooks so teams can get real outcomes from Claude Code without needing technical expertise.",
    engineeringHighlights: [
      "Canvas MCP integration for course-connected AI workflows",
      "Reusable playbooks and onboarding documentation",
      "Privacy-first workflows (no student PII/images)",
      "Cross-platform setup support (macOS + Windows)",
    ],
    results: [
      "Deployed department-wide across course design and program management teams",
      "Enabled plain-English requests for course tasks (content operations + analysis)",
    ],
    ownership: [
      "End-to-end rollout: documentation, onboarding, setup flow, and usage guidance",
      "Troubleshooting and hands-on enablement sessions",
    ],
    technologies: ["Claude Code", "Canvas API", "MCP", "Workflow Automation", "Documentation"],
    category: ["Agentic AI", "EdTech", "Enablement"],
    featured: true,
    status: "In Production",
    color: "purple",
  },
  {
    id: "signalq",
    slug: "qr-feedback-platform",
    title: "SignalQ",
    subtitle: "QR-based feedback + rewards → multi-tenant SaaS for local businesses",
    description: "Dynamic QR flows that route customers to location-specific feedback and incentives, backed by a business dashboard for analytics and follow-up.",
    longDescription: "SignalQ is a QR-based customer feedback platform designed for restaurants and retail. It generates dynamic QR codes that route customers into location-specific feedback flows and rewards, while giving businesses a dashboard for analytics and operational follow-up. The core engineering challenge is multi-tenancy: secure data separation, scalable queries, and role-based access without sacrificing speed.",
    problem: "Small businesses need an easy, measurable way to capture feedback at the point of experience — and route it into actionable insights — without building enterprise tooling.",
    solution: "Built a multi-tenant SaaS architecture with a clean frontend, a backend service layer, and Firestore data modeling + security rules for role-based access control.",
    engineeringHighlights: [
      "Multi-tenant Firestore schema (businesses, feedback, rewards) with RBAC via security rules",
      "Denormalized analytics fields and ID-based lookups for O(1) queries and scalable reporting",
      "Dynamic QR generation routed to location-specific flows",
    ],
    results: [
      "Secure multi-tenant structure designed for scalable, location-aware reporting and fast reads",
    ],
    ownership: [
      "Core architecture decisions, Firestore modeling + security, and backend integration patterns",
    ],
    technologies: ["React", "TypeScript", "Flask", "Firestore", "Python", "Tailwind CSS", "QR Generation"],
    category: ["Full-Stack AI", "Backend & Cloud"],
    featured: true,
    status: "In Development",
    color: "purple",
  },
  {
    id: "studyspace-az",
    slug: "studyspace-az",
    title: "StudySpace AZ",
    subtitle: "Native iOS study spot finder → map + smart filtering + offline favorites",
    description: "SwiftUI app using CoreLocation + MapKit + SwiftData to surface study-friendly venues with search, scoring, persistence, and deep links to Apple Maps.",
    longDescription: "StudySpace AZ is a native SwiftUI iOS app that helps students find study-friendly spots nearby — libraries, cafes, coworking spaces — without the noise of generic discovery apps. It combines location services, map + list UI, search filtering, and an offline favorites system. The experience is designed to be fast, focused, and practical for real student workflows.",
    problem: "Students need a quick way to discover quiet, study-friendly locations — not every venue in a generic map app.",
    solution: "Built a SwiftUI app using CoreLocation + MapKit with real-time filtering and a favorites system stored locally for offline access.",
    engineeringHighlights: [
      "MVVM architecture with reactive map + list synchronization",
      "Filtering: text search + high-score-only toggle; ranked results via a 'Study Score'",
      "Offline-first favorites using SwiftData; Apple Maps deep linking for directions",
    ],
    results: [
      "Offline favorites fully functional with zero network dependency once saved",
      "Clean UI for fast exploration and navigation",
    ],
    ownership: [
      "Full iOS build: location permission handling, map/list UI, persistence, and error/empty states",
    ],
    technologies: ["SwiftUI", "CoreLocation", "MapKit", "SwiftData", "MVVM", "iOS SDK"],
    category: ["Mobile Development"],
    featured: true,
    status: "Completed",
    color: "blue",
  },
];

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyIcon?: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  bullets: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "amazon",
    role: "Software Development Engineer Intern",
    company: "Amazon",
    location: "Tempe, AZ",
    startDate: "May 2025",
    endDate: "August 2025",
    current: false,
    description: "Delivered a distributed Compliance API on AWS with production observability, rollout plans, and performance tuning under real traffic.",
    bullets: [
      "Owned an end-to-end API service deployed to production, processing 250K+ daily requests across global marketplaces",
      "Instrumented CloudWatch metrics, structured logs, and alerts—improving failure detection and recovery speed by 22%",
      "Reduced p99 latency by 17.8% via async handling, targeted refactors, and caching strategies",
      "Worked through design reviews, code reviews, and staged rollouts to meet availability, security, and performance requirements",
    ],
    technologies: ["AWS", "Java", "Distributed Systems", "CloudWatch", "REST APIs", "Reliability", "Observability"],
  },
  {
    id: "asu-research",
    role: "Research Analyst / Software Developer",
    company: "Arizona State University (Learning Enterprise)",
    location: "Tempe, AZ",
    startDate: "January 2024",
    endDate: "Present",
    current: true,
    description: "Building production AI + automation workflows that reduce operational overhead and improve accessibility across live university programs. Also leading Claude Code enablement for cross-functional course teams.",
    bullets: [
      "Built and deployed an AI transcription platform supporting live program delivery, improving accessibility for 12,760+ learners",
      "Implemented pipeline and ETL workflows across Python/SQL/AWS/Docker for ingestion, preprocessing, and analytics delivery",
      "Drove reliability improvements through metrics, monitoring views, and stakeholder-ready reporting for accuracy/latency/usage",
      "Led migration work toward lower-latency, lower-cost inference infrastructure (on-prem / Apple silicon)",
      "Led Claude Code + Canvas MCP enablement across course design teams—setup, troubleshooting, and guided adoption sessions",
    ],
    technologies: ["Python", "AWS", "Docker", "ETL", "Data Pipelines", "AI Systems", "Accessibility", "Claude Code", "Canvas API"],
  },
];

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export const skills: Skill[] = [
  // Languages & Frameworks
  { name: "Python", level: 90, category: "Languages & Frameworks" },
  { name: "Java", level: 85, category: "Languages & Frameworks" },
  { name: "TypeScript", level: 85, category: "Languages & Frameworks" },
  { name: "Go", level: 70, category: "Languages & Frameworks" },
  { name: "Swift", level: 80, category: "Languages & Frameworks" },
  { name: "C++", level: 75, category: "Languages & Frameworks" },
  { name: "SQL", level: 85, category: "Languages & Frameworks" },
  { name: "React", level: 80, category: "Languages & Frameworks" },
  { name: "Node.js", level: 75, category: "Languages & Frameworks" },
  { name: "FastAPI/Flask", level: 85, category: "Languages & Frameworks" },
  { name: "SwiftUI", level: 80, category: "Languages & Frameworks" },

  // Cloud & Infrastructure
  { name: "AWS (EC2, Lambda, S3)", level: 85, category: "Cloud & Infrastructure" },
  { name: "Docker", level: 80, category: "Cloud & Infrastructure" },
  { name: "Linux/Unix", level: 85, category: "Cloud & Infrastructure" },
  { name: "GitHub Actions", level: 75, category: "Cloud & Infrastructure" },
  { name: "CI/CD", level: 80, category: "Cloud & Infrastructure" },

  // Software Engineering
  { name: "Distributed Systems", level: 80, category: "Software Engineering" },
  { name: "REST API Design", level: 90, category: "Software Engineering" },
  { name: "Observability & Monitoring", level: 85, category: "Software Engineering" },
  { name: "Data Pipelines", level: 80, category: "Software Engineering" },
  { name: "Reliability Engineering", level: 80, category: "Software Engineering" },

  // AI Systems
  { name: "ASR Pipelines", level: 85, category: "AI Systems" },
  { name: "Transcription Evaluation (WER/CER)", level: 80, category: "AI Systems" },
  { name: "Task Queues", level: 85, category: "AI Systems" },
  { name: "Accessibility-First Design", level: 80, category: "AI Systems" },
];

export const skillCategories = [
  "Languages & Frameworks",
  "Cloud & Infrastructure",
  "Software Engineering",
  "AI Systems",
];

// Technical skills organized by category (for the grid view)
export const technicalSkills = {
  "Languages & Frameworks": [
    "Python", "Go", "Java", "C++", "Swift", "C#", "JavaScript (ES6+)", "TypeScript",
    "SQL", "React", "Node.js", "Flask", "FastAPI", "Spring Boot", "SwiftUI"
  ],
  "Cloud & Infrastructure": [
    "AWS (EC2, Lambda, S3, CloudWatch)", "Docker", "GitHub Actions",
    "Linux/Unix on x86", "Git", "CI/CD Pipelines"
  ],
  "Engineering Fundamentals": [
    "Backend Development", "Distributed Systems", "REST API Design",
    "Data Pipelines", "Observability & Monitoring", "Scalability",
    "Reliability", "Testing", "SDLC"
  ],
  "Applied AI Systems": [
    "ASR Pipelines", "Transcription Evaluation (WER/CER)", "Task Queues",
    "Prompt-Driven Automation", "Accessibility-First Formatting"
  ],
};

// Radar chart categories for skill visualization
export const radarCategories = [
  { name: "Backend", value: 92 },
  { name: "Cloud/AWS", value: 88 },
  { name: "Applied AI", value: 85 },
  { name: "Full-Stack", value: 80 },
  { name: "Data/ETL", value: 82 },
  { name: "iOS/Mobile", value: 70 },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

// Project categories for filtering
export const projectCategories = [
  "All",
  "Backend & Cloud",
  "Full-Stack AI",
  "Educational Tech",
  "Mobile Development",
  "Infrastructure",
];

// Feature cards for hero section
export const featureCards = [
  {
    title: "Backend & Distributed Systems",
    description: "AWS, Linux on x86, REST APIs, reliability, observability",
  },
  {
    title: "AI Systems in Production",
    description: "ASR pipelines, task queues, evaluation, accessibility-first outputs",
  },
  {
    title: "Full-Stack + Mobile",
    description: "Next.js/FastAPI systems + SwiftUI apps with real UX",
  },
];

// AI Assistant configuration
export const aiAssistant = {
  teaser: "Ask about projects, skills, experience, or what I shipped at Amazon and ASU.",
  systemPrompt: `You are a helpful AI assistant for Divyansh Chandarana's portfolio website. You have access to all the information displayed on this portfolio and should answer questions about Divyansh's projects, skills, experience, and background.

IMPORTANT RULES:
- Only use information from this portfolio. Do not make up or hallucinate any facts.
- If asked something not covered in the portfolio, say "That information isn't available on this portfolio, but I can tell you about [related topic]."
- Be concise and recruiter-friendly in your responses.
- You can summarize projects, compare them, or map skills to specific roles.
- Maintain a professional, technical tone.

KEY FACTS:
- Divyansh is a Computer Science student at ASU (GPA 3.99)
- He was an SDE Intern at Amazon (Summer 2025) - built a distributed compliance API
- He's a Research Analyst at ASU Learning Enterprise (Jan 2024 - Present) - built AI transcription platform
- His focus areas: Backend/Cloud, Distributed Systems, Production AI Systems
- Key metrics: 250K+ daily requests at Amazon, 12,760+ learners impacted at ASU, 17.8% p99 latency reduction, 22% faster failure detection`,
};
