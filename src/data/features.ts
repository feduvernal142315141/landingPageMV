export interface Feature {
  icon: string;
  title: string;
  description: string;
  screenshot?: string;
  alt?: string;
}

export const features: Feature[] = [
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
    icon: "layers",
    title: "All-in-one platform",
    description:
      "Scheduling, session notes, data collection, service plans, supervision and billing — one integrated system, no more switching tools.",
  },
  {
    icon: "line-chart",
    title: "Real-time data and graphs",
    description:
      "Monitor client progress with live graphs generated from session data, so clinical decisions are always informed.",
  },
  {
    icon: "shield",
    title: "Documentation you can rely on",
    description:
      "Structured notes and clinical records that keep your practice organized and audit-ready.",
  },
  {
    icon: "headset",
    title: "Made for every practice size",
    description:
      "From solo practitioners to growing clinics, workflows that adapt to how your team operates.",
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