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
    <section id="projects" className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center p-4 mb-6 rounded-2xl bg-gradient-to-r from-red-50 to-red-100 shadow-inner"
            whileHover={{ rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <SparklesIcon className="h-8 w-8 text-red-600" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative solutions that blend cutting-edge technology with exceptional user experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Project Card */}
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-start`}>
                {/* Project Info */}
                <div className="w-full lg:w-1/2 lg:sticky lg:top-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-red-50 to-red-100 text-red-600">
                      {project.status}
                    </span>
                    {project.repoLink && (
                      <a 
                        href={project.repoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors flex items-center gap-1"
                      >
                        <CodeBracketIcon className="h-4 w-4" />
                        Code
                      </a>
                    )}
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors flex items-center gap-1"
                      >
                        <GlobeAltIcon className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {project.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="text-sm px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2.5 py-1 rounded-full bg-white border border-gray-200 text-gray-700 shadow-inner"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Images */}
                <div className="w-full lg:w-1/2">
                  <div className="grid grid-cols-12 gap-4 lg:gap-6">
                    {/* Main Large Image */}
                    <motion.div 
                      className="col-span-12 lg:col-span-8 relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-red-50 via-gray-50 to-blue-50"
                      whileHover={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="aspect-[4/3]">
                        <img
                          src={project.images[0]}
                          alt={`${project.title} main view`}
                          className="w-full h-full object-contain p-3 transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-white/5 pointer-events-none"></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <button className="text-white bg-black/80 hover:bg-black px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2">
                          <EyeIcon className="h-4 w-4" />
                          View Project
                        </button>
                      </div>
                    </motion.div>
                    
                    {/* Two Smaller Images Stack */}
                    <div className="col-span-12 lg:col-span-4 grid grid-cols-1 gap-4 lg:gap-6">
                      {project.images.slice(1).map((image, imageIndex) => (
                        <motion.div 
                          key={imageIndex}
                          className="relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-blue-50 via-gray-50 to-red-50"
                          whileHover={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <div className="aspect-square">
                            <img
                              src={image}
                              alt={`${project.title} detail ${imageIndex + 1}`}
                              className="w-full h-full object-contain p-3 transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-white/5 pointer-events-none"></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator Line (except for last item) */}
              {index !== projects.length - 1 && (
                <div className="absolute bottom-[-64px] left-0 right-0 flex justify-center">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;