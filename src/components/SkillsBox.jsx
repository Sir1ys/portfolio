import React from "react";

export default function SkillsBox({ skillsInfo, styles }) {
  const { title, skills } = skillsInfo;
  return (
    <div
      className={`${styles} flex flex-col justify-start items-center gap-6 bg-emerald-900 rounded-3xl p-8 border-2 border-emerald-300 shadow-xl`}
    >
      <h3 className="font-medium text-white text-2xl tracking-wider">
        {title}
      </h3>
      <div className="flex gap-4 flex-wrap justify-center items-center">
        {skills.map((skill) => {
          return (
            <div
              key={skill.name}
              className="flex flex-col justify-center items-center gap-2 p-2 border w-28 h-28 rounded-3xl hover:scale-105 cursor-pointer"
            >
              <span className="text-emerald-100">{skill.name}</span>
              <img
                src={skill.image}
                alt={`This is a picture of ${skill.name} icon`}
                className="w-16 h-16 p-1 bg-emerald-700 rounded-md"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
