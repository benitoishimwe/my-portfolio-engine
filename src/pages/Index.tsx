import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const SectionDivider = () => (
  <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent max-w-2xl mx-auto" />
);

const Index = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Hero />
        <SectionDivider />
        <About />
        <Stats />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
      </motion.div>
    </Layout>
  );
};

export default Index;
