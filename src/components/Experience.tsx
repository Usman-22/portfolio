"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaWordpress,
  FaCheck,
  FaClock,
  FaUsers,
  FaGlobeAmericas,
  FaTools,
} from "react-icons/fa";
import { SiWordpress, SiPhp, SiWoo } from "react-icons/si";

export default function Experience() {
  const experiences = [
    {
      title: "Senior WordPress Developer & Theme Specialist",
      company: "Freelance & Remote Projects Worldwide",
      period: "2023 - Present",
      type: "Remote",
      achievements: [
        "Developed 10+ completely custom WordPress themes from scratch with unique designs",
        "Built 100+ professional websites using Flatsome theme with extensive customizations",
        "Created diverse industry-specific solutions: Barber shops, E-commerce stores, Massage therapy centers, Law firms, Digital agencies, Real estate platforms, and many more",
        "Specialized in Flatsome theme customization with advanced child theme development",
        "Implemented complex WooCommerce stores with custom product layouts and checkout flows",
        "Delivered pixel-perfect responsive designs across all device types",
        "Achieved 95+ Google PageSpeed scores through advanced optimization techniques",
        "Managed ongoing maintenance and updates for 50+ active client websites",
        "Integrated third-party services: Payment gateways, CRM systems, booking platforms, and marketing tools",
      ],
      technologies: [
        "WordPress",
        "Flatsome Theme",
        "PHP",
        "WooCommerce",
        "Elementor Pro",
        "MySQL",
        "JavaScript",
        "CSS3",
        "Child Themes",
      ],
    },
    {
      title: "WordPress Developer & Multi-Industry Specialist",
      company: "Various International Clients & Agencies",
      period: "2022 - 2024",
      type: "Contract & Remote",
      achievements: [
        "Mastered Flatsome theme ecosystem and became expert in its customization capabilities",
        "Developed industry-specific website solutions across 10+ different business categories",
        "Created custom post types and advanced custom fields for specialized content management",
        "Built responsive booking systems for service-based businesses (massage therapy, barber shops)",
        "Implemented advanced e-commerce features for online stores with inventory management",
        "Designed professional corporate websites for law firms and agencies with lead generation focus",
        "Developed real estate listing platforms with advanced search and filtering capabilities",
        "Collaborated with international teams using project management tools and version control",
        "Provided ongoing technical support and training to clients for content management",
      ],
      technologies: [
        "WordPress",
        "Flatsome",
        "PHP",
        "Advanced Custom Fields",
        "WooCommerce",
        "JavaScript",
        "CSS3",
        "HTML5",
        "Git",
      ],
    },
    {
      title: "WordPress Theme Developer",
      company: "Emerging Developer & Skill Building",
      period: "2021 - 2022",
      type: "Learning & First Projects",
      achievements: [
        "Learned WordPress development fundamentals and best practices",
        "Completed first custom WordPress theme projects with basic functionality",
        "Gained expertise in Flatsome theme structure and customization methods",
        "Developed skills in responsive web design and cross-browser compatibility",
        "Built foundational knowledge in PHP, MySQL, and WordPress coding standards",
        "Created first e-commerce solutions using WooCommerce integration",
        "Established workflow processes for efficient theme development and deployment",
      ],
      technologies: [
        "WordPress",
        "PHP",
        "MySQL",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
    },
  ];

  const certifications = [
    {
      title: "WordPress Certified Developer",
      issuer: "WordPress.org",
      year: "2023",
      icon: SiWordpress,
    },
    {
      title: "WooCommerce Expert Certification",
      issuer: "WooCommerce",
      year: "2022",
      icon: SiWoo,
    },
    {
      title: "PHP Advanced Certification",
      issuer: "PHP Institute",
      year: "2021",
      icon: SiPhp,
    },
  ];

  const industryExpertise = [
    {
      category: "Service-Based Businesses",
      projects: [
        "Barber Shops & Hair Salons",
        "Massage Therapy Centers",
        "Spa & Wellness Centers",
        "Beauty & Cosmetic Services",
        "Fitness & Gym Websites",
      ],
    },
    {
      category: "E-commerce & Retail",
      projects: [
        "Fashion & Clothing Stores",
        "Electronics & Gadgets",
        "Health & Beauty Products",
        "Home & Garden Supplies",
        "Custom Product Catalogs",
      ],
    },
    {
      category: "Professional Services",
      projects: [
        "Law Firms & Legal Services",
        "Digital Marketing Agencies",
        "Consulting Companies",
        "Financial Services",
        "Medical & Healthcare",
      ],
    },
    {
      category: "Real Estate & Property",
      projects: [
        "Real Estate Agencies",
        "Property Management",
        "Rental Platforms",
        "Commercial Real Estate",
        "Property Listing Portals",
      ],
    },
  ];

  const remoteSkills = [
    {
      icon: FaGlobeAmericas,
      title: "Global Communication",
      description:
        "Fluent in English, experienced in cross-cultural communication",
    },
    {
      icon: FaClock,
      title: "Time Zone Flexibility",
      description: "Available to work in US, EU, and APAC time zones",
    },
    {
      icon: FaUsers,
      title: "Team Collaboration",
      description:
        "Proficient with Slack, Zoom, Asana, Trello, and Git workflows",
    },
    {
      icon: FaTools,
      title: "Development Tools",
      description:
        "Expert with VS Code, Local WP, Docker, and staging environments",
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
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Experience & Skills
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven WordPress Expertise
            <span className="block text-primary">& Remote Work Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            5+ years of specialized WordPress development with extensive
            Flatsome theme expertise. Built 100+ websites across diverse
            industries with 10+ custom themes from scratch. Proven track record
            of successful remote collaborations and satisfied international
            clients.
          </p>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Work Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          {exp.title}
                        </h4>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <Badge variant="outline">{exp.type}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-semibold mb-4 flex items-center gap-2">
                          <FaCheck className="text-primary" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-4 flex items-center gap-2">
                          <FaWordpress className="text-primary" />
                          Technologies Used
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-card/30 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <cert.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {cert.issuer}
                    </p>
                    <Badge variant="outline">{cert.year}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Expertise */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Industry Expertise & Project Categories
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Successfully delivered WordPress solutions across diverse
            industries, each with unique requirements and specialized
            functionality.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryExpertise.map((industry, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-card/30 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4 text-primary">
                      {industry.category}
                    </h4>
                    <ul className="space-y-2">
                      {industry.projects.map((project, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0"></span>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Remote Work Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Remote Work Excellence
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {remoteSkills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-3">{skill.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
