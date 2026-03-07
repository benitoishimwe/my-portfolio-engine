import { motion } from "framer-motion";
import { Folder, Github, ExternalLink } from "lucide-react";

const projectsData = [
    {
        title: "AI Chat Assistant",
        description: "A modern conversational AI interface delivering real-time, context-aware responses with streaming output and memory.",
        tech: ["Next.js", "TypeScript", "Tailwind", "OpenAI/Gemini API"],
        github: "https://github.com/Engr-BenitoIshimwe/AI-Chat-Assistant-Next-Gen-AI-Communicator.git",
        live: ""
    },
    {
        title: "Review Collect",
        description: "A QR-based web app enabling local businesses to collect reviews. Features include dashboard generation and interactive customer giveaway flows.",
        tech: ["React/Vue", "Node.js", "PostgreSQL", "Manus"],
        github: "https://github.com/Engr-BenitoIshimwe/review-collect.git",
        live: "https://reviewapp-edfxrtkv.manus.space/"
    },
    {
        title: "PedalStay",
        description: "A comprehensive bike-rental marketplace platform with map-based discovery, user profiles, listings, and a robust booking system.",
        tech: ["React", "Leaflet", "Node.js", "MongoDB"],
        github: "https://github.com/Engr-BenitoIshimwe/PedalStay-app.git",
        live: "https://bike-rental-hub-11.preview.emergentagent.com/"
    },
    {
        title: "AI Interior Designer",
        description: "An AI-powered tool analyzing room images and generating interior design suggestions using custom image processing and style detection.",
        tech: ["Python", "Flask", "TensorFlow", "OpenCV"],
        github: "https://github.com/Engr-BenitoIshimwe/AI-interior-designer.git",
        live: ""
    },
    {
        title: "Recipe Tracker",
        description: "A full-stack application acting as a personal digital recipe book. Users can seamlessly add, search, and manage meals via an intuitive interface.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/Engr-BenitoIshimwe/Recipe-tracker.git",
        live: ""
    },
    {
        title: "Daily Fit Tracker",
        description: "A comprehensive fitness dashboard for tracking workouts, nutrition, logs, and progress charts via real-time data syncing.",
        tech: ["React/Native", "Firebase", "Chart.js"],
        github: "https://github.com/Engr-BenitoIshimwe/daily-fit-tracker.git",
        live: ""
    },
    {
        title: "Dog Walking Marketplace",
        description: "A visually engaging landing page concept bridging dog owners with walkers. Emphasizes clean UI/UX and clear CTAs.",
        tech: ["Figma", "HTML", "CSS"],
        github: "https://github.com/Engr-BenitoIshimwe/Dogwalkingmarketplacelandingpage.git",
        live: "https://theory-give-97989094.figma.site"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-16">
                    <span className="text-primary font-mono text-sm">04.</span>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Things I've Built</h2>
                    <div className="h-[1px] bg-border/50 flex-grow max-w-[300px]" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col h-full bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:-translate-y-2 hover:border-primary/50 transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-primary/5"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <Folder className="w-10 h-10 text-primary" />
                                <div className="flex gap-4 items-center">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                            <Github className="w-5 h-5" />
                                            <span className="sr-only">GitHub Repository</span>
                                        </a>
                                    )}
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                            <span className="sr-only">External Link</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors cursor-pointer">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>

                            <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
                                {project.tech.map((tech, i) => (
                                    <li key={i} className="text-xs font-mono text-muted-foreground">
                                        {tech}
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

export default Projects;
