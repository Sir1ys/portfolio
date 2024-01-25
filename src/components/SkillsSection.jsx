import React from "react";
import SkillsBox from "./SkillsBox";
import { skills } from "../../data";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-11/12 xl:w-8/12 text-center p-8"
    >
      <h2 className="font-semibold text-white text-4xl tracking-widest mb-4">
        Skills
      </h2>
      <div className="flex flex-wrap gap-8 flex-col xl:flex-row">
        {skills.map((skillsInfo, index) => {
          return (
            <SkillsBox
              key={index}
              skillsInfo={skillsInfo}
              styles={
                (skillsInfo.title === "Frontend") |
                (skillsInfo.title === "Backend")
                  ? "flex-1"
                  : "basis-full"
              }
            />
          );
        })}
      </div>
    </section>
  );
}
