import { Cloud, Server, Database, Code2, Wrench } from "lucide-react";
import { SkillGroup } from "./types";

export const skillsData: SkillGroup[] = [
  {
    category: "Cloud Engineering",
    icon: Cloud,
    items: ["Azure (SQL, Backup, Migrate, ASR)", "AWS", "GCP"],
  },
  {
    category: "Backend & Systems",
    icon: Server,
    items: ["Node.js", "TypeScript", "JavaScript", "Java", "PHP", "Microservices"],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "T-SQL", "PL/SQL"],
  },
  {
    category: "Frontend Dev",
    icon: Code2,
    items: ["React", "Angular", "HTML/CSS/SASS"],
  },
  {
    category: "Tools & Testing",
    icon: Wrench,
    items: ["Git", "GraphQL", "ITIL", "ServiceNow", "Unit & Integration Testing"],
  },
];
