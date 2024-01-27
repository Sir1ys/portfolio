import React from "react";
import SkillsBox from "./SkillsBox";
import { skills } from "../../data";

export default function SkillsSection() {
  return (
    <section id="skills" className="w-11/12 xl:w-9/12 text-center p-8">
      <h2 className="mb-4 text-white text-4xl font-semibold tracking-widest">
        Skills
      </h2>
      <div className="flex flex-wrap flex-col xl:flex-row  gap-8 ">
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
