import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import { Card } from "./ui/card";

const experiences = [
  {
    title: "Training and Development",
    company: "JB Portals",
    period: "Present",
    description: "Enhancing skills in React, UI/UX design, and web development while working on real-world projects.",
    skills: ["React", "UI/UX Design", "Web Development"]
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="relative py-20 md:py-32 bg-background">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-6">
            <Briefcase size={48} className="text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover-lift">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                    <p className="text-lg text-primary font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
