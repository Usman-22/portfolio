"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { SiWordpress, SiPhp, SiMysql, SiJavascript } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const techStack = [
    { icon: SiWordpress, name: "WordPress" },
    { icon: SiPhp, name: "PHP" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: FaShoppingCart, name: "WooCommerce" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 py-20 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium"
          >
            🚀 Available for Remote Work
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent mb-6">
            Muhammad Usman
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              WordPress Developer
            </motion.span>
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Expert WordPress developer with 100+ websites built using Flatsome
          theme and 10+ custom themes created from scratch. Specializing in
          diverse industries including barber shops, e-commerce, massage
          centers, law firms, and real estate. Remote-ready professional with
          expertise in{" "}
          <span className="text-primary font-semibold">Flatsome Theme</span>,
          <span className="text-primary font-semibold">
            {" "}
            Custom WordPress Development
          </span>
          ,<span className="text-primary font-semibold"> WooCommerce</span>, and
          <span className="text-primary font-semibold">
            {" "}
            Multi-Industry Solutions
          </span>
          .
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex items-center gap-2 bg-card border rounded-lg px-4 py-2 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <tech.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button size="lg" className="group">
            View WordPress Projects
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.div>
          </Button>
          <Button variant="outline" size="lg">
            Hire for Remote Work
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-12"
        >
          <motion.a
            href="https://www.linkedin.com/in/muhammad-usman-b0274b199/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full hover:bg-secondary"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="mailto:tusman878@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full hover:bg-secondary"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope size={24} />
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-muted-foreground"
          >
            <FaArrowDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
