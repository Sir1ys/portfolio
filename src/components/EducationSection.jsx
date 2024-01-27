import React from "react";
import { education } from "../../data";
import EducationArticle from "./EducationArticle";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="w-11/12 xl:w-9/12 flex flex-col justify-center items-center gap-4 p-8"
    >
      <h2 className="font-semibold text-white text-4xl tracking-widest text-center">
        Education
      </h2>
      {education.map((info) => {
        return <EducationArticle key={info.id} {...info} />;
      })}
    </section>
  );
}
