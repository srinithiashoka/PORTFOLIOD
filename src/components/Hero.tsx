import { motion } from "framer-motion";
import { Button } from "./ui/button";
import ParticlesBackground from "./ParticlesBackground";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <h2 className="text-lg md:text-xl text-secondary font-semibold">Hi, I'm</h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text">
                Srinithi
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium">
                Frontend Developer & Creative Coder
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl"
            >
              Crafting beautiful, interactive web experiences with modern technologies and creative solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl hover-glow-violet hover-lift"
              >
                Let's Connect
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
              <motion.img
                src={profileImage}
                alt="Srinithi Profile"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
