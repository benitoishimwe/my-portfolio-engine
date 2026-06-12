import { Link } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { siteConfig, navLinks } from "@/data/site-config";
import { useActiveSection } from "@/hooks/use-active-section";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const activeSection = useActiveSection();

  // Close menu on outside click
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMenuOpen]);

  const isLinkActive = (href: string) => {
    if (href === "/") return !activeSection;
    return href === `#${activeSection}`;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none"
      >
        Skip to content
      </a>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
            {siteConfig.name}<span className="text-primary">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative ${
                  isLinkActive(link.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
                {isLinkActive(link.href) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <a href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
              <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10 gap-2">
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </a>
            <a href={`mailto:${siteConfig.email}`}>
              <Button variant="default" className="font-semibold text-primary-foreground bg-primary hover:bg-primary/90">
                Hire Me
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            ref={toggleRef}
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden border-t border-border/40 bg-background absolute top-16 left-0 right-0 shadow-lg overflow-hidden"
            >
              <nav className="flex flex-col gap-4 p-4" role="navigation" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-lg font-medium transition-colors ${
                      isLinkActive(link.href)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                ))}
                <a href={siteConfig.resumeUrl} target="_blank" rel="noreferrer" className="w-full mt-2">
                  <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/10 gap-2">
                    <Download className="w-4 h-4" />
                    Resume
                  </Button>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="w-full">
                  <Button variant="default" className="w-full font-semibold">
                    Hire Me
                  </Button>
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main id="main-content" className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative border-t border-border/40 py-12 bg-background/50">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo + Credit */}
            <div className="text-center md:text-left">
              <p className="text-lg font-bold tracking-tighter">
                {siteConfig.name}<span className="text-primary">.</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Designed & Built by {siteConfig.fullName}
              </p>
            </div>

            {/* Quick Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.filter(l => l.href !== "/").map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Social */}
            <div className="flex items-center gap-4">
              {siteConfig.social.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="sr-only">{link.srLabel}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/20 text-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} {siteConfig.fullName}. Built with React & Tailwind.
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
};

export default Layout;
