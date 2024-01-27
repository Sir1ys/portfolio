import React, { useState } from "react";
import Modal from "./ProfileModal";

export default function ProjectArticle(project) {
  const { title, date, description, image } = project;
  const [active, setActive] = useState(false);

  return (
    <>
      <article
        className="flex flex-col items-center justify-between gap-2 text-center text-emerald-50 border border-emerald-300 rounded-lg cursor-pointer transition duration-500 ease-in-out transform hover:scale-105"
        onClick={() => setActive(true)}
      >
        <img
          className="w-full h-64 rounded-lg"
          src={image}
          alt={`The picture of ${title} project.`}
        />
        <h3 className="text-xl font-semibold tracking-wider">{title}</h3>
        <span>{date}</span>
        <span className="p-2 text-lime-50">{description}</span>
      </article>

      <Modal active={active} setActive={setActive} project={project} />
    </>
  );
}
