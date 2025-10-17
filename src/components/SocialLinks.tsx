import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
    color: "hover:text-secondary hover-glow-cyan",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com",
    color: "hover:text-primary hover-glow-violet",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
    color: "hover:text-accent hover-glow-pink",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:hello@example.com",
    color: "hover:text-secondary hover-glow-cyan",
  },
];

const SocialLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Find me on these platforms or send me an email. I'm always open to interesting conversations and collaboration opportunities.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 20, rotateX: -90 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
                className={`group relative p-6 bg-card border border-border rounded-2xl transition-all duration-300 hover-lift ${link.color}`}
                style={{ perspective: "1000px" }}
              >
                <Icon size={32} className="transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {link.name}
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinks;
