import React from "react";

export default function EducationArticle({ id, img, school, date, desc }) {
  return (
    <article
      key={id}
      className="flex flex-col gap-4 p-4 border-r-2 border-emerald-300 text-emerald-50"
    >
      <span className="flex gap-4 items-center">
        <img
          src={img}
          alt={`The picture of ${school}`}
          className="w-24 rounded-full"
        />
        <span>
          <h3 className="font-semibold text-xl">{school}</h3>
          <h4 className="text-lg">{date}</h4>
        </span>
      </span>
      <span className="text-lime-50 text-lg">{desc}</span>
    </article>
  );
}
