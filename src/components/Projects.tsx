import { motion } from "framer-motion";
import { Folder, Github, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/projects";

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
                      <span className="sr-only">Live Demo</span>
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

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-primary/5 border border-primary/10 px-2.5 py-1 text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
