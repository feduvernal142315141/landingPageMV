export interface Feature {
  icon: string;
  title: string;
  points: [string, string];
}

export const features: Feature[] = [
  {
    icon: "layout-dashboard",
    title: "Your Practice at a Glance",
    points: [
      "See sessions, authorizations and compliance in one place",
      "Switch between your view and the full team view",
    ],
  },
  {
    icon: "trending-up",
    title: "Live Progress Tracking",
    points: [
      "Trend charts showing 12 weeks of session activity",
      "Progress meters that flag what needs attention",
    ],
  },
  {
    icon: "calendar",
    title: "Drag & Drop Scheduling",
    points: [
      "Week and month calendar views for your team",
      "Drag any appointment to reschedule instantly",
    ],
  },
  {
    icon: "shield",
    title: "Team Permissions",
    points: [
      "Control who sees what with module-level access",
      "Configure roles visually without the complexity",
    ],
  },
  {
    icon: "book-open",
    title: "Activity History",
    points: [
      "Every signature and document change tracked",
      "Full traceability per client, always accessible",
    ],
  },
  {
    icon: "list-checks",
    title: "Guided Setup",
    points: [
      "Multi-step flows for complex tasks like client intake",
      "Visual progress so you always know where you are",
    ],
  },
] as const;
