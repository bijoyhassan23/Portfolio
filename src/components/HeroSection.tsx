import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

// Fetch Lottie animation from URL
const useLottieAnimation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("https://lottie.host/b7c9816d-73ad-48aa-ace8-48d77e591b7b/rlQpiobw78.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  return animationData;
};


export const HeroSection = () => {
  const animationData = useLottieAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-success/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-medium text-muted-foreground">
                  Available for new projects
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="hero-gradient-text">Architecting</span>
              <br />
              <span className="gradient-text">High-Performance</span>
              <br />
              <span className="hero-gradient-text">Digital Experiences</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10"
            >
              3+ years of experience delivering{" "}
              <span className="text-success font-semibold">100+</span> global WordPress solutions,
              custom plugins, and seamless API integrations
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <Button variant="primary" size="lg" asChild>
                <a href="#portfolio">
                  Explore Portfolio
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a target="_blank" href="https://drive.google.com/file/d/1Gkd1BprQ8n_cv-mr5WLhyW10lhJhgeL5/view?usp=sharing" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: "100+", label: "Projects" },
                { value: "3+", label: "Years Exp" },
                { value: "99%", label: "Uptime" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <motion.div
                    className="text-2xl md:text-3xl font-bold gradient-text"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Glassmorphism Container */}
            <div className="relative w-full max-w-md">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-success/20 to-highlight/30 rounded-3xl blur-2xl" />
              
              {/* Main Animation Container */}
              <motion.div
                className="relative glass-card p-8 rounded-3xl border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {animationData && (
                  <Lottie
                    animationData={animationData}
                    loop
                    className="w-full h-auto"
                  />
                )}
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-xl border border-success/40"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-success font-mono text-sm font-medium">✓ API Ready</span>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-xl border border-primary/40"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-primary font-mono text-sm font-medium">&lt;/&gt; Clean Code</span>
                </motion.div>
                
                <motion.div
                  className="absolute top-1/2 -right-6 glass-card px-3 py-2 rounded-lg border border-highlight/40"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-highlight font-mono text-xs">WordPress</span>
                </motion.div>
              </motion.div>

              {/* Orbiting Dots */}
              <motion.div
                className="absolute w-3 h-3 bg-primary rounded-full"
                style={{ top: "10%", left: "-5%" }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute w-2 h-2 bg-success rounded-full"
                style={{ bottom: "20%", right: "-3%" }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute w-4 h-4 bg-highlight/60 rounded-full"
                style={{ bottom: "10%", left: "10%" }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
