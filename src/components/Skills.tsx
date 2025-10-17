import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Layers, Sparkles, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, HTML5, CSS3",
    color: "text-primary",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Responsive Design, Accessibility",
    color: "text-secondary",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimization, PWAs, Web Vitals, Lazy Loading",
    color: "text-accent",
  },
  {
    icon: Layers,
    title: "State Management",
    description: "Redux, Context API, Zustand, React Query",
    color: "text-primary",
  },
  {
    icon: Sparkles,
    title: "Animations",
    description: "Framer Motion, GSAP, Three.js, CSS Animations",
    color: "text-secondary",
  },
  {
    icon: Zap,
    title: "Modern Tools",
    description: "Vite, Webpack, Git, VS Code, Chrome DevTools",
    color: "text-accent",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-card border border-border rounded-xl p-6 hover-lift hover-glow-violet transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${skill.color} p-3 bg-muted rounded-lg`}>
                    <Icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
