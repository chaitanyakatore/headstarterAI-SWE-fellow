import React from "react";
import ProjectCard from "./ProjectCard";
import projectImg1 from "../assets/projectImg1.png";
import projectImg2 from "../assets/projectImg2.png";
import projectImg3 from "../assets/projectImg3.png";
import projectImg4 from "../assets/projectImg4.png";

const ProjectsSection = () => {
  const projects = [
    {
      imageSrc: projectImg4,
      title: "Design Metrics",
      description:
        "Microservice application for the Designer and User where user can give feedback for the particular design and designer can do analysis for that",
      techStack: [
        "Typescript",
        "React",
        "Express",
        "Nodejs",
        "MongoDB",
        "Tailwind",
      ],
      repoLink: "https://github.com/chaitanyakatore/CAPSTONE_PROJECT",
    },
    {
      imageSrc: projectImg1,
      title: "DocAssist",
      description:
        "The Doctor Patient Portal is an advanced Java web project designed to managing appointments, patient records, and medical consultations. It is competely java based project",
      techStack: ["Java", "Spring-boot", "JSP", "Serverlet", "SQL"],
      repoLink: "https://github.com/chaitanyakatore/DocAssist",
    },
    {
      imageSrc: projectImg2,
      title: "RentUp",
      description:
        "Built a RentUp website with React.js, showcasing a static yet dynamic property search interface. The site features a responsive design with Bootstrap 5 and FontAwesome, providing a seamless user experience for browsing and viewing property listings.",
      techStack: ["React", "Docker", "Tailwind", "CSS"],
      repoLink: "https://funny-daffodil-350bc9.netlify.app",
    },
    {
      imageSrc: projectImg3,
      title: "VideoSTube",
      description:
        "Developed a YouTube Clone that fetches real-time data, replicating core features of the YouTube platform. This project uses React.js for the front end to provide dynamic video browsing and search functionalities. The application is containerized with Docker, ensuring consistent environments and easy deployment.",
      techStack: ["React", "Docker", "API", "Tailwind", "Ci/CD"],
      repoLink: "https://youtubeclonebyck.netlify.app",
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
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
