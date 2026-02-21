import React, { useState } from "react";
import { 
  CodeBracketIcon,
  EyeIcon,
  GlobeAltIcon,
  ArrowTopRightOnSquareIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

// Import project images
import project1A from "../assets/project1-a.png";
import project1B from "../assets/project1-b.png";
import project1C from "../assets/project1-c.png";

const ProjectsSection = () => {
  const projects = [
    {
      status: "COMING SOON",
      title: "AI-Powered Task Manager",
      description: "Revolutionizing task management with AI-driven prioritization, boosting productivity by 45% and user satisfaction to 4.8/5",
      tags: ["Vision and roadmap", "Product design", "User research"],
      techStack: ["AI/ML", "React", "Node.js", "MongoDB"],
      images: [
        project1A,
        project1B,
        project1C
      ],
      repoLink: "#",
      demoLink: "#",
      projectType: "AI Application"
    },
    {
      status: "CASE STUDY",
      title: "E-Commerce Platform Redesign",
      description: "Transformed the online shopping experience through intuitive design, resulting in 60% increased customer engagement",
      tags: ["UX Research", "Visual Design", "Analytics"],
      techStack: ["React", "Tailwind", "GraphQL", "Figma"],
      images: [
        "/project2-main.png",
        "/project2-detail1.png",
        "/project2-detail2.png"
      ],
      repoLink: "#",
      demoLink: "#",
      projectType: "Web Application"
    },
    {
      status: "FEATURED WORK",
      title: "Social Media Dashboard",
      description: "Unified dashboard that simplified social media management, reducing workflow time by 35% for marketing teams",
      tags: ["System Design", "User Testing", "Development"],
      techStack: ["React", "D3.js", "Express", "Firebase"],
      images: [
        "/project3-main.png",
        "/project3-detail1.png",
        "/project3-detail2.png"
      ],
      repoLink: "#",
      demoLink: "#",
      projectType: "SaaS Product"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-off-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-accent-red font-outfit font-medium tracking-widest uppercase mb-4">Selected Works</p>
              <h2 className="text-5xl md:text-7xl font-fraunces font-bold text-premium-black leading-tight">
                Featured<br/>Projects
              </h2>
            </div>
            <p className="text-xl text-premium-gray font-outfit font-light max-w-md leading-relaxed">
              A collection of digital products crafted with precision and passion.
            </p>
          </div>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
            >
              {/* Project Header (Mobile) */}
              <div className="lg:hidden mb-8">
                <span className="text-accent-red font-outfit font-medium text-sm tracking-widest uppercase mb-2 block">
                  {project.projectType}
                </span>
                <h3 className="text-4xl font-fraunces font-bold text-premium-black mb-4">{project.title}</h3>
                <p className="text-premium-gray font-outfit font-light leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-sm font-outfit text-premium-black border border-premium-gray/20 px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Large Hero Image */}
              <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-2xl bg-premium-gray/5 group-hover:shadow-2xl transition-all duration-700">
                <div className="absolute inset-0 bg-premium-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-premium-black px-8 py-4 rounded-full font-outfit font-medium text-lg flex items-center gap-2"
                  >
                    View Case Study <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  </motion.button>
                </div>
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Project Info (Desktop) */}
              <div className="hidden lg:grid grid-cols-12 gap-8 mt-12 items-start">
                <div className="col-span-4">
                  <h3 className="text-5xl font-fraunces font-bold text-premium-black leading-tight mb-6">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-sm font-outfit font-medium text-premium-gray uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <div className="col-span-4">
                  <p className="text-xl text-premium-gray font-outfit font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="col-span-4 flex flex-col items-end gap-6">
                  <div className="flex flex-wrap justify-end gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-sm font-outfit text-premium-black border border-premium-gray/20 px-4 py-2 rounded-full">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.repoLink && (
                      <a href={project.repoLink} className="text-premium-black hover:text-accent-red font-outfit font-medium transition-colors">GitHub</a>
                    )}
                    {project.demoLink && (
                      <a href={project.demoLink} className="text-premium-black hover:text-accent-red font-outfit font-medium transition-colors">Live Demo</a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;