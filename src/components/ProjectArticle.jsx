import React, { useState } from "react";
import Modal from "./Modal";

export default function ProjectArticle({
  title,
  date,
  description,
  image,
  skills,
  category,
  github_be,
  github_fe,
  webapp_be,
  webapp_fe,
  stage,
}) {
  const [active, setActive] = useState(false);

  return (
    <>
      <article
        className="flex flex-col items-center justify-between gap-2 text-center text-emerald-50 border border-emerald-300 rounded-lg cursor-pointer transition duration-500 ease-in-out transform hover:scale-105 z-1"
        onClick={() => setActive(true)}
      >
        <img
          className="w-full h-64 rounded-lg"
          src={image}
          alt={`The picture of ${title} project.`}
        />
        <h3 className="font-semibold tracking-wider text-xl">{title}</h3>
        <span>{date}</span>
        <span className="text-lime-50 p-2">{description}</span>
      </article>

      <Modal active={active} setActive={setActive}>
        <p>Hi</p>
      </Modal>
    </>
  );
}
