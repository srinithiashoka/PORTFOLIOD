import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import FloatingCube from "./FloatingCube";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground leading-relaxed">
              I'm a passionate Frontend Developer with a love for creating beautiful, interactive, and user-friendly web applications. With expertise in modern web technologies, I bring ideas to life through clean code and creative design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in web development started with a curiosity for how things work on the internet, and it has evolved into a career where I continuously learn and adapt to new technologies. I specialize in React, TypeScript, and creative animations that make the web more engaging.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, experimenting with 3D graphics, or contributing to open-source projects. I believe in writing code that not only works but also inspires.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <FloatingCube />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
