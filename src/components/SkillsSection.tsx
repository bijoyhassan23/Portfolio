import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    color: "primary",
    skills: ["PHP", "JavaScript (ES6+)", "Python", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "CMS & Frameworks",
    color: "success",
    skills: ["WordPress (Expert)", "Webflow", "React.js", "Tailwind CSS", "WooCommerce", "Elementor"],
  },
  {
    title: "Specialties",
    color: "highlight",
    skills: [
      "REST APIs",
      "Plugin Development",
      "Performance Optimization",
      "Team Leadership",
      "A/B Testing",
      "Geo-location Systems",
    ],
  },
];

const techLogos = [
  { name: "PHP", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "WordPress", level: 98 },
  { name: "React", level: 85 },
  { name: "REST API", level: 92 },
  { name: "Python", level: 70 },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">// SKILLS & TECH STACK</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Tools of the <span className="gradient-text">Trade</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A versatile toolkit built through years of hands-on development
            </p>
          </motion.div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-white/10"
              >
                <h3
                  className={`text-lg font-semibold mb-4 ${
                    category.color === "primary"
                      ? "text-primary"
                      : category.color === "success"
                      ? "text-success"
                      : "text-highlight"
                  }`}
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="tech-badge cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Bars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-xl font-semibold mb-8 text-center">Core Proficiencies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {techLogos.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{tech.name}</span>
                    <span className="text-sm font-mono text-primary">{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-success"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${tech.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Code Snippet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-secondary/30">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full bg-highlight/70" />
                <div className="w-3 h-3 rounded-full bg-success/70" />
                <span className="ml-4 font-mono text-xs text-muted-foreground">
                  developer_profile.json
                </span>
              </div>
              {/* Code Content */}
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <pre className="text-muted-foreground">
                  <code>
                    {`{
  `}
                    <span className="text-primary">"developer"</span>
                    {`: {
    `}
                    <span className="text-primary">"name"</span>
                    {`: `}
                    <span className="text-success">"Saif Uddin Bijoy"</span>
                    {`,
    `}
                    <span className="text-primary">"role"</span>
                    {`: `}
                    <span className="text-success">"Team Lead & Full-Stack WordPress Developer"</span>
                    {`,
    `}
                    <span className="text-primary">"passion"</span>
                    {`: `}
                    <span className="text-success">"Turning complex requirements into scalable realities"</span>
                    {`,
    `}
                    <span className="text-primary">"available"</span>
                    {`: `}
                    <span className="text-highlight">true</span>
                    {`
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
