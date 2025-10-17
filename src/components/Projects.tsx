import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with cart, checkout, and payment integration using React and Stripe.",
    tags: ["React", "TypeScript", "Tailwind", "Stripe"],
    gradient: "from-primary to-secondary",
  },
  {
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tags: ["Next.js", "React Query", "Framer Motion", "Supabase"],
    gradient: "from-secondary to-accent",
  },
  {
    title: "Portfolio Generator",
    description: "SaaS tool that helps developers create beautiful portfolio websites with customizable themes and templates.",
    tags: ["React", "Three.js", "Tailwind", "Firebase"],
    gradient: "from-accent to-primary",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with interactive maps, forecasts, and location-based weather alerts.",
    tags: ["React", "OpenWeather API", "Charts.js", "Geolocation"],
    gradient: "from-primary to-accent",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, rotateX: 2, rotateY: 2 }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover-lift overflow-hidden"
              style={{ perspective: "1000px" }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-muted text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Live
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
