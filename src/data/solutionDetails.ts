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
    title: "Clinical documentation shaped for ABA",
    description:
      "One appointment, one complete record. Session notes capture everything — teaching method, interventions, data, and signatures — tied to a single billing code.\n\nAI cleans up your rough notes into clinical language, structured per billing code, powered by AWS Bedrock. Lock the note and service logs generate automatically. Clinical monthly reports pull progress over time. No re-entry, no reconciling.",
    bullets: [
      { text: "Adaptive forms per billing code", icon: "file-text" },
      { text: "AI cleans notes in one click", icon: "sparkles" },
      { text: "Locked notes generate service logs", icon: "lock" },
      { text: "Monthly reports from session data", icon: "line-chart" },
      { text: "Signatures travel into billing", icon: "signature" },
    ],
    screenshot: "/images/mentevior-dashboard.webp",
    alt: "MenteVior document management showing session notes and clinical records",
  },
  {
    id: "collect",
    eyebrow: "Collect",
    title: "Data collection that keeps up with sessions",
    description:
      "Datasheets and on-site counters built for the pace of a real session. Five methods — frequency, percentage, duration, interval, and rate — each with its own grid and live chart.\n\nEvery occurrence lands on a graph the moment it's recorded. Trend analysis evaluates objectives against SMART criteria automatically. No export, no transcription, no waiting for the monthly report.",
    bullets: [
      { text: "Five methods for every behavior", icon: "database" },
      { text: "Live graphs as you record", icon: "line-chart" },
      { text: "On-site counters at session pace", icon: "smartphone" },
      { text: "Trend analysis tracks objectives", icon: "trending-up" },
      { text: "Daily, weekly, monthly date filtering", icon: "calendar" },
    ],
    screenshot: "/images/mentevior-dashboard.webp",
    alt: "MenteVior data collection with live graphs and trend analysis",
  },
  {
    id: "operate",
    eyebrow: "Operate",
    title: "Scheduling, authorization, and billing that talk to each other",
    description:
      "Scheduling, authorization, and billing move as one flow. Book an appointment and the system checks conflicts, pulls billing codes from the prior authorization, and validates units — all before you save.\n\nCompleted appointments auto-transition. Session notes lock into billing-ready records. Service plans cascade from company to client, with billing codes. Payers come from catalog or manually — rates and plans stay linked.",
    bullets: [
      { text: "Scheduling with conflict detection", icon: "calendar" },
      { text: "Authorization units validated on booking", icon: "shield" },
      { text: "Payers from catalog or manual", icon: "dollar" },
      { text: "Plans cascade company to client", icon: "clipboard" },
      { text: "Applicant pipeline to onboarding", icon: "user-plus" },
    ],
    screenshot: "/images/mentevior-dashboard.webp",
    alt: "MenteVior scheduling calendar and billing workflow",
  },
  {
    id: "comply",
    eyebrow: "Comply",
    title: "Built for Audit Readiness",
    description:
      "Supervision and compliance tracked from the same session data your team already enters. Monthly reports assemble 97155 appointments with checklists, annotations, and dual signatures — no re-typing.\n\nCase supervision logs calculate coverage per client and mark it Met or Unmet. The dashboard surfaces expiring authorizations, credentials, and documents with days-remaining tracking and severity alerts — so nothing lapses unnoticed.",
    bullets: [
      { text: "Monthly reports from 97155 appointments", icon: "clipboard-check" },
      { text: "Coverage percentage calculated automatically", icon: "shield" },
      { text: "Expiration alerts with days remaining", icon: "calendar-clock" },
      { text: "Document compliance meter on dashboard", icon: "badge-check" },
      { text: "Dual signatures on every report", icon: "signature" },
    ],
    screenshot: "/images/mentevior-dashboard.webp",
    alt: "MenteVior compliance tracking and supervision reports",
  },
  {
    id: "configure",
    eyebrow: "Configure",
    title: "Your Practice, Your Rules",
    description:
      "Service plans, data collection, document templates and role permissions — configured per organization. Your RBTs see what they need. Your billing analyst never touches a clinical note.\n\nA bitmask-based role system with 37 permission modules gives granular control. Service plan templates cascade from company to client. Section completion tracking shows what's set up and what's missing.",
    bullets: [
      { text: "37 permission modules per role", icon: "shield" },
      { text: "Plans cascade company to client", icon: "clipboard" },
      { text: "Templates per report type", icon: "file-text" },
      { text: "Completion tracking on dashboard", icon: "list-checks" },
      { text: "Scheduling rules you define", icon: "gauge" },
    ],
    screenshot: "/images/mentevior-dashboard.webp",
    alt: "MenteVior configuration panel with roles and permissions",
  },
];
