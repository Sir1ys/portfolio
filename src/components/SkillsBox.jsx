import React from "react";

export default function SkillsBox({ skillsInfo, styles }) {
  const { title, skills } = skillsInfo;
  return (
    <div
      className={`${styles} p-6 flex flex-col justify-start items-center gap-6 border-2 border-emerald-300 rounded-3xl shadow-xl`}
    >
      <h3 className="font-medium text-white text-3xl tracking-wider">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-4 ">
        {skills.map((skill) => {
          return (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-1"
            >
              <span className="text-lime-50">{skill.name}</span>
              <span
                key={skill.name}
                className="w-20 h-20 p-4 bg-lime-50 flex flex-col justify-center items-center border-2 border-emerald-300 rounded-md hover:scale-105 cursor-pointer"
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
