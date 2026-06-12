import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { expertiseCards } from "@/data/about";

const ExpertiseCard = ({ icon: Icon, title, description, delay }: { icon: LucideIcon; title: string; description: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -4 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
    className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors group"
  >
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
    <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const About = () => {
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
              My background blends cloud engineering, backend development, and cross&#8209;functional project leadership.
              I've worked extensively with Azure, Node.js, TypeScript, SQL, and modern frontend frameworks, delivering solutions in both enterprise and startup environments.
            </p>
            <p>
              My experience spans end-to-end cloud migrations, third-party API integrations, robust microservices, and production&#8209;grade automation.
              I bring a structured, analytical mindset, strong communication capabilities, and the innate ability to translate intricate business requirements into scalable, reliable technical systems.
            </p>
            <p>
              Currently pursuing my education at WSKiZ in Pozna&#324;, Poland, combining technical expertise with a degree in Management & Industrial Engineering. When I'm not coding, you can find me playing the guitar or piano, or exploring 3D modeling in Blender.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {expertiseCards.map((card, index) => (
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
