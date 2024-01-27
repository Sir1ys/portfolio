import CloseIcon from "@mui/icons-material/Close";

export default function Modal({ active, setActive, project }) {
  const { title, date, description, image, skills, links } = project;

  return (
    <div
      className={`z-50 fixed inset-0 flex items-center justify-center bg-emerald-950 opacity-0 pointer-events-none duration-200 ${
        !active ? "scale-0" : "scale-100 opacity-100 pointer-events-auto"
      }`}
      onClick={() => setActive(false)}
    >
      <div className="relative bg-gray-50 border-2 border-emerald-500 rounded-2xl transition-all delay-200 w-10/12 md:w-6/12 max-h-full overflow-auto">
        <span
          onClick={() => setActive(false)}
          className="absolute top-1 right-1 p-1 bg-emerald-900 border-2 border-emerald-300 text-white rounded-xl cursor-pointer z-50"
        >
          <CloseIcon fontSize="large" />
        </span>
        <div
          className="flex flex-col items-center gap-2 text-center text-emerald-800 rounded-2xl p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            className="rounded-2xl"
            src={image}
            alt={`The picture of ${title} project.`}
          />
          <h3 className="font-semibold tracking-wider text-2xl">{title}</h3>
          <span>{date}</span>
          <ul className="flex gap-2 flex-wrap justify-center items-center">
            {skills.map((skill) => (
              <li
                key={skill}
                className="w-32 p-1 border-2 border-emerald-500 rounded-md cursor-pointer"
              >
                {skill}
              </li>
            ))}
          </ul>
          <span>{description}</span>
          <ul className="flex flex-row flex-wrap justify-center items-center gap-5">
            {links.map((link) => (
              <li key={link.name} className="text-sm md:text-md">
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-sky-600 hover:text-sky-800 border border-sky-600 rounded-xl hover:bg-sky-200 cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
