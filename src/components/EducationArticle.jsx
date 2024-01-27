import React from "react";

export default function EducationArticle({ id, img, school, date, desc }) {
  return (
    <article
      key={id}
      className="p-4 flex flex-col gap-4 border-r-2 border-emerald-300 text-emerald-50"
    >
      <span className="flex items-center gap-4">
        <img
          src={img}
          alt={`The picture of ${school}`}
          className="w-24 rounded-full"
        />
        <span>
          <h3 className="text-xl font-semibold">{school}</h3>
          <h4 className="text-lg">{date}</h4>
        </span>
      </span>
      <span className="text-lime-50 text-lg">{desc}</span>
    </article>
  );
}
