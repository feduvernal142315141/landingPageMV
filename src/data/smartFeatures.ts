export interface SmartFeature {
  icon: string;
  number: string;
  title: string;
  description: string;
  bullets: { text: string; icon: string }[];
}

export const smartFeatures: SmartFeature[] = [
  {
    icon: "sparkles",
    number: "01",
    title: "AI-powered session narratives, improved<br/>in one click",
    description:
      "Rough notes become clean clinical prose without leaving the editor. The suggestion is structured to the note's billing code and summary type — face-to-face observation, protocol adjustments, active direction — powered by AWS Bedrock. The clinician stays the author.",
    bullets: [
      { text: "Structured per billing code", icon: "file-text" },
      { text: "CASP-aligned guidance built in", icon: "clipboard-check" },
      { text: "Suggestions land in the editor", icon: "sparkles" },
      { text: "97153, 97155, 97156 formats", icon: "list-checks" },
    ],
  },
  {
    icon: "sparkles",
    number: "02",
    title: "AI-powered session narratives, improved<br/>in one click",
    description:
      "Rough notes become clean clinical prose without leaving the editor. The suggestion is structured to the note's billing code and summary type — face-to-face observation, protocol adjustments, active direction — powered by AWS Bedrock. The clinician stays the author.",
    bullets: [
      { text: "Structured per billing code", icon: "file-text" },
      { text: "CASP-aligned guidance built in", icon: "clipboard-check" },
      { text: "Suggestions land in the editor", icon: "sparkles" },
      { text: "97153, 97155, 97156 formats", icon: "list-checks" },
    ],
  },
  {
    icon: "shield",
    number: "03",
    title: "Enterprise-grade security for the data you're<br/>responsible for",
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
