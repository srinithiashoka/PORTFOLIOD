import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Srinithi</h3>
            <p className="text-sm text-muted-foreground">
              Frontend Developer & Creative Coder
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:hello@example.com"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
            <span>© {currentYear} Srinithi. Built with</span>
            <Heart size={14} className="text-accent fill-accent animate-glow-pulse" />
            <span>and React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
