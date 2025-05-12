import React, { useState } from "react";
import {
  CodeBracketIcon,
  EyeIcon,
  GlobeAltIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const ProjectCard = ({
  imageSrc,
  title,
  description,
  techStack,
  repoLink,
  demoLink,
  projectType,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full max-w-[400px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`
          relative 
          h-full 
          bg-white 
          rounded-2xl 
          overflow-hidden 
          shadow-md 
          hover:shadow-xl 
          transition-all 
          duration-300 
          border 
          border-gray-100
          group
          ${isHovered ? "ring-2 ring-red-100" : ""}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Type Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span
            className={`
              px-3 py-1 
              text-xs font-medium 
              rounded-full 
              backdrop-blur-sm
              ${
                projectType === "Open Source"
                  ? "bg-green-100/80 text-green-800"
                  : projectType === "Client Work"
                  ? "bg-blue-100/80 text-blue-800"
                  : "bg-gray-100/80 text-gray-800"
              }
            `}
          >
            {projectType || "Project"}
          </span>
        </div>

        {/* Image Header with Overlay */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className={`
              w-full h-full object-cover 
              transition-transform duration-700 
              ${isHovered ? "scale-105" : "scale-100"}
            `}
          />
          {/* Gradient Overlay */}
          <div
            className={`
              absolute inset-0 
              bg-gradient-to-t from-black/30 to-transparent 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-300
            `}
          />
          
          {/* Action Buttons */}
          <div
            className={`
              absolute inset-0 
              flex items-center justify-center gap-4 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-300
            `}
          >
            {repoLink && (
              <motion.a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3 bg-white rounded-full shadow-lg
                  hover:bg-gray-50 transition
                  flex items-center gap-1
                "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CodeBracketIcon className="h-5 w-5 text-gray-700" />
                <span className="text-xs font-medium">Code</span>
              </motion.a>
            )}
            {demoLink && (
              <motion.a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3 bg-white rounded-full shadow-lg
                  hover:bg-gray-50 transition
                  flex items-center gap-1
                "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GlobeAltIcon className="h-5 w-5 text-gray-700" />
                <span className="text-xs font-medium">Live</span>
              </motion.a>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="
            mb-2 text-xl font-bold text-gray-900 
            group-hover:text-red-600 transition-colors
          ">
            {title}
            {isHovered && (
              <ArrowTopRightOnSquareIcon className="inline-block w-4 h-4 ml-1 text-gray-400" />
            )}
          </h3>

          <p className="
            mb-4 text-sm leading-relaxed text-gray-600
            group-hover:text-gray-700 transition-colors
          ">
            {description}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="
                  px-2.5 py-1 
                  bg-gradient-to-br from-gray-50 to-gray-100
                  text-gray-700 text-xs font-medium 
                  rounded-full 
                  border border-gray-200
                  shadow-inner
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="
              w-full py-3 px-4
              bg-gradient-to-r from-gray-50 to-gray-100
              text-gray-800 font-medium
              rounded-lg
              border border-gray-200
              shadow-sm
              hover:shadow-md
              transition-all
              flex items-center justify-center gap-2
            "
            onClick={() => window.open(repoLink || demoLink, "_blank")}
          >
            <EyeIcon className="h-5 w-5" />
            View Project
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;