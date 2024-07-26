// src/components/ProjectCard.jsx
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ProjectCard = ({ imageSrc, title, description, techStack, repoLink }) => {
  return (
    <Card className="w-full max-w-full lg:max-w-[calc(100%-1rem)] shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
      <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
        <CardHeader floated={false} color="blue-gray">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </CardHeader>
        <CardBody className="p-6">
          <Typography
            variant="h5"
            color="blue-gray"
            className="font-bold text-xl mb-2"
          >
            {title}
          </Typography>
          <Typography color="gray" className="mb-4">
            {description}
          </Typography>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardBody>
        <CardFooter className="pt-4 bg-gray-100">
          <Button
            size="lg"
            fullWidth
            className="bg-gray-200 text-black hover:bg-gray-600 hover:text-white w-4/5 h-12 max-w-[200px]"
            onClick={() => window.open(repoLink, "_blank")}
          >
            Link To Project
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProjectCard;
