import React, { useState } from "react";
import PublicIcon from "@mui/icons-material/Public";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const links = [
  {
    text: "About",
    path: "#about",
  },
  {
    text: "Skills",
    path: "#skills",
  },
  {
    text: "Education",
    path: "#education",
  },
  {
    text: "Projects",
    path: "#projects",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-10 bg-emerald-800 border-b-4 border-emerald-400 flex justify-center">
      <div className="w-11/12 xl:w-9/12 px-8 md:flex md:flex-row md:justify-between">
        <div className="flex items-center gap-2 text-emerald-100 hover:text-emerald-200">
          <PublicIcon />
          <a href={links[0].path} className="font-semibold text-2xl">
            Portfolio
          </a>
        </div>
        <nav>
          <span
            className="absolute right-8 top-9 cursor-pointer md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {!open ? (
              <MenuIcon fontSize="large" className="text-emerald-100" />
            ) : (
              <CloseIcon fontSize="large" className="text-emerald-100" />
            )}
          </span>
          <ul
            className={`flex gap-8 absolute md:static bg-emerald-50 md:bg-inherit md:z-auto z-[2] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
              open
                ? "bg-emerald-900 top-25 opacity-100 border-y-4 border-emerald-700 h-screen overflow-hidden flex-col mt-10 pt-4"
                : "left-[-490px] opacity-0"
            } md:opacity-100 md:border-none`}
          >
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className={
                    "font-semibold text-2xl text-emerald-100 hover:text-emerald-200 hover:underline hover:underline-offset-4"
                  }
                  onClick={() => setOpen(false)}
                >
                  <a href={link.path}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
