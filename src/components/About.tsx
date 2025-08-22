"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiWordpress,
  SiShopify,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import {
  FaWordpress,
  FaRocket,
  FaPalette,
  FaMobile,
  FaPlug,
  FaShoppingCart,
  FaClock,
  FaUsers,
} from "react-icons/fa";

export default function About() {
  const skills = [
    {
      category: "WordPress Core",
      items: [
        { name: "WordPress", icon: SiWordpress, level: 95 },
        { name: "PHP", icon: SiPhp, level: 90 },
        { name: "MySQL", icon: SiMysql, level: 85 },
        { name: "Custom Themes", icon: SiWordpress, level: 92 },
        { name: "Plugin Development", icon: SiWordpress, level: 88 },
      ],
    },
    {
      category: "Frontend & Design",
      items: [
        { name: "JavaScript", icon: SiJavascript, level: 90 },
        { name: "HTML5", icon: SiHtml5, level: 95 },
        { name: "CSS3", icon: SiCss3, level: 92 },
        { name: "Elementor", icon: SiWordpress, level: 95 },
        { name: "Gutenberg", icon: SiWordpress, level: 88 },
      ],
    },
    {
      category: "E-commerce & Tools",
      items: [
        { name: "WooCommerce", icon: SiWordpress, level: 92 },
        { name: "Shopify", icon: SiShopify, level: 85 },
        { name: "Git", icon: SiWordpress, level: 88 },
        { name: "REST API", icon: SiWordpress, level: 85 },
      ],
    },
  ];

  const services = [
    {
      icon: FaWordpress,
      title: "Custom WordPress Development",
      description:
        "Expert WordPress theme and plugin development with clean, maintainable code following WordPress best practices.",
    },
    {
      icon: FaShoppingCart,
      title: "WooCommerce Solutions",
      description:
        "Complete e-commerce solutions with custom WooCommerce development, payment integration, and inventory management.",
    },
    {
      icon: FaPalette,
      title: "Elementor & Page Builders",
      description:
        "Advanced Elementor development, custom widgets, and page builder solutions for dynamic WordPress sites.",
    },
    {
      icon: FaClock,
      title: "Remote Collaboration",
      description:
        "Excellent communication, time zone flexibility, and project management skills for seamless remote work.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            WordPress Expert Ready for
            <span className="block text-primary">Remote Collaboration</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With 5+ years of specialized WordPress development experience, I am
            an expert in Flatsome theme customization and have built 100+
            websites across diverse industries including barber shops,
            e-commerce stores, massage centers, law firms, agencies, and real
            estate platforms. I excel in creating custom themes, advanced
            customizations, and delivering pixel-perfect solutions for
            international clients.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Technical Skills
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-6 text-center">
                      {skillCategory.category}
                    </h4>
                    <div className="space-y-4">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <skill.icon className="w-5 h-5 text-primary" />
                              <span className="font-medium text-sm">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 1,
                                delay: skillIndex * 0.1,
                              }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "100+", label: "Flatsome Sites Built" },
            { number: "5+", label: "Years WordPress Experience" },
            { number: "10+", label: "Custom Themes Created" },
            { number: "15+", label: "Industry Categories" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-lg bg-card/30 backdrop-blur-sm"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
