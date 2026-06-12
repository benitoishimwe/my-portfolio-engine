import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <p className="text-primary font-mono text-sm mb-4">Oops!</p>
        <h1 className="text-8xl md:text-9xl font-bold text-foreground tracking-tighter mb-2">
          4<span className="text-primary">0</span>4
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          This page doesn't exist.
        </p>
        <Link to="/">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            <Home className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
