import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Globe, Send, ArrowUpRight, CheckCircle, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_f7w9mgd";
const EMAILJS_TEMPLATE_ID = "template_j5b979y";
const EMAILJS_PUBLIC_KEY = "e-yY2fp51MTiCoj3l";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bijoyhassan23@gmail.com",
    href: "mailto:bijoyhassan23@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+8801995581952",
    href: "tel:+8801995581952",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "https://maps.google.com/?q=Dhaka,Bangladesh",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/bijoyhassan23",
  },
  {
    icon: Globe,
    label: "Portfolio",
    href: "/",
  },
  {
    icon: Linkedin,
    label: "Linkedin",
    href: "https://linkedin.com/in/bijoyhassan23",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com/bijoyhassan23",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      formRef.current?.reset();

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">// CONTACT</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.label === "Location" ? "_blank" : undefined}
                    rel={info.label === "Location" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="glass-card p-5 rounded-xl border border-white/10 flex items-center gap-4 group cursor-pointer glow-border"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="pt-6"
              >
                <h3 className="text-sm font-medium text-muted-foreground mb-4">Find me on</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl glass-card border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="glass-card p-6 rounded-xl border border-success/30 bg-success/5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-success rounded-full animate-pulse" />
                  <span className="font-medium text-success">Currently available for new projects</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Response time: Usually within 24 hours
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="glass-card p-8 rounded-2xl border border-white/10 space-y-6 relative overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project inquiry"
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting || isSuccess}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full mr-2"
                      />
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>

                {/* Success Overlay */}
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mb-4"
                    >
                      <CheckCircle className="w-10 h-10 text-success" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-bold text-success mb-2"
                    >
                      Message Sent Successfully!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-muted-foreground text-center"
                    >
                      Thank you for reaching out. I'll get back to you soon.
                    </motion.p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
