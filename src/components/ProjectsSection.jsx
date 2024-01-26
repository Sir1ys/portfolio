import React from "react";
import ProjectArticle from "./ProjectArticle";
import { projects } from "../../data";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-11/12 xl:w-9/12 text-center flex items-center justify-between gap-4 p-8 flex-col"
    >
      <h2 className="font-semibold text-white text-4xl tracking-widest text-center">
        Projects
      </h2>

      <div className="flex items-center flex-wrap flex-col xl:flex-row gap-4">
        {projects.map((project) => (
          <ProjectArticle key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
