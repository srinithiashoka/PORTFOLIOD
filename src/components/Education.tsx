import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "./ui/card";

const education = [
  {
    degree: "Bachelor of Science in Computer Applications",
    institution: "Bharathiyar University",
    period: "2021 - 2024",
    description: "Actively participated in student governance and academic initiatives. Served as Assistant Representative, coordinating events, facilitating communication between students and faculty, and supporting campus activities.",
    achievements: ["Assistant Representative", "Dean's List", "Web Development Club"]
  }
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="relative py-20 md:py-32 bg-card/30">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-4 bg-secondary/10 rounded-2xl mb-6">
            <GraduationCap size={48} className="text-secondary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">Education</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/50 transition-all hover-lift">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>
                    <p className="text-lg text-secondary font-semibold">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{edu.description}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm border border-secondary/20"
                    >
                      {achievement}
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

export default Education;
