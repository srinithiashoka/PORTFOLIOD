import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText } from "lucide-react";
import { Button } from "./ui/button";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Srinithi_Resume.pdf"; // Make sure this matches your file name in /public
    link.download = "Srinithi_Resume.pdf";
    link.click();
  };

  return (
    <section id="resume" ref={ref} className="relative py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-6">
              <FileText size={48} className="text-primary" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
              Download My Resume
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Want to know more about my experience, education, and qualifications?
              Download my resume to get the full picture of my professional journey.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <Button
                onClick={handleDownload}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-xl hover-glow-cyan hover-lift group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <Download size={24} className="mr-2 relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Download Resume</span>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-muted-foreground mt-6"
            >
              Available in PDF format
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
