import React from "react";

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
  return (
    <article className="flex flex-col items-center justify-between gap-2 text-center text-emerald-50 border rounded-lg cursor-pointer transition duration-500 ease-in-out transform hover:scale-105">
      <img
        className="w-full h-64 rounded-lg"
        src={image}
        alt={`The picture of ${title} project.`}
      />
      <h3 className="font-semibold tracking-wider text-xl">{title}</h3>
      <span>{date}</span>
      <span className="text-lime-50 p-2">{description}</span>
    </article>
  );
}
