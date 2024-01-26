import React from "react";

export default function SkillsBox({ skillsInfo, styles }) {
  const { title, skills } = skillsInfo;
  return (
    <div
      className={`${styles} flex flex-col justify-start items-center gap-6 rounded-3xl p-8 border-2 border-emerald-300 shadow-xl`}
    >
      <h3 className="font-medium text-white text-3xl tracking-wider">
        {title}
      </h3>
      <div className="flex gap-4 flex-wrap justify-center items-center">
        {skills.map((skill) => {
          return (
            <div key={skill.name} className="flex flex-col gap-1 items-center justify-center">
              <span className="text-lime-50">{skill.name}</span>
              <span
                key={skill.name}
                className="flex flex-col justify-center items-center p-4 border-2 border-emerald-300 w-20 h-20 rounded-md hover:scale-105 cursor-pointer bg-lime-50"
              >
                {skill.image}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
