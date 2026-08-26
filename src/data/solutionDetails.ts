export interface SolutionDetailData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  screenshot: string;
  alt: string;
}

export const solutionDetails: SolutionDetailData[] = [
  {
    id: "document",
    eyebrow: "Document",
    title: "Create Once, Use Everywhere",
    description:
      "One clinical record powers every document in the system. Session notes, treatment plans, assessments, and monthly reports all flow from the same entry point — eliminating duplication and keeping your documentation audit-ready.",
    bullets: [
      "Session notes with billing-code-aware templates (97153, 97155, 97156)",
      "Clinical monthly reports generated from existing records",
      "Service logs auto-created from locked session notes",
      "Configurable document templates for every note type",
      "Digital caregiver signatures — paperless and compliant",
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
      "Five datasheet types: Percentage, Frequency, Duration, Interval, Rate",
      "Live charts with trend lines and gap analysis",
      "On-site collection grid for field sessions",
      "Date-range filtering and period comparison",
      "Inline chart panels directly in session notes",
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
      "Week and month calendar views with appointment cards",
      "Payer management with catalog search and manual entry",
      "Authorization tracking linked to scheduled events",
      "Service plans configured at company and client level",
      "Applicant pipeline from application to onboarding",
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
      "Monthly supervision reports with configurable checklists",
      "Case supervision log per client and supervisor",
      "Dashboard compliance widgets with expiring-item alerts",
      "Document compliance meters and authorization utilization",
      "Credential tracking with expiration notifications",
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
      "37 permission modules with bitmask-based access control",
      "Role management with granular CRUD + BLOCK + READ permissions",
      "Service plan templates with category and item configuration",
      "Company-wide settings for sessions, credentials, and addresses",
      "Section completion tracking for onboarding visibility",
    ],
    screenshot: "/images/mentevior-dashboard.webp",
    alt: "MenteVior configuration panel with roles and permissions",
  },
];
