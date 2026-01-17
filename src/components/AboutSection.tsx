import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Users, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  { value: "100+", label: "Projects Delivered", icon: Briefcase },
  { value: "3+", label: "Years Experience", icon: Code2 },
  { value: "50+", label: "Happy Clients", icon: Users },
  { value: "BSc CSE", label: "Education", icon: GraduationCap },
  { value: "Diploma", label: "in Computer Technology", icon: GraduationCap },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">// ABOUT ME</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Bridging <span className="gradient-text">Code</span> and{" "}
              <span className="text-highlight">Leadership</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card p-8 rounded-2xl border border-white/10">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I am a developer who thrives at the intersection of{" "}
                  <span className="text-primary font-semibold">JavaScript curiosity</span> and{" "}
                  <span className="text-success font-semibold">PHP efficiency</span>. Currently
                  pursuing a BSc in CSE at Southeast University, I have built a career on turning
                  complex requirements into scalable realities.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My background as a{" "}
                  <span className="text-highlight font-semibold">Key Account Manager</span> and{" "}
                  <span className="text-highlight font-semibold">Team Lead</span> at companies like
                  Bdcalling and Forazi Tech allows me to lead development cycles that prioritize
                  both technical excellence and client satisfaction.
                </p>

                {/* Experience Timeline */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Experience
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        role: "Team Lead & Full-Stack Developer",
                        company: "Bdcalling IT Ltd",
                        period: "2022 - Present",
                      },
                      {
                        role: "Key Account Manager",
                        company: "Forazi Tech",
                        period: "2021 - 2022",
                      },
                    ].map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <div>
                          <p className="font-medium">{exp.role}</p>
                          <p className="text-sm text-muted-foreground">
                            {exp.company} • {exp.period}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-6 rounded-2xl border border-white/10 group cursor-pointer glow-border"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
