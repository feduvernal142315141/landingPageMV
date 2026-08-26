export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs = [
  {
    question: "Is MenteVior HIPAA compliant?",
    answer: "Yes. MenteVior is built for protected health information: data is encrypted in transit and at rest, access is controlled per role and per action, every record keeps a full audit trail, and each organization's data is isolated from every other tenant."
  },
  {
    question: "Which CPT codes does documentation support?",
    answer: "Session notes are shaped to 97153, 97155 and 97156 — each with its own format and field-level guidance aligned to CASP recommendations, including word-count targets per narrative section."
  },
  {
    question: "Can we configure MenteVior to our workflows?",
    answer: "That's the core of the product. Service plans, billing codes, data collection methods, document templates and role permissions are all defined per organization — your clinic's setup, not a fixed mold."
  },
  {
    question: "How do caregivers sign session notes?",
    answer: "At the end of the session, the caregiver reviews and signs on-screen. The signature is captured directly in the note, so documentation leaves the session complete — nothing to chase later."
  },
  {
    question: "Does it work for multi-site organizations?",
    answer: "Yes. The Enterprise plan supports multiple locations under one organization, with custom service plan configuration and document templates shared or scoped as you need."
  },
  {
    question: "How does pricing work?",
    answer: "Pricing is tailored to your practice size and services across three plans — Basic, Pro and Enterprise. Book a demo and we'll scope it with your numbers; there's no setup fee to evaluate."
  }
] as const;