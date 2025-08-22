"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Footer() {
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/muhammad-usman-b0274b199/",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: FaEnvelope,
      href: "mailto:tusman878@gmail.com",
      label: "Email",
      color: "hover:text-primary",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
              Muhammad Usman
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Expert WordPress developer specializing in custom themes, plugins,
              and e-commerce solutions. Available for remote work opportunities
              worldwide.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 ${social.color}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#" },
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      if (link.href === "#") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Custom WordPress Themes</li>
              <li>Plugin Development</li>
              <li>WooCommerce Solutions</li>
              <li>Elementor Development</li>
              <li>WordPress Migration</li>
              <li>Remote Collaboration</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2025 Muhammad Usman. Made with</span>

              <div className="flex items-center gap-1">
                <SiReact className="w-4 h-4 text-blue-500" />
                <SiNextdotjs className="w-4 h-4" />
                <SiTailwindcss className="w-4 h-4 text-cyan-500" />
              </div>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to top</span>
              <FaArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
