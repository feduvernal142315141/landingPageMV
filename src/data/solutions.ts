export interface Solution {
  icon: string;
  title: string;
  description: string;
  screenshot?: string;
  alt?: string;
}

export const solutions: Solution[] = [
  {
    icon: "contact",
    title: "Clients",
    description:
      "Centralize every client's profile, authorizations and documents in one calm, organized place.",
  },
  {
    icon: "gauge",
    title: "Assessment",
    description:
      "Run structured clinical assessments with prefilled templates, ready to inform the plan.",
  },
  {
    icon: "clipboard",
    title: "Service Plan",
    description:
      "Build individualized service plans grounded on the assessments and data already in the system.",
  },
  {
    icon: "calendar",
    title: "Scheduling",
    description:
      "Schedule sessions, staff and locations in one unified calendar, aligned with authorizations.",
  },
  {
    icon: "file-text",
    title: "Session Notes",
    description:
      "Document every session with structured templates that protect compliance and clinical quality.",
  },
  {
    icon: "line-chart",
    title: "Data Collection & Graphs",
    description:
      "Capture and analyze session data in real time, with live graphs that make progress visible.",
  },
  {
    icon: "users",
    title: "Supervision",
    description:
      "Track RBT, BCaBA and BCBA supervision hours and case supervision in one place.",
  },
  {
    icon: "clipboard-check",
    title: "Monthly Supervision",
    description:
      "Keep monthly supervision structured and audit-ready, without the manual follow-up.",
  },
  {
    icon: "signature",
    title: "Signature Caregiver",
    description:
      "Collect caregiver signatures on consents and plans digitally — paperless and compliant.",
  },
  {
    icon: "dollar",
    title: "Billing",
    description:
      "Move from claim generation to payer compliance with real-time tracking.",
  },
  {
    icon: "badge-check",
    title: "Credentials",
    description:
      "Keep licenses, certifications and expirations organized for every provider on your team.",
  },
  {
    icon: "user-plus",
    title: "Applicants",
    description:
      "Move candidates from application to onboarding with a clear, collaborative pipeline.",
  },
];

export const whys = [
  {
    icon: "cloud",
    title: "Cloud Storage, Access Anywhere - Anytime",
  },
  {
    icon: "layers",
    title: "One platform for your entire practice",
  },
  {
    icon: "gauge",
    title: "Real-time data, live progress graphs",
  },
  {
    icon: "file-text",
    title: "Documentation to keep you audit-ready",
  },
  {
    icon: "trending-up",
    title: "Designed to scale with your practice",
  },
  {
    icon: "lock",
    title: "Enterprise-grade security",
  },
] as const;

export interface SolutionCategory {
  id: string;
  label: string;
  icon: string;
  description: string;
  anchor: string;
  modules: { label: string; href: string; icon: string }[];
}

export const solutionCategories = [
  {
    id: "clinical-options",
    label: "Clinical Options",
    icon: "clipboard-list",
    description: "Clinical workflows for ABA therapy: client records, assessments, session notes, data collection, supervision & progress tracking.",
    anchor: "clinical-options",
    modules: [
      { label: "Clients", href: "/clients", icon: "contact" },
      { label: "Users / Providers", href: "/users", icon: "users" },
      { label: "Session Note", href: "/session-note", icon: "file-text" },
      { label: "Schedules", href: "/schedules", icon: "calendar" },
      { label: "Clinical Monthly", href: "/clinical-monthly", icon: "calendar-clock" },
      { label: "Monthly Supervisions", href: "/monthly-supervisions", icon: "clipboard-check" },
      { label: "Case Supervision Log", href: "/case-supervision-log", icon: "clipboard-list" },
      { label: "Service Log", href: "/service-log", icon: "folder-heart" },
      { label: "Assessment", href: "/assessment", icon: "gauge" },
    ],
  },
  {
    id: "company-configuration",
    label: "Company Configuration",
    icon: "building-2",
    description: "Business operations & admin: billing, HR, scheduling, credentials, compliance tools & practice management.",
    anchor: "company-configuration",
    modules: [
      { label: "Account Profile", href: "/my-company/account-profile", icon: "user-cog" },
      { label: "Address", href: "/my-company/address", icon: "map-pin" },
      { label: "Agreements", href: "/agreements", icon: "file-text" },
      { label: "Applicants", href: "/applicants", icon: "user-plus" },
      { label: "Billing", href: "/my-company/billing", icon: "dollar" },
      { label: "Credentials", href: "/my-company/credentials", icon: "badge-check" },
      { label: "Data Collection", href: "/data-collection", icon: "database" },
      { label: "Documents", href: "/my-company/documents", icon: "folder-open" },
      { label: "Referring Physicians", href: "/my-company/physicians", icon: "stethoscope" },
      { label: "Roles", href: "/my-company/roles", icon: "shield" },
      { label: "Service Plan", href: "/my-company/service-plans", icon: "clipboard" },
      { label: "Services", href: "/my-company/services", icon: "clipboard-list" },
      { label: "Session", href: "/my-company/session", icon: "calendar-clock" },
      { label: "Signatures Caregiver", href: "/my-company/signatures-caregiver", icon: "signature" },
      { label: "Supervision", href: "/my-company/events/supervision", icon: "users" },
      { label: "Template Documents", href: "/template-documents", icon: "file-text" },
    ],
  },
] as const;

export const showcase = [
  {
    id: "reports",
    title: "Real-time progress graphs",
    description: "Visualize client progress with live graphs generated from session data.",
    screenshot: "/screenshots/reports.png",
    alt: "MenteVior real-time progress graphs showing client session data",
  },
  {
    id: "service-plan",
    title: "Service plans that follow your clients",
    description: "Design detailed service plans with the assessments and data already in the system.",
    screenshot: "/screenshots/service-plan.png",
    alt: "MenteVior service plan editor with prefilled assessments and client data",
  },
  {
    id: "data-collection",
    title: "Data collection made simple",
    description: "Flexible programs and customizable targets that keep data organized and accessible.",
    screenshot: "/screenshots/data-collection.png",
    alt: "MenteVior data collection screen with customizable targets and programs",
  },
] as const;