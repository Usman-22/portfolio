"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaShoppingCart,
  FaBlog,
  FaBusinessTime,
  FaWordpress,
  FaPlug,
  FaStore,
} from "react-icons/fa";
import {
  SiWordpress,
  SiPhp,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiWoo,
} from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Advanced Holistic Center",
      description:
        "Professional holistic healthcare clinic website specializing in Chinese Medicine & Acupuncture. Features service booking system, multi-location support (NYC & Miami), comprehensive treatment information, patient reviews, and mobile-responsive design.",
      image: "/api/placeholder/600/400",
      technologies: [
        { name: "WordPress", icon: SiWordpress },
        { name: "Custom Theme", icon: SiWordpress },
        { name: "PHP", icon: SiPhp },
        { name: "JavaScript", icon: SiJavascript },
      ],
      category: "Healthcare",
      featured: true,
      links: {
        demo: "https://advancedholisticcenter.com/",
        github: undefined,
      },
      icon: FaBusinessTime,
    },
    {
      id: 2,
      title: "UzmikMedia - Digital Agency",
      description:
        "Premium web design agency website featuring modern responsive design, service showcase, portfolio gallery, case studies, client testimonials, and multi-location presence. Complete digital marketing agency solution with custom WordPress theme.",
      image: "/api/placeholder/600/400",
      technologies: [
        { name: "WordPress", icon: SiWordpress },
        { name: "Custom Theme", icon: SiWordpress },
        { name: "PHP", icon: SiPhp },
        { name: "JavaScript", icon: SiJavascript },
      ],
      category: "Agency",
      featured: true,
      links: {
        demo: "https://uzairahmedm50.sg-host.com/",
        github: undefined,
      },
      icon: FaBusinessTime,
    },
    {
      id: 3,
      title: "Instagreen Capital - Financial Services",
      description:
        "Professional financial services website built with WordPress and Elementor. Features merchant cash advance solutions, comprehensive financial services, client testimonials, and modern responsive design. Complete business finance platform with advanced functionality.",
      image: "/api/placeholder/600/400",
      technologies: [
        { name: "WordPress", icon: SiWordpress },
        { name: "Elementor Pro", icon: SiWordpress },
        { name: "PHP", icon: SiPhp },
        { name: "JavaScript", icon: SiJavascript },
      ],
      category: "Finance",
      featured: true,
      links: {
        demo: "https://instagreencapital.com/",
        github: undefined,
      },
      icon: FaBusinessTime,
    },
    {
      id: 4,
      title: "Hi-Tech Panels - E-commerce Platform",
      description:
        "Specialized e-commerce website for Rivian EDV vehicle aluminum panels. Features custom product catalog, pricing packages, appointment booking system, gallery showcase, client testimonials, and complete e-commerce functionality for fleet vehicle parts.",
      image: "/api/placeholder/600/400",
      technologies: [
        { name: "WordPress", icon: SiWordpress },
        { name: "WooCommerce", icon: SiWoo },
        { name: "PHP", icon: SiPhp },
        { name: "JavaScript", icon: SiJavascript },
      ],
      category: "E-commerce",
      featured: true,
      links: {
        demo: "https://hitechedvpanels.com/",
        github: undefined,
      },
      icon: FaShoppingCart,
    },
    {
      id: 5,
      title: "Qual-Pro - Electronics Manufacturing",
      description:
        "Professional B2B manufacturing website for PCB assembly and electronics services. Features comprehensive service showcase, quality certifications display, global facilities information, industry expertise sections, news integration, and advanced contact systems for manufacturing clients.",
      image: "/api/placeholder/600/400",
      technologies: [
        { name: "WordPress", icon: SiWordpress },
        { name: "Custom Theme", icon: SiWordpress },
        { name: "PHP", icon: SiPhp },
        { name: "JavaScript", icon: SiJavascript },
      ],
      category: "Manufacturing",
      featured: true,
      links: {
        demo: "https://qual-pro.com/",
        github: undefined,
      },
      icon: FaBusinessTime,
    },
    {
      id: 6,
      title: "Prime Assured Insurance",
      description:
        "Professional insurance company website featuring comprehensive insurance solutions for individuals and businesses. Includes auto, home, business, life, RV, and farm insurance services with quote request functionality, service comparisons, and modern responsive design.",
      image: "/api/placeholder/600/400",
      technologies: [
        { name: "WordPress", icon: SiWordpress },
        { name: "Custom Theme", icon: SiWordpress },
        { name: "PHP", icon: SiPhp },
        { name: "JavaScript", icon: SiJavascript },
      ],
      category: "Insurance",
      featured: true,
      links: {
        demo: "https://primeassuredins.com/",
        github: undefined,
      },
      icon: FaBusinessTime,
    },
  ];

  const categories = [
    "All",
    "Healthcare",
    "Agency",
    "Finance",
    "Insurance",
    "Manufacturing",
    "E-commerce",
    "Business",
    "Blog",
    "Plugin",
  ];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            My Work
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            WordPress Projects
            <span className="block text-primary">& Remote Work Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my specialized WordPress development portfolio, featuring
            custom themes, plugins, e-commerce solutions, and complex WordPress
            applications built for remote clients worldwide.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects
              .filter((p) => p.featured)
              .map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <Card className="group h-full overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm cursor-pointer">
                    <div className="relative overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <project.icon className="w-16 h-16 text-primary/60" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="flex gap-2">
                          {project.links.demo && (
                            <Button
                              size="sm"
                              className="bg-primary/90 hover:bg-primary"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.links.demo, "_blank");
                              }}
                            >
                              <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                              Demo
                            </Button>
                          )}
                          {project.links.github && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-background/90"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.links.github, "_blank");
                              }}
                            >
                              <FaGithub className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex flex-col h-full"
                      onClick={() =>
                        project.links.demo &&
                        window.open(project.links.demo, "_blank")
                      }
                    >
                      <CardHeader className="flex-shrink-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <Badge variant="secondary" className="mb-2">
                              {project.category}
                            </Badge>
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col">
                        <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.technologies.map((tech) => (
                            <div
                              key={tech.name}
                              className="flex items-center gap-1 bg-secondary/50 rounded-full px-3 py-1"
                            >
                              <tech.icon className="w-4 h-4" />
                              <span className="text-xs font-medium">
                                {tech.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects
              .filter((p) => !p.featured)
              .map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <Card className="group h-full hover:shadow-lg transition-all duration-300 border-0 bg-card/30 backdrop-blur-sm cursor-pointer flex flex-col">
                    <div
                      className="flex flex-col h-full"
                      onClick={() =>
                        project.links.demo &&
                        window.open(project.links.demo, "_blank")
                      }
                    >
                      <CardHeader className="pb-4 flex-shrink-0">
                        <div className="flex items-center justify-between mb-2">
                          <project.icon className="w-8 h-8 text-primary" />
                          <Badge variant="outline" className="text-xs">
                            {project.category}
                          </Badge>
                        </div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </CardHeader>
                      <CardContent className="pb-4 flex-grow flex flex-col">
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-auto">
                          {project.technologies.map((tech) => (
                            <div
                              key={tech.name}
                              className="flex items-center gap-1 bg-secondary/30 rounded px-2 py-1"
                            >
                              <tech.icon className="w-3 h-3" />
                              <span className="text-xs">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0 flex-shrink-0">
                        <div className="flex gap-2 w-full">
                          {project.links.demo && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.links.demo, "_blank");
                              }}
                            >
                              <FaExternalLinkAlt className="w-3 h-3 mr-1" />
                              Demo
                            </Button>
                          )}
                          {project.links.github && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.links.github, "_blank");
                              }}
                            >
                              <FaGithub className="w-3 h-3 mr-1" />
                              Code
                            </Button>
                          )}
                        </div>
                      </CardFooter>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
