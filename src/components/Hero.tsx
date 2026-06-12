import { siteConfig } from '@/data/site-config';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center container mx-auto px-4 relative">
      {/* Decorative background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] -z-10 animate-pulse delay-1000 pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-6 lg:order-1 order-2"
        >
          <p className="text-primary font-mono tracking-wider">
            Hi, my name is
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] font-bold tracking-tighter text-foreground leading-tight md:leading-[1.1]">
            ISHIMWE Benito.
            <br />
            <span className="text-primary text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Backend & Cloud Engineer.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mt-6">
            I am a versatile engineer with a unique blend of cloud engineering,
            backend development, and cross&#8209;functional project leadership.
            I translate complex business requirements into reliable,
            production-grade technical systems.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-8">
            <a href="#contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 px-8"
              >
                Get In Touch
              </Button>
            </a>
            <a href="#projects">
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-primary/50 text-foreground hover:bg-primary/10"
              >
                View Projects
              </Button>
            </a>
            <a href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-primary/50 text-foreground hover:bg-primary/10 gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-6 pt-12">
            {siteConfig.social.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className="text-muted-foreground hover:text-primary transition-all hover:-translate-y-1"
              >
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.srLabel}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:order-2 order-1 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
            <div className="absolute inset-0 border-2 border-primary rounded-2xl md:rounded-[2rem] transform translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 -z-10 transition-transform hover:translate-x-2 hover:translate-y-2" />
            <img
              src={import.meta.env.BASE_URL + 'profile.jpg'}
              alt={siteConfig.fullName}
              loading="eager"
              className="object-cover w-full h-full rounded-2xl md:rounded-[2rem] shadow-2xl transition-all duration-500 bg-muted hover:scale-[1.02]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
