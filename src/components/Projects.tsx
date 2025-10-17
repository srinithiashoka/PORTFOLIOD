import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Food Delivery Application",
    description:
      "A full-stack Java-based food delivery platform with restaurant menus, cart management, order tracking, and payment integration using JSP, Servlets, JDBC, MySQL, HTML, CSS, and JavaScript.",
    tags: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "HTML", "CSS", "JavaScript"],
    gradient: "from-primary to-secondary",
    githubUrl: "https://github.com/srinithiashoka/food-delivery", // optional placeholder
  },
  {
    title: "Glaucoma Detection",
    description:
      "A deep learning-based system to detect glaucoma from eye images using CNN and image segmentation techniques in Python.",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "Image Segmentation"],
    gradient: "from-accent to-primary",
    githubUrl: "https://github.com/srinithiashoka/Glaucoma-project", // optional placeholder
  },
  {
    title: "E-Commerce Web App",
    description:
      "A responsive e-commerce application built with React, featuring product listings, dynamic cart management, and API-based data handling.",
    tags: ["React", "REST API", "JavaScript", "CSS3"],
    gradient: "from-primary to-accent",
    liveUrl: "https://ecomerces-uip.vercel.app/",
    githubUrl: "https://github.com/srinithiashoka/ecomerces-uip",
  },
  {
  title: "Todo List Web App",
  description:
    "A simple and responsive Todo List application built using HTML, CSS, and JavaScript. It allows users to add, edit, and delete tasks with smooth UI interactions.",
  tags: ["HTML", "CSS", "JavaScript"],
  gradient: "from-secondary to-accent",
  liveUrl: "https://srinithiashoka.github.io/To-Do-List/", // 🔹 replace with your actual live URL
  githubUrl: "https://github.com/srinithiashoka/To-Do-List", // 🔹 replace with your repo link
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
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
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
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

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
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}

                  {project.liveUrl && (
                    <Button
                      size="sm"
                      asChild
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        View Live
                      </a>
                    </Button>
                  )}
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
