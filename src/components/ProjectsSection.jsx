import React from "react";
import ProjectArticle from "./ProjectArticle";
import { projects } from "../../data";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-11/12 xl:w-9/12 p-8 text-center flex flex-col items-center gap-4"
    >
      <h2 className="text-white text-4xl tracking-widest font-semibold">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectArticle key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
