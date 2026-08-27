export interface SmartFeature {
  eyebrow: string;
  title: string;
  description: string;
  bullets: { text: string; icon: string }[];
}

export const smartFeatures: SmartFeature[] = [
  {
    eyebrow: "Improve with AI",
    title: "Session narratives, improved in one click",
    description:
      "Rough notes become clean clinical prose without leaving the editor. The suggestion is structured to the note's billing code and summary type — face-to-face observation, protocol adjustments, active direction — powered by AWS Bedrock. The clinician stays the author.",
    bullets: [
      { text: "Structured per billing code", icon: "file-text" },
      { text: "CASP-aligned guidance and word targets", icon: "clipboard-check" },
      { text: "Suggestions land in the editor", icon: "sparkles" },
      { text: "Three note formats: 97153, 97155, 97156", icon: "list-checks" },
    ],
  },
  {
    eyebrow: "Who it's for",
    title: "Every role sees exactly what it needs",
    description:
      "MenteVior adapts to every role in your practice. BCBA, RBT, practice owner, or billing specialist — each sees exactly what they need, nothing more.",
    bullets: [
      { text: "BCBA: supervision logs, treatment plans, progress graphs", icon: "stethoscope" },
      { text: "RBT / BCaBA: on-site data, session notes, today's schedule", icon: "clipboard" },
      { text: "Practice owner: compliance dashboard, roles & permissions", icon: "building-2" },
      { text: "Billing & ops: authorization tracking, claims, batch PDF", icon: "dollar" },
    ],
  },
  {
    eyebrow: "Security",
    title: "Built for the data you're responsible for",
    description:
      "MenteVior is built from the ground up for protected health information. Every safeguard HIPAA requires is part of the architecture, not an afterthought.",
    bullets: [
      { text: "HIPAA compliant", icon: "shield" },
      { text: "Role-based access control", icon: "lock" },
      { text: "Encrypted in transit and at rest", icon: "database" },
      { text: "Full audit trail", icon: "clipboard-list" },
    ],
  },
];
