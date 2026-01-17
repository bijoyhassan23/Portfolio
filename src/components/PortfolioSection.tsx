import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight, Zap, BarChart3, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Anixways.com",
    subtitle: "Automation & E-commerce",
    description:
      "Custom WooCommerce Import & Stock Management Plugin. Automated product imports from supplier APIs with real-time price multipliers and scheduled stock updates.",
    icon: Zap,
    tags: ["WooCommerce", "PHP", "REST API", "Automation"],
    outcome: "Automated 10,000+ product updates daily",
    color: "primary",
    link: "https://anixways.com",
  },
  {
    title: "Interviewkickstart.com",
    subtitle: "Enterprise UX",
    description:
      "Backend Integration & Personalized UX. Integrated real-time API data, implemented A/B testing, and delivered geo-location based content for a personalized user journey.",
    icon: BarChart3,
    tags: ["WordPress", "JavaScript", "A/B Testing", "API Integration"],
    outcome: "35% increase in user engagement",
    color: "success",
    link: "https://interviewkickstart.com",
  },
  {
    title: "Custom Themes & Plugins",
    subtitle: "Tailored WordPress & Webflow Development",
    description:
      "Developed bespoke WordPress themes and plugins, along with Webflow solutions tailored to unique client requirements. Focus on performance, scalability, and clean code.",
    icon: Palette,
    tags: ["WordPress", "Webflow", "Theme Development", "Plugin Development"],
    outcome: "50+ custom solutions delivered",
    color: "highlight",
    link: "#",
  },
];

export const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">// PORTFOLIO</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              High-Impact <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of projects where code meets business impact
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="glass-card rounded-2xl border border-white/10 overflow-hidden group hover:border-primary/30 transition-all duration-500">
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${
                          project.color === "primary"
                            ? "bg-primary/20 text-primary"
                            : project.color === "success"
                            ? "bg-success/20 text-success"
                            : "bg-highlight/20 text-highlight"
                        }`}
                      >
                        <project.icon className="w-8 h-8" />
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <p
                              className={`font-medium ${
                                project.color === "primary"
                                  ? "text-primary"
                                  : project.color === "success"
                                  ? "text-success"
                                  : "text-highlight"
                              }`}
                            >
                              {project.subtitle}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="self-start lg:self-center"
                            asChild
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              View Project
                              <ArrowUpRight className="w-4 h-4" />
                            </a>
                          </Button>
                        </div>

                        <p className="text-muted-foreground mb-6">{project.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span key={tag} className="tech-badge">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Outcome */}
                        <div
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                            project.color === "primary"
                              ? "bg-primary/10 text-primary"
                              : project.color === "success"
                              ? "bg-success/10 text-success"
                              : "bg-highlight/10 text-highlight"
                          }`}
                        >
                          <span className="font-mono text-sm font-semibold">→ {project.outcome}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/bijoyhassan23"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View More on GitHub
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
