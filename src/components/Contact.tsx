import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Contact = () => {
    return (
        <section id="contact" className="py-32 container mx-auto px-4 flex justify-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-xl flex flex-col items-center"
            >
                <span className="text-primary font-mono text-sm mb-4">05. What's Next?</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Get In Touch</h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                    I'm currently looking for new opportunities and collaborations. My inbox is always open.
                    Whether you have a question, a project in mind, or just want to say hi, I'll get back to you!
                </p>

                <a href="mailto:benishimwe31@gmail.com">
                    <Button size="lg" className="bg-transparent border border-primary text-primary hover:bg-primary/10 font-mono h-14 px-8 text-base transition-all">
                        Say Hello
                    </Button>
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
