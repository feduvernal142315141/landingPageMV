export const site = {
  name: "MenteVior",
  tagline: "All-in-One ABA Practice Management",
  url: "https://landingpagemv.vercel.app",
  logo: "/logoMenteVior.png",
  demoUrl: "https://calendly.com/mentevior/demo",
  nav: [
    {
      label: "Solutions",
      href: "/#solutions",
      children: [
        { label: "Document", href: "/#document", icon: "file-text", description: "Session notes shaped for ABA billing" },
        { label: "Collect", href: "/#collect", icon: "database", description: "Live data capture with instant graphs" },
        { label: "Operate", href: "/#operate", icon: "calendar", description: "Scheduling, auth, and billing in one flow" },
        { label: "Comply", href: "/#comply", icon: "shield", description: "Audit-ready supervision and reports" },
        { label: "Configure", href: "/#configure", icon: "settings", description: "Roles, templates, and permissions per org" },
      ]
    },
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ],
  contact: {
    email: "hello@mentevior.com",
    phone: "+1 (555) 000-0000",
  },
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
  ],
} as const;