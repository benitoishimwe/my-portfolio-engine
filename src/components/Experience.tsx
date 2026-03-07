import { motion } from "framer-motion";

interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    duration: string;
    tasks: string[];
}

const experiences: ExperienceItem[] = [
    {
        id: 1,
        role: "Head of Project Development",
        company: "SAC HIVES",
        duration: "June 2024 - Present",
        tasks: [
            "Lead cross-functional engineering initiatives end-to-end, coordinating analysts, developers, and stakeholders.",
            "Implement agile, data-driven workflows, improving execution speed and standardizing documentation.",
            "Mentor contributors and align product, engineering, and business teams to ensure consistent delivery quality."
        ]
    },
    {
        id: 2,
        role: "Azure Cloud Engineer",
        company: "LTIMindtree",
        duration: "October 2023 - June 2024",
        tasks: [
            "Built Azure Backup solutions resulting in a 20% reduction in data loss risks.",
            "Improved Azure SQL customer satisfaction by 25% through optimizations and reliable deployments.",
            "Reduced migration time by 20% using Azure Migrate and contributed to crucial DR and networking solutions."
        ]
    },
    {
        id: 3,
        role: "Software Engineer",
        company: "GFT Technologies",
        duration: "September 2022 - September 2023",
        tasks: [
            "Built a production voice-bot using Node.js, TypeScript, and Firebase, ensuring 100% input validation.",
            "Designed backend logic, integrations, and microservices components, actively participating in architectural discussions.",
            "Implemented secure authentication flows and optimized database workflows for improved system reliability."
        ]
    },
    {
        id: 4,
        role: "Frontend Developer",
        company: "Orcawise",
        duration: "May 2022 - September 2022",
        tasks: [
            "Developed robust Angular and React components for dynamic dashboards and internal tools.",
            "Built reusable UI components and integrated complex GraphQL APIs.",
            "Drastically improved performance and reliability across existing frontend systems."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto"
            >
                <div className="flex items-center gap-4 mb-16">
                    <span className="text-primary font-mono text-sm">02.</span>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Where I've Worked</h2>
                    <div className="h-[1px] bg-border/50 flex-grow" />
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline dot and line (desktop logic could differ, keeping simple left-aligned for mobile/tablet) */}
                            <div className="md:hidden absolute left-0 top-2 bottom-0 w-[2px] bg-border/50">
                                <div className="absolute top-0 -left-[4px] w-[10px] h-[10px] rounded-full ring-4 ring-background bg-primary" />
                            </div>

                            <div className="group rounded-2xl md:p-8 bg-card border border-transparent md:border-border/50 md:hover:border-primary/30 transition-all flex flex-col md:flex-row gap-4 md:gap-8">

                                {/* Desktop Timeline visualization */}
                                <div className="hidden md:flex flex-col items-center mt-2 relative -ml-12 group-hover:scale-110 transition-transform">
                                    <div className="w-[12px] h-[12px] rounded-full ring-4 ring-background bg-primary z-10" />
                                    {index !== experiences.length - 1 && (
                                        <div className="absolute top-3 bottom-[-3rem] w-[2px] bg-border/50" />
                                    )}
                                </div>

                                <div className="flex-1 space-y-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">
                                            {exp.role} <span className="text-primary">@ {exp.company}</span>
                                        </h3>
                                        <p className="text-sm font-mono text-muted-foreground mt-1">{exp.duration}</p>
                                    </div>
                                    <ul className="space-y-3">
                                        {exp.tasks.map((task, i) => (
                                            <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed text-sm">
                                                <span className="text-primary mt-1">▹</span>
                                                <p>{task}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
