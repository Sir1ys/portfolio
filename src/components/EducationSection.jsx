import React from "react";
import { education } from "../../data";
import EducationArticle from "./EducationArticle";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="p-8 w-11/12 xl:w-9/12 flex flex-col justify-center items-center gap-4"
    >
      <h2 className="text-white text-4xl font-semibold tracking-widest">
        Education
      </h2>
      {education.map((info) => {
        return <EducationArticle key={info.id} {...info} />;
      })}
    </section>
  );
}
