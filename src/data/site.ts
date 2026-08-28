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
        { label: "Document", href: "/#document", icon: "file-text" },
        { label: "Collect", href: "/#collect", icon: "database" },
        { label: "Operate", href: "/#operate", icon: "calendar" },
        { label: "Comply", href: "/#comply", icon: "shield" },
        { label: "Configure", href: "/#configure", icon: "settings" },
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