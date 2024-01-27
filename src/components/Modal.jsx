import { skills } from "../../data";

export default function Modal({ active, setActive, project }) {
  const { title, date, description, image, skills: prSkills, links } = project;

  const allSkillsArrays = skills.map((skillList) => skillList.skills);

  const allSkills = allSkillsArrays.flat();

  const projectSkills = allSkills.filter((skill) =>
    prSkills.includes(skill.name)
  );

  return (
    <div
      className={`z-50 h-screen w-screen bg-emerald-950 fixed top-0 left-0 flex items-center justify-center opacity-0 pointer-events-none duration-200 ${
        !active ? "scale-0" : "scale-100 opacity-100 pointer-events-auto"
      }`}
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className="rounded-2xl bg-gray-50 transition-all delay-200 w-10/12 md:w-6/12 border-2 border-emerald-500"
        onClick={(e) => e.stopPropagation()}
      >
        <article
          className="flex flex-col items-center justify-between gap-2 text-center text-emerald-800 rounded-2xl transition duration-500 ease-in-out transform"
          onClick={() => setActive(true)}
        >
          <img
            className="rounded-2xl"
            src={image}
            alt={`The picture of ${title} project.`}
          />
          <div className="flex flex-col justify-center items-center gap-3 p-4">
            <h3 className="font-semibold tracking-wider text-2xl">{title}</h3>
            <span>{date}</span>
            <ul className="flex gap-2 flex-wrap justify-center items-center">
              {projectSkills.map((skill) => {
                return (
                  <li
                    key={skill.name}
                    className="flex flex-row justify-center items-center p-4 border-2 border-emerald-500 w-16 h-16 rounded-md  cursor-pointer bg-gray-50"
                  >
                    {skill.image}
                  </li>
                );
              })}
            </ul>
            <span>{description}</span>
            <ul className="flex flex-row flex-wrap justify-center items-center gap-5">
              {links.map((link) => {
                return (
                  <li key={link.name} className="text-sm md:text-md">
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer text-sky-600 p-2 border rounded-xl border-sky-600 hover:bg-sky-200 hover:text-sky-800"
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}
