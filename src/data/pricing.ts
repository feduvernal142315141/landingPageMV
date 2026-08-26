export interface PricingPlan {
  name: string;
  audience: string;
  price: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  popular?: boolean;
}

export const pricingPlans = [
  {
    name: "Basic",
    audience: "Solo practitioners and new practices",
    price: "Custom pricing",
    features: [
      "Clinical documentation & session notes",
      "Data collection with live graphing",
      "Scheduling",
      "Client & caregiver management",
      "Generated PDF reports"
    ],
    ctaText: "Book a demo",
    ctaHref: "/demo",
  },
  {
    name: "Pro",
    audience: "Growing clinics with a team",
    price: "Custom pricing",
    features: [
      "Everything in Basic",
      "Supervision reports & case logs",
      "Prior authorization unit tracking",
      "Claims & payer management",
      "Credential & document tracking",
      "Role-based permissions"
    ],
    ctaText: "Book a demo",
    ctaHref: "/demo",
    popular: true,
  },
  {
    name: "Enterprise",
    audience: "Multi-site organizations",
    price: "Custom pricing",
    features: [
      "Everything in Pro",
      "Multiple locations under one org",
      "Custom service plan configuration",
      "Custom document templates",
      "Priority support"
    ],
    ctaText: "Talk to sales",
    ctaHref: "mailto:hello@mentevior.com?subject=Enterprise%20inquiry",
  },
] as const;