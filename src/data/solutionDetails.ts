export interface SolutionDetailData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: { text: string; icon: string }[];
  screenshot: string;
  alt: string;
}

export const solutionDetails: SolutionDetailData[] = [
  {
    id: "document",
    eyebrow: "Document",
    title: "Create Once, Use Everywhere",
    description:
      "One appointment, one complete record. Session notes capture everything — teaching method, interventions, data, and signatures — tied to a single billing code.\n\nAI cleans up your rough notes into clinical language, structured per billing code, powered by AWS Bedrock. Lock the note and service logs generate automatically. Clinical monthly reports pull progress over time. No re-entry, no reconciling.",
    bullets: [
      { text: "Forms that adapt to each billing code", icon: "file-text" },
      { text: "AI cleans rough notes in one click", icon: "sparkles" },
      { text: "Locked notes generate service logs automatically", icon: "lock" },
      { text: "Monthly reports from each client's data", icon: "line-chart" },
      { text: "Signatures follow the record into billing", icon: "signature" },
    ],
    screenshot: "/images/mentevior-dashboard.webp",
    alt: "MenteVior document management showing session notes and clinical records",
  },
  {
    id: "collect",
    eyebrow: "Collect",
    title: "Data That Drives Decisions",
    description:
      "Capture behavioral data in real time with flexible datasheet types and live graphs that update as you record. Trend analysis and date-range filtering turn raw data into actionable clinical insight.",
    bullets: [
      { text: "Five datasheet types: Percentage, Frequency, Duration, Interval, Rate", icon: "database" },
      { text: "Live charts with trend lines and gap analysis", icon: "line-chart" },
      { text: "On-site collection grid for field sessions", icon: "clipboard" },
      { text: "Date-range filtering and period comparison", icon: "calendar" },
      { text: "Inline chart panels directly in session notes", icon: "file-text" },
    ],
    screenshot: "/images/mentevior-dashboard.webp",
    alt: "MenteVior data collection with live graphs and trend analysis",
  },
  {
    id: "operate",
    eyebrow: "Operate",
    title: "One Connected Workflow",
    description:
      "Scheduling, authorization, and billing move together in a single connected flow. From appointment creation to claim submission, every step references the same data — no re-keying, no reconciling.",
    bullets: [
      { text: "Week and month calendar views with appointment cards", icon: "calendar" },
      { text: "Payer management with catalog search and manual entry", icon: "users" },
      { text: "Authorization tracking linked to scheduled events", icon: "shield" },
      { text: "Service plans configured at company and client level", icon: "clipboard" },
      { text: "Applicant pipeline from application to onboarding", icon: "user-plus" },
    ],
    screenshot: "/images/mentevior-dashboard.webp",
    alt: "MenteVior scheduling calendar and billing workflow",
  },
  {
    id: "comply",
    eyebrow: "Comply",
    title: "Built for Audit Readiness",
    description:
      "Supervision and compliance are tracked automatically across every record. Monthly supervision reports, case supervision logs, and dashboard compliance widgets keep your practice audit-ready without manual follow-up.",
    bullets: [
      { text: "Monthly supervision reports with configurable checklists", icon: "clipboard-check" },
      { text: "Case supervision log per client and supervisor", icon: "clipboard" },
      { text: "Dashboard compliance widgets with expiring-item alerts", icon: "shield" },
      { text: "Document compliance meters and authorization utilization", icon: "badge-check" },
      { text: "Credential tracking with expiration notifications", icon: "calendar-clock" },
    ],
    screenshot: "/images/mentevior-dashboard.webp",
    alt: "MenteVior compliance tracking and supervision reports",
  },
  {
    id: "configure",
    eyebrow: "Configure",
    title: "Your Practice, Your Rules",
    description:
      "Set permissions, templates, and service plans once — then enforced across the entire platform. A bitmask-based role system with 37 permission modules gives you granular control over who sees what.",
    bullets: [
      { text: "37 permission modules with bitmask-based access control", icon: "shield" },
      { text: "Role management with granular CRUD + BLOCK + READ permissions", icon: "users" },
      { text: "Service plan templates with category and item configuration", icon: "clipboard" },
      { text: "Company-wide settings for sessions, credentials, and addresses", icon: "building-2" },
      { text: "Section completion tracking for onboarding visibility", icon: "list-checks" },
    ],
    screenshot: "/images/mentevior-dashboard.webp",
    alt: "MenteVior configuration panel with roles and permissions",
  },
];
