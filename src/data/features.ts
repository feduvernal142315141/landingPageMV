export interface Feature {
  icon: string;
  title: string;
  points: [string, string, string?];
}

export const features: Feature[] = [
  {
    icon: "layout-dashboard",
    title: "Command Center for Your Practice",
    points: [
      "Unified dashboard view",
      "Personal & team views",
      "Real-time compliance",
    ],
  },
  {
    icon: "trending-up",
    title: "Progress Made Visible",
    points: [
      "12-week trend charts",
      "Smart attention alerts",
      "Progress at glance",
    ],
  },
  {
    icon: "calendar",
    title: "Intuitive Drag-and-Drop Scheduling",
    points: [
      "Week & month views",
      "Drag to reschedule",
      "Zero friction scheduling",
    ],
  },
  {
    icon: "shield",
    title: "Access Control, Simplified",
    points: [
      "Module-level permissions",
      "Visual role builder",
      "Instant role updates",
    ],
  },
  {
    icon: "book-open",
    title: "Every Action, Documented",
    points: [
      "Auto audit trail",
      "Export-ready records",
      "Full traceability",
    ],
  },
  {
    icon: "list-checks",
    title: "Guided Workflows That Adapt to You",
    points: [
      "Multi-step guided flows",
      "Adapts to patterns",
      "Suggests next steps",
    ],
  },
] as const;
