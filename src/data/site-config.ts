import { Github, Linkedin, Mail } from "lucide-react";
import { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Benito",
  fullName: "ISHIMWE Benito",
  title: "Backend & Cloud Engineer",
  description:
    "Portfolio of ISHIMWE Benito, Backend & Cloud Engineer specializing in cloud engineering, full-stack development, and technical leadership.",
  email: "benishimwe31@gmail.com",
  baseUrl: "https://engr-benitoishimwe.github.io/my-portfolio-engine/",
  resumeUrl: import.meta.env.BASE_URL + "resume.pdf",
  social: [
    {
      name: "GitHub",
      href: "https://github.com/benitoishimwe",
      icon: Github,
      srLabel: "GitHub",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/benito-ishimwe/",
      icon: Linkedin,
      srLabel: "LinkedIn",
    },
    {
      name: "Email",
      href: "mailto:benishimwe31@gmail.com",
      icon: Mail,
      srLabel: "Email",
    },
  ],
};

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
