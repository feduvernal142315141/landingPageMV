export interface Feature {
  icon: string;
  title: string;
  description: string;
  screenshot?: string;
}

export const features: Feature[] = [
  {
    icon: "calendar",
    title: "Scheduling",
    description:
      "Schedule sessions, staff and locations in one unified calendar, aligned with authorizations and client needs.",
  },
  {
    icon: "file-text",
    title: "Session Notes",
    description:
      "Document every session with structured templates that support compliance and clinical quality.",
  },
  {
    icon: "line-chart",
    title: "Data Collection & Graphs",
    description:
      "Capture and analyze session data in real time with live graphs that help you monitor progress.",
  },
  {
    icon: "clipboard",
    title: "Service Plan",
    description:
      "Build individualized service plans with prefilled assessments and integrated client data.",
  },
  {
    icon: "users",
    title: "Supervision",
    description:
      "Track RBT, BCaBA and BCBA supervision hours and case supervision in one place.",
  },
  {
    icon: "dollar",
    title: "Billing",
    description:
      "Manage the billing process from claim generation to payer compliance with real-time tracking.",
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
  },
  {
    id: "service-plan",
    title: "Service plans that follow your clients",
    description: "Design detailed service plans with the assessments and data already in the system.",
    screenshot: "/screenshots/service-plan.png",
  },
  {
    id: "data-collection",
    title: "Data collection made simple",
    description: "Flexible programs and customizable targets that keep data organized and accessible.",
    screenshot: "/screenshots/data-collection.png",
  },
] as const;