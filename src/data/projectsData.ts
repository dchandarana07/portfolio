// Project Data Model - Single Source of Truth

export type SectionKind =
  | "text"
  | "bullets"
  | "stats"
  | "features"
  | "architecture"
  | "timeline"
  | "images"
  | "callout";

export type StatusBadge =
  | "In Production"
  | "Live"
  | "In Progress"
  | "Internal"
  | "Completed";

export type FeatureStatus = "Completed" | "In Progress" | "Planned";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface FeatureItem {
  name: string;
  status: FeatureStatus;
}

export interface ArchitectureSection {
  flow?: string;
  bullets?: string[];
}

export interface ProjectSection {
  heading: string;
  kind: SectionKind;
  content: string | string[] | StatItem[] | FeatureItem[] | ArchitectureSection;
}

export interface ProjectData {
  slug: string;
  title: string;
  statusBadge: StatusBadge;
  categories: string[];
  oneLiner: string;
  shortDescription: string;
  role: string;
  organization?: string;
  timeframe?: string;
  location?: string;
  techChips: string[];
  links: ProjectLink[];
  sections: ProjectSection[];
  color?: string;
}

export const projectsData: ProjectData[] = [
  {
    slug: "ai-transcript",
    title: "AI Transcript Platform",
    statusBadge: "In Production",
    categories: ["Backend & Cloud", "Full-Stack AI", "Educational Tech", "Accessibility"],
    oneLiner: "Production transcription pipeline that converts video into clean, WCAG-compliant HTML transcripts for real university programs.",
    shortDescription: "AI Transcript is a production transcription pipeline built to generate clean, accessible transcript outputs for real university programs. It handles file ingestion, background processing, and output formatting into structured, web-friendly HTML designed for accessibility. The system reduces manual formatting overhead, speeds up transcript turnaround, and standardizes output quality across courses.",
    role: "Research Analyst / Software Developer (AI + Full-Stack)",
    organization: "Arizona State University — Learning Enterprise",
    timeframe: "2025 — Present (in production usage)",
    location: "Tempe, AZ (hybrid)",
    techChips: [
      "Next.js 15", "React 19", "TypeScript", "Tailwind", "shadcn/ui",
      "FastAPI", "Python", "Redis", "AWS S3", "Docker", "AWS ECS",
      "AWS ECR", "AWS ALB", "JWT", "CAS SSO", "GitHub Actions"
    ],
    links: [
      { label: "Live Demo", href: "#" },
      { label: "Project Writeup", href: "#" }
    ],
    color: "cyan",
    sections: [
      {
        heading: "Why I Built This",
        kind: "callout",
        content: "I wanted transcripts to be faster to generate and easier to use — without sacrificing accessibility. The goal was a system that turns raw video into structured, web-friendly HTML that works for everyone, including screen reader users, while reducing the manual formatting load for course teams."
      },
      {
        heading: "Overview",
        kind: "text",
        content: "AI Transcript is a containerized, production-grade pipeline that processes uploaded media, transcribes it via an external ASR provider, and generates WCAG-aligned HTML output. It supports multiple video/audio formats, chunks large files safely, and returns results through an async task system."
      },
      {
        heading: "What It Delivers",
        kind: "bullets",
        content: [
          "Uploads → background processing → transcript + accessible HTML output",
          "WCAG-conscious structure: skip links, landmarks, heading hierarchy, keyboard navigation support",
          "Authentication using ASU SSO (CAS) + JWT cookies for protected routes",
          "Cloud-native deployment with CI/CD and service stability checks"
        ]
      },
      {
        heading: "Architecture",
        kind: "architecture",
        content: {
          flow: "Upload → API container → S3 (SHA256-hash dedup)\nAPI → Redis queue → returns task_id\nWorker polls Redis → downloads from S3\nWorker → ASR provider → transcript result\nWorker → updates Redis with transcript + HTML\nFrontend polls /tasks/{id} → API → Redis → returns transcript/HTML",
          bullets: [
            "Microservices split: Web UI, API, Worker",
            "Redis used for task queue + session/task state",
            "S3 used for file storage with hash-based deduplication",
            "Accessible HTML generated via Jinja2 templates"
          ]
        }
      },
      {
        heading: "Accessibility Pipeline",
        kind: "bullets",
        content: [
          "Landmarks: header/main/footer roles",
          "Skip link to main content",
          "ARIA region labels on transcript sections",
          "Paragraph IDs for deep-linking",
          "prefers-reduced-motion support",
          "Keyboard navigation tested"
        ]
      },
      {
        heading: "Authentication & Security",
        kind: "bullets",
        content: [
          "ASU SSO via CAS login → ticket validation → JWT set as httpOnly cookie",
          "Secure cookie settings in production (secure + samesite lax)",
          "Security headers and proxy middleware for ALB HTTPS detection"
        ]
      },
      {
        heading: "Infrastructure & Deployment",
        kind: "bullets",
        content: [
          "AWS ECS services behind ALB (path-based routing)",
          "Images stored in ECR; deploy via GitHub Actions",
          "Environment separation: local Docker Compose vs production ECS + managed Redis"
        ]
      },
      {
        heading: "Research & Evaluation (ASR Quality)",
        kind: "text",
        content: "I also worked on ASR evaluation methodology using Word Error Rate (WER) and Character Error Rate (CER) to quantify transcription quality, compare outputs, and guide improvements in chunking, formatting, and post-processing."
      },
      {
        heading: "Impact",
        kind: "stats",
        content: [
          { label: "Learners Served", value: "12,760+" },
          { label: "Manual Hours Saved", value: "100s/term" },
          { label: "Minutes Processed", value: "TODO" },
          { label: "Courses Supported", value: "TODO" }
        ]
      },
      {
        heading: "Screenshots",
        kind: "images",
        content: [
          "Screenshot coming soon (UI + transcript output)",
          "Screenshot coming soon (upload + task status)"
        ]
      }
    ]
  },
  {
    slug: "claude-code-enablement",
    title: "Claude Code Enablement for Course Teams",
    statusBadge: "Internal",
    categories: ["Agentic AI", "EdTech", "Workflow Automation", "Enablement"],
    oneLiner: "Department-wide rollout enabling non-technical course teams to use agentic AI workflows (Canvas-connected) through Claude Code.",
    shortDescription: "I led an internal enablement initiative to expand agentic AI usage across ASU Learning Enterprise. The goal was to let course designers and course managers describe course-development and course-insight tasks in plain English while Claude Code runs against configured tools and course systems (Canvas) in a controlled workflow.",
    role: "Software Developer / AI Engineer (Enablement Lead)",
    organization: "Arizona State University — Learning Enterprise",
    timeframe: "2025 — Present",
    location: "Tempe, AZ",
    techChips: [
      "Claude Code", "Canvas API", "MCP (Canvas)",
      "Workflow Playbooks", "Access Tokens", "Internal Enablement"
    ],
    links: [
      { label: "Internal Doc (private)", href: "#" }
    ],
    color: "purple",
    sections: [
      {
        heading: "Why I Built This",
        kind: "callout",
        content: "Most teams who need AI help in course production aren't developers. This work focused on making agentic AI workflows usable by course teams through a structured, repeatable setup — so they can get real outcomes without needing to touch code."
      },
      {
        heading: "What It Enables",
        kind: "bullets",
        content: [
          "Plain-English requests for course tasks (content operations + analysis)",
          "Canvas-connected workflows via access tokens and configured tooling",
          "Reusable playbooks and onboarding to make adoption repeatable"
        ]
      },
      {
        heading: "Implementation",
        kind: "text",
        content: "I led the rollout process end-to-end: documentation, onboarding, setup flow, and usage guidance so teams could reliably use Claude Code with Canvas-connected workflows."
      },
      {
        heading: "Adoption & Outcomes",
        kind: "text",
        content: "Deployed department-wide and used across course teams for course development and content operations tasks."
      },
      {
        heading: "Screenshots",
        kind: "images",
        content: [
          "Screenshot coming soon (workflow UI / onboarding)",
          "Screenshot coming soon (example output)"
        ]
      }
    ]
  },
  {
    slug: "studyspace-az",
    title: "StudySpace AZ",
    statusBadge: "Completed",
    categories: ["iOS", "SwiftUI", "Location", "Product Engineering"],
    oneLiner: "Native iOS app that finds study-friendly locations near you using location + map + a custom Study Score.",
    shortDescription: "StudySpace AZ is an iOS app designed for students who want quiet, productive study spots near their current location. Unlike generic discovery apps, it filters for study-appropriate venues and ranks them using a custom Study Score. Users can view results on a map + list, search/filter, save favorites offline, and open directions in Apple Maps.",
    role: "iOS Developer",
    organization: "Arizona State University — CSE 335",
    timeframe: "Aug 2025 — Present",
    location: "Tempe, AZ",
    techChips: [
      "Swift", "SwiftUI", "MVVM", "SwiftData",
      "CoreLocation", "MapKit", "Foursquare Places API", "Apple Maps Deep Links"
    ],
    links: [
      { label: "GitHub Repo", href: "#" },
      { label: "Demo Video", href: "#" }
    ],
    color: "blue",
    sections: [
      {
        heading: "Why I Built This",
        kind: "callout",
        content: "Students waste time hunting for places that are actually good for studying. I wanted a focused app that filters out noise and ranks spots for study-friendliness."
      },
      {
        heading: "User Stories",
        kind: "bullets",
        content: [
          "Find libraries/cafes/coworking spots nearby ranked by Study Score",
          "Save favorites for quick access (offline)",
          "Open directions in Apple Maps"
        ]
      },
      {
        heading: "Key Features",
        kind: "features",
        content: [
          { name: "Map + list results from Places API", status: "Completed" },
          { name: "Search + filters (including high-score toggle)", status: "Completed" },
          { name: "Study Score algorithm (multi-factor)", status: "Completed" },
          { name: "Favorites saved locally using SwiftData", status: "Completed" },
          { name: "Permission fallback behavior", status: "Completed" }
        ]
      },
      {
        heading: "Architecture",
        kind: "architecture",
        content: {
          flow: "Views → ViewModels → Services/Models\nSwiftUI NavigationStack for flow\nServices wrap CoreLocation + API calls\nSwiftData persists favorites",
          bullets: [
            "MVVM: Views → ViewModels → Services/Models",
            "SwiftUI NavigationStack for flow",
            "Services wrap CoreLocation + API calls; SwiftData persists favorites"
          ]
        }
      },
      {
        heading: "Engineering Highlights",
        kind: "bullets",
        content: [
          "Multi-factor Study Score algorithm (category, distance, rating, open/closed)",
          "Deduplication of noisy Places results",
          "Offline-first favorites with unique constraints to prevent duplicates"
        ]
      },
      {
        heading: "Screenshots",
        kind: "images",
        content: [
          "Screenshot coming soon (welcome/home/map/list)",
          "Screenshot coming soon (detail + favorites)"
        ]
      }
    ]
  },
  {
    slug: "amazon-compliance-api",
    title: "Compliance API (Amazon Internship)",
    statusBadge: "Completed",
    categories: ["Backend", "APIs", "Distributed Systems", "Java", "Production Systems"],
    oneLiner: "Built and deployed a production Compliance API end-to-end at Amazon, gradually ramped into production with monitoring and measurable performance improvements.",
    shortDescription: "During my Software Development Engineer Intern experience at Amazon, I built a backend Compliance API end-to-end in Java and deployed it by progressively moving traffic into production. The work focused on improving reliability and latency for high-volume compliance checks, with production monitoring and operational readiness.",
    role: "Software Development Engineer Intern",
    organization: "Amazon",
    timeframe: "Summer 2025",
    location: "Tempe, AZ",
    techChips: [
      "Java", "AWS", "CloudWatch", "REST APIs", "Distributed Systems", "Production Deployment"
    ],
    links: [],
    color: "orange",
    sections: [
      {
        heading: "What I Owned",
        kind: "bullets",
        content: [
          "Built the Compliance API end-to-end (design → implementation → testing → deployment)",
          "Production readiness: dashboards/alarms and controlled rollout",
          "Worked in a high-volume distributed systems environment"
        ]
      },
      {
        heading: "Measurable Results",
        kind: "stats",
        content: [
          { label: "p99 Latency", value: "27.82ms → 22.86ms" },
          { label: "Latency Reduction", value: "17.8%" },
          { label: "Daily Requests", value: "~250K+" },
          { label: "Recovery Speed", value: "+22%" }
        ]
      },
      {
        heading: "How It Was Rolled Out",
        kind: "text",
        content: "Deployed with a gradual production ramp and operational monitoring to validate performance and correctness under real traffic. Instrumented CloudWatch metrics, structured logs, and alerts to improve failure detection and recovery speed."
      },
      {
        heading: "Screenshots",
        kind: "images",
        content: [
          "No internal screenshots (confidential)"
        ]
      }
    ]
  },
  {
    slug: "qr-feedback-platform",
    title: "QR-Based Customer Feedback Platform",
    statusBadge: "In Progress",
    categories: ["Capstone", "Full-Stack", "Product", "Systems Design"],
    oneLiner: "Capstone project building a QR-driven feedback and routing platform for small businesses.",
    shortDescription: "This capstone project focuses on capturing customer feedback via QR codes and routing it intelligently to help businesses respond quickly and improve service. Details will be expanded as the project progresses.",
    role: "Capstone Team Member",
    organization: "ASU Capstone",
    timeframe: "2025 — Present",
    location: "Tempe, AZ",
    techChips: ["React", "TypeScript", "Flask", "Firestore"],
    links: [],
    color: "green",
    sections: [
      {
        heading: "Overview",
        kind: "text",
        content: "A multi-tenant SaaS platform that enables businesses to collect customer feedback via QR codes with location-specific routing and analytics dashboards. Architecture, features, and measurable outcomes will be expanded as the project progresses."
      },
      {
        heading: "Screenshots",
        kind: "images",
        content: [
          "Screenshot coming soon"
        ]
      }
    ]
  }
];

// Helper function to get project by slug
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find(p => p.slug === slug);
}

// Helper function to get all slugs for static generation
export function getAllProjectSlugs(): string[] {
  return projectsData.map(p => p.slug);
}
