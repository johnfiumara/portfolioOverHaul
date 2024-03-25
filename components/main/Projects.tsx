import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="this website"
        />
        <ProjectCard
          src="#"
          title="get swole fun"
          description="exercise website to show api use and fetching from an external source."
        />
        <ProjectCard
          src="#"
          title="COMING SOON: Maine Meal Assistance"
          description="A non-profit volunteer site that also accepts donations coming soon to a browser near you"
        />
      </div>
    </div>
  );
};

export default Projects;
