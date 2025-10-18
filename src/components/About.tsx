import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import FloatingLaptop from "./FloatingLaptop";

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
  I'm an aspiring Frontend Developer, newly learning React, with a strong interest in Java backend development. I enjoy creating interactive and user-friendly web applications while applying my knowledge of UI/UX design to make interfaces visually appealing and intuitive.
</p>
<p className="text-lg text-muted-foreground leading-relaxed">
  Currently, I am working at JB Portals in Training and Development, where I continue to enhance my skills in React, UI/UX design, and web development. My goal is to build applications that are not only functional but also engaging and easy to use.
</p>
<p className="text-lg text-muted-foreground leading-relaxed">
  Outside of work, I like exploring new design trends, experimenting with creative animations, and deepening my understanding of Java backend development. I strive to write code that is efficient, clean, and inspires users.
</p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <FloatingLaptop />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
