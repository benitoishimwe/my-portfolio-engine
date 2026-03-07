import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Cloud Engineering",
        items: ["Azure (SQL, Backup, Migrate, ASR)", "AWS", "GCP"]
    },
    {
        category: "Backend & Systems",
        items: ["Node.js", "TypeScript", "JavaScript", "Java", "PHP", "Microservices"]
    },
    {
        category: "Databases",
        items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "T-SQL", "PL/SQL"]
    },
    {
        category: "Frontend Dev",
        items: ["React", "Angular", "HTML/CSS/SASS"]
    },
    {
        category: "Tools & Testing",
        items: ["Git", "GraphQL", "ITIL", "ServiceNow", "Unit & Integration Testing"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 container mx-auto px-4 bg-muted/30">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-16 max-w-4xl mx-auto">
                    <span className="text-primary font-mono text-sm">03.</span>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Technologies I Work With</h2>
                    <div className="h-[1px] bg-border/50 flex-grow" />
                </div>

                <div className="flex justify-center flex-wrap gap-8 max-w-6xl mx-auto mt-12">
                    {skillsData.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow min-w-[280px] flex-1 max-w-[320px]"
                        >
                            <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border/50 pb-2">
                                {skillGroup.category}
                            </h3>
                            <ul className="space-y-2">
                                {skillGroup.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-default">
                                        <span className="text-primary text-xs">▹</span>
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
