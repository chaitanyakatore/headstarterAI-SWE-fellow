// src/components/ProjectsSection.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import projectImg1 from "../assets/projectImg1.png";
import projectImg2 from "../assets/projectImg2.png";
import projectImg3 from "../assets/projectImg3.png";
import projectImg4 from "../assets/projectImg4.png";

const ProjectsSection = () => {
  const projects = [
    {
      imageSrc: projectImg1,
      title: "DocAssist",
      description:
        "The Doctor Patient Portal is an advanced Java web project designed to facilitate efficient interactions between doctors and patients. We can book apointement mange hospital mangement system",
      techStack: ["Java", "Spring-Boot", "SQL", "Servlet"],
      repoLink: "https://github.com/chaitanyakatore/DocAssist",
    },
    {
      imageSrc: projectImg2,
      title: "RentUp",
      description:
        "Built a RentUp website with React.js, showcasing a static yet dynamic property search interface. The site features a responsive design with Bootstrap 5 and FontAwesome, providing a seamless user experience for browsing and viewing property listings.",
      techStack: ["React", "Tailwind", "JavaScript"],
      repoLink:
        "https://github.com/chaitanyakatore/ReactProjects/tree/main/Real-estate-website-master",
    },
    {
      imageSrc: projectImg3,
      title: "Video-Stramer",
      description:
        "Developed a YouTube Clone using React.js that fetches real-time data for video content and search. Dockerized the app for consistent and streamlined deployment across different environments.",
      techStack: ["React", "Docker", "API", "Tailwind"],
      repoLink:
        "https://github.com/chaitanyakatore/ReactProjects/tree/main/youtube_clone",
    },
    {
      imageSrc: projectImg4,
      title: "Project 4",
      description:
        "Created a barcode scanning app with real-time camera functionality and manual item addition features, using Firebase for authentication and MongoDB for data storage. Integrated Open Food Facts API for item information and ensured a responsive design for both mobile and desktop devices.",
      techStack: ["React", "Express", "MongoDB", "Nodejs", "Tailwind"],
      repoLink: "https://github.com/chaitanyakatore/ExpiryTracker-client",
    },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-100">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
