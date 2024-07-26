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
        "The Doctor Patient Portal is an advanced Java web project designed to managing appointments, patient records, and medical consultations. It is competely java based project",
      techStack: ["Java", "Spring-boot", "JSP", "Serverlet", "SQL"],
    },
    {
      imageSrc: projectImg2,
      title: "RentUp",
      description:
        "Built a RentUp website with React.js, showcasing a static yet dynamic property search interface. The site features a responsive design with Bootstrap 5 and FontAwesome, providing a seamless user experience for browsing and viewing property listings.",
      techStack: ["React", "Docker", "Tailwind", "CSS"],
    },
    {
      imageSrc: projectImg3,
      title: "VideoSTube",
      description:
        "Developed a YouTube Clone that fetches real-time data, replicating core features of the YouTube platform. This project uses React.js for the front end to provide dynamic video browsing and search functionalities. The application is containerized with Docker, ensuring consistent environments and easy deployment.",
      techStack: ["React", "Docker", "API", "Tailwind", "Ci/CD"],
    },
    {
      imageSrc: projectImg4,
      title: "Expiry Tracker",
      description:
        "Created a barcode scanning app with real-time camera functionality and manual item addition features, using Firebase for authentication and MongoDB for data storage. Integrated Open Food Facts API for item information and ensured a responsive design for both mobile and desktop devices.",
      techStack: ["React", "Express", "Nodejs", "MongoDB", "Tailwind"],
    },
  ];

  return (
    <section id="projects" className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-100">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
