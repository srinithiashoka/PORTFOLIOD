import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={ref} className="relative py-20 md:py-32 bg-card/30">
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Have a project in mind or just want to chat? Drop me a message and let's work together!
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-2xl p-8 hover-lift">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-background border-border focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="bg-background border-border focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hi!"
                rows={6}
                required
                className="bg-background border-border focus:border-primary transition-colors resize-none"
              />
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg rounded-xl hover-glow-pink group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <Send size={20} className="mr-2 relative z-10" />
                <span className="relative z-10">Send Message</span>
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
