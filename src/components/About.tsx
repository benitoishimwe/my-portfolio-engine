import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud } from "lucide-react";

const ExpertiseCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay }}
        className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors group"
    >
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
            {description}
        </p>
    </motion.div>
);

const About = () => {
    const cards = [
        {
            icon: Code2,
            title: "Full-Stack Development",
            description: "Developing robust data-driven applications across the stack utilizing Node.js, TypeScript, React, and Angular."
        },
        {
            icon: Cloud,
            title: "Cloud Engineering",
            description: "Migrating and securing workloads, optimizing performance, and building DR solutions on Azure, AWS, and GCP."
        },
        {
            icon: Server,
            title: "Backend Architecture",
            description: "Designing backend logic, microservices, secure authentication, and complex API integrations (REST, GraphQL)."
        },
        {
            icon: Database,
            title: "Technical Leadership",
            description: "Leading cross-functional projects, implementing data-driven agile processes, and mentoring teams from planning to delivery."
        }
    ];

    return (
        <section id="about" className="py-24 container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-16">
                    <span className="text-primary font-mono text-sm">01.</span>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Who I Am</h2>
                    <div className="h-[1px] bg-border/50 flex-grow max-w-[200px]" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
                    <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                        <p>
                            My background blends cloud engineering, backend development, and cross‑functional project leadership.
                            I've worked extensively with Azure, Node.js, TypeScript, SQL, and modern frontend frameworks, delivering solutions in both enterprise and startup environments.
                        </p>
                        <p>
                            My experience spans end-to-end cloud migrations, third-party API integrations, robust microservices, and production‑grade automation.
                            I bring a structured, analytical mindset, strong communication capabilities, and the innate ability to translate intricate business requirements into scalable, reliable technical systems.
                        </p>
                        <p>
                            Currently pursuing my education at WSKiZ in Poznań, Poland, combining technical expertise with a degree in Management & Industrial Engineering. When I'm not coding, you can find me playing the guitar or piano, or exploring 3D modeling in Blender.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {cards.map((card, index) => (
                            <ExpertiseCard
                                key={card.title}
                                {...card}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
