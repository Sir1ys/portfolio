import React, { useState } from "react";
import PublicIcon from "@mui/icons-material/Public";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const links = [
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
    <header className="p-10 md:flex md:flex-row md:justify-between border-b-4 border-emerald-400 bg-emerald-50">
      <div className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800">
        <PublicIcon />
        <a href={links[0].path} className="font-semibold text-2xl">
          Portfolio
        </a>
      </div>
      <nav>
        <div
          className="absolute right-8 top-9 cursor-pointer md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {!open ? (
            <MenuIcon fontSize="large" className="text-emerald-800" />
          ) : (
            <CloseIcon fontSize="large" className="text-emerald-800" />
          )}
        </div>
        <ul
          className={`flex gap-8 absolute md:static bg-emerald-50 md:bg-inherit md:z-auto z-[2] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            open
              ? "top-20 opacity-100 border-b-4 border-emerald-700 h-screen overflow-hidden flex-col mt-4"
              : "left-[-490px] opacity-0"
          } md:opacity-100 md:border-none`}
        >
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className={
                  "text-emerald-600 font-semibold text-2xl hover:text-emerald-800 hover:underline hover:underline-offset-4"
                }
              >
                <a href={link.path}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
