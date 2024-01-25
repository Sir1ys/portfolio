import React from "react";
import { education } from "../../data";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="flex flex-col justify-center items-center gap-4 p-8"
    >
      <h2 className="font-semibold text-white text-4xl tracking-widest text-center">
        Education
      </h2>
      {education.map((info) => {
        return (
          <div className="flex flex-col gap-4 p-4 w-11/12 xl:w-8/12 border-r-2 border-emerald-300  text-emerald-50">
            <span className="flex gap-4 items-center">
              <img
                src={info.img}
                alt={`The picture of ${info.school}`}
                className="w-24 rounded-full"
              />
              <span>
                <h3 className="font-semibold text-xl">{info.school}</h3>
                <h4 className="text-lg">{info.date}</h4>
              </span>
            </span>
            <span className="text-lime-50 text-lg">{info.desc}</span>
          </div>
        );
      })}
    </section>
  );
}
