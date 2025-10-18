import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";

const certificates = [
 {
  name: "Java Full Stack Developer Certification",
  issuer: "TAP Academy",
  date: "2024",
  description: "Comprehensive training covering Java, Spring Boot, Hibernate, HTML, CSS, JavaScript, and MySQL for full stack web development.",
  link: "https://drive.google.com/file/d/1jPmt7j1WyYzJ1-UZj2D501EZAj3cVDWw/view?usp=sharing"
},
  {
  name: "Java Development on Oracle Cloud",
  issuer: "Oracle",
  date: "2024",
  description: "Hands-on certification focused on building, deploying, and managing Java applications on Oracle Cloud Infrastructure, including cloud-native development and deployment practices.",
  link: "https://drive.google.com/file/d/14AlDyT21TkqoWWRbrmZckIExjJDnBnrZ/view?usp=sharing"
},
  {
  name: "Machine Learning on Oracle Cloud",
  issuer: "Oracle",
  date: "2024",
  description: "Practical certification focused on implementing, training, and deploying machine learning models using Oracle Cloud Infrastructure and its AI services.",
  link: "https://drive.google.com/file/d/1hVui4ziExR7RWg7WNJus-4lc7-OyLbc1/view?usp=sharing"
},
{
  name: "Web Development Training Certificate",
  issuer: "Zidio",
  date: "2024",
  description: "Comprehensive training in front-end and back-end web development including HTML, CSS, JavaScript, and server-side frameworks.",
  link: "https://drive.google.com/file/d/1pvfDE36CEN1_NU4rsyfZnBeyq75LTvxX/view?usp=sharing"
}

];

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" ref={ref} className="relative py-20 md:py-32 bg-background">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-4 bg-accent/10 rounded-2xl mb-6">
            <Award size={48} className="text-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-all hover-lift h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <Award className="text-accent" size={32} />
                  <span className="text-sm text-muted-foreground">{cert.date}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{cert.name}</h3>
                <p className="text-secondary font-semibold mb-3">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{cert.description}</p>
                <a
                  href={cert.link}
                  className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

