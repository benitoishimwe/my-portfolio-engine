import { Code2, Server, Database, Cloud } from "lucide-react";
import { ExpertiseCardData } from "./types";

export const expertiseCards: ExpertiseCardData[] = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Developing robust data-driven applications across the stack utilizing Node.js, TypeScript, React, and Angular.",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description:
      "Migrating and securing workloads, optimizing performance, and building DR solutions on Azure, AWS, and GCP.",
  },
  {
    icon: Server,
    title: "Backend Architecture",
    description:
      "Designing backend logic, microservices, secure authentication, and complex API integrations (REST, GraphQL).",
  },
  {
    icon: Database,
    title: "Technical Leadership",
    description:
      "Leading cross-functional projects, implementing data-driven agile processes, and mentoring teams from planning to delivery.",
  },
];

export const statsData = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 4, suffix: "", label: "Companies" },
  { value: 3, suffix: "", label: "Cloud Platforms" },
];
