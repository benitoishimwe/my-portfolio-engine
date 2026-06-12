import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { siteConfig } from "@/data/site-config";
import { Send } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    toast.success("Opening your email client...");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-32 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">05. What's Next?</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            I'm currently looking for new opportunities and collaborations. My inbox is always open.
            Whether you have a question, a project in mind, or just want to say hi, I'll get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - CTA */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground">Let's work together</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out directly or use the contact form.
            </p>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-mono">Email:</span>{" "}
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.email}
                </a>
              </p>
            </div>
            <a href={`mailto:${siteConfig.email}`}>
              <Button size="lg" className="bg-transparent border border-primary text-primary hover:bg-primary/10 font-mono h-14 px-8 text-base transition-all mt-4">
                Say Hello
              </Button>
            </a>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-card border-border/50 focus:border-primary/50 h-12"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-card border-border/50 focus:border-primary/50 h-12"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="bg-card border-border/50 focus:border-primary/50 resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 gap-2 font-semibold"
            >
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
