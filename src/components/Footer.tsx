import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
              <span className="text-primary font-mono font-bold text-lg">SB</span>
            </div>
            <div>
              <p className="font-medium">Saif Uddin Bijoy</p>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} All rights reserved
              </p>
            </div>
          </div>

          {/* Made with Love */}
          <motion.p
            className="flex items-center gap-2 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-destructive fill-destructive" />
            </motion.span>{" "}
            in Dhaka, Bangladesh
          </motion.p>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg glass-card border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
