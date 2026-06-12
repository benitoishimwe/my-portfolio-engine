import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";

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
              className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all min-w-[280px] flex-1 max-w-[320px]"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-border/50 pb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <skillGroup.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-xs font-mono text-primary hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {item}
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

export default Skills;
