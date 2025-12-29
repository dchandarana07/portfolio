export const personalInfoLE = {
  name: "Divyansh Chandarana",
  title: "Software Engineer",
  tagline: "Software Engineering • AI Systems",
  subtitle: "Computer Science @ Arizona State University",
  shortBio: "Building production software at ASU Learning Enterprise over nearly 3 years—at the intersection of backend systems, applied AI, and workflow automation. Progressed across roles while building and shipping automation tools that reduce hours of manual work (including comprehensive market research pipelines), contributing to production AI systems (AI Transcript, AI Grader, and Claude Code enablement), and shipping high-volume backend services at Amazon—turning operational workflows into reliable, scalable systems.",
  email: "divyanshc097@gmail.com",
  phone: "+1 623-286-5457",
  github: "https://github.com/dchandarana07",
  linkedin: "https://linkedin.com/in/dchandarana",
  location: "Tempe, Arizona",
  profileImage: "",
  resumeUrl: "/resume.pdf",
};

export interface LEProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  color: "cyan" | "blue" | "purple" | "orange";
}

export const projectsLE: LEProject[] = [
  {
    id: "ai-transcript",
    title: "AI Transcript",
    description: "Accessibility-first transcription platform used in live programs, with a focus on ASR evaluation, quality benchmarking, and scalable delivery.",
    technologies: ["Python", "Applied AI", "Evaluation (WER/CER)", "Automation"],
    color: "cyan",
  },
  {
    id: "market-research-tool",
    title: "Market Research Tool",
    description: "Automation pipelines for market, skills, and program research—reducing manual effort and improving internal decision-making.",
    technologies: ["Python", "SQL", "Automation", "Dashboards/Reporting"],
    color: "blue",
  },
  {
    id: "claude-code-enablement",
    title: "Claude Code Enablement",
    description: "Org-wide enablement of applied AI workflows through onboarding, troubleshooting, and practical integration into existing team processes.",
    technologies: ["Applied AI", "Workflow Enablement", "Documentation", "Automation"],
    color: "purple",
  },
  {
    id: "ai-grader",
    title: "AI Grader",
    description: "Support tooling for grading operations, contributing to internal scale and workflow efficiency.",
    technologies: ["Python", "Automation", "Applied AI", "Workflow Enablement"],
    color: "orange",
  },
];

export interface LEExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  bullets: string[];
  technologies: string[];
}

export const experiencesLE: LEExperience[] = [
  {
    id: "asu-research-analyst",
    role: "Research Analyst (Software Engineering)",
    company: "Arizona State University — Learning Enterprise",
    location: "Tempe, AZ",
    startDate: "November 2024",
    endDate: "Present",
    description: "Focused on production engineering and applied AI systems that support live Learning Enterprise programs. My work centers on automation, internal tooling, and evaluation of AI systems used in production.",
    bullets: [
      "Built and shipped internal automation tools, including end-to-end market research pipelines, reducing manual effort and improving operational visibility for internal teams",
      "Contributed to production AI systems including AI Transcript and AI Grader, supporting accessibility, grading operations, and internal scale",
      "Owned ASR evaluation and benchmarking work in Python, calculating WER/CER and comparing transcription quality against existing ASU systems to inform accuracy, reliability, and rollout decisions",
      "Supported applied AI adoption across teams by leading Claude Code enablement sessions, including onboarding, troubleshooting, and workflow integration",
      "Collaborated closely with Learning Innovations and cross-functional stakeholders to ensure systems were reliable, measurable, and production-ready",
    ],
    technologies: [],
  },
  {
    id: "amazon-intern",
    role: "Software Development Engineer Intern",
    company: "Amazon",
    location: "Tempe, AZ",
    startDate: "May 2025",
    endDate: "August 2025",
    description: "Delivered a distributed compliance API on AWS with production observability, staged rollouts, and performance tuning under real traffic.",
    bullets: [
      "Owned an end-to-end backend service processing 250K+ requests/day across global marketplaces",
      "Instrumented CloudWatch metrics, structured logging, and alerts, improving failure detection and recovery speed by 22%",
      "Reduced p99 latency by 17.8% through async handling, targeted refactors, and caching strategies",
      "Worked through design reviews, code reviews, and staged rollouts to meet availability, security, and performance requirements",
    ],
    technologies: [],
  },
  {
    id: "asu-data-analyst",
    role: "Data Analyst",
    company: "Arizona State University — Learning Enterprise",
    location: "Tempe, AZ",
    startDate: "January 2024",
    endDate: "October 2024",
    description: "Worked closely with senior analysts to analyze learner behavior, course performance, and program outcomes across Learning Enterprise offerings.",
    bullets: [
      "Built end-of-course survey decks used by stakeholders to assess course quality, engagement, and learner outcomes",
      "Conducted longitudinal analysis across sessions and programs, evaluating trends in engagement rate, pass rate, growth rate, and retention",
      "Performed statistical analysis to aggregate learner-level metrics into course- and program-level insights",
      "Researched and presented comparative analysis of session-based vs self-paced course engagement, sharing findings at internal and professional development forums",
      "Translated analytical results into clear, presentation-ready insights for non-technical stakeholders",
    ],
    technologies: [],
  },
  {
    id: "asu-grader",
    role: "Grader / Program Support",
    company: "Arizona State University — Learning Enterprise",
    location: "Tempe, AZ",
    startDate: "May 2023",
    endDate: "December 2023",
    description: "Provided learner-facing academic and operational support across live courses, building foundational understanding of course delivery workflows.",
    bullets: [
      "Graded coursework for chemistry courses, ensuring consistency and quality across assessments",
      "Supported course build-out by creating quizzes, integrating H5P interactive content, and updating instructional materials",
      "Assisted with content creation and modification, including image assets and instructional layouts",
      "Performed quality assurance (QA) across multiple courses to validate accuracy, structure, and learner experience prior to release",
    ],
    technologies: [],
  },
];

export const skillsLE = {
  intro: "A practical, production-focused toolkit developed through sustained work across Learning Enterprise systems and high-volume backend services.",
  groups: [
    {
      title: "Backend & Systems Engineering",
      details: "Python, Java, REST API design, distributed systems fundamentals, reliability, observability, rollout safety, performance analysis, production debugging",
    },
    {
      title: "Applied AI Systems",
      details: "Speech-to-text pipelines (ASR), WER/CER evaluation, task queues, prompt-driven automation, accessibility-first AI outputs, model quality validation",
    },
    {
      title: "Data Analysis & Research",
      details: "Statistical analysis, longitudinal analysis, learner engagement metrics, pass-rate and growth analysis, survey design, stakeholder reporting",
    },
    {
      title: "Automation & Internal Tooling",
      details: "Workflow automation, market research pipelines, scripting for operational efficiency, internal tool development",
    },
    {
      title: "Cloud & Infrastructure",
      details: "AWS (EC2, ECS, S3, CloudWatch), Docker, CI/CD pipelines, Linux environments",
    },
    {
      title: "Collaboration & Enablement",
      details: "Cross-functional collaboration, technical communication, Claude Code enablement, documentation, knowledge transfer",
    },
  ],
};
