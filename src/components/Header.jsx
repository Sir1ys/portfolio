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
    text: "Projects",
    path: "#projects",
  },
  {
    text: "Education",
    path: "#education",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full py-10 flex justify-center  bg-emerald-800 border-b-4 border-emerald-400 z-50">
      <div className="w-11/12 xl:w-9/12 px-8 md:flex md:flex-row md:justify-between">
        <div className="flex items-center gap-2 text-emerald-100 hover:text-emerald-200">
          <PublicIcon />
          <a href={links[0].path} className="text-2xl font-semibold">
            Portfolio
          </a>
        </div>
        <nav>
          <span
            className="absolute right-8 top-9 cursor-pointer md:hidden text-emerald-100"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {!open ? (
              <MenuIcon fontSize="large" />
            ) : (
              <CloseIcon fontSize="large" />
            )}
          </span>
          <ul
            className={`w-full md:w-auto md:pl-0 pl-9 absolute md:static left-0 flex gap-8 bg-emerald-50 md:bg-inherit transition-all duration-300 ease-in ${
              open
                ? "h-screen mt-10 pt-4 top-25 bg-emerald-900 opacity-100 flex-col border-y-4 border-emerald-700 overflow-hidden "
                : "left-[-490px] opacity-0"
            } md:opacity-100 md:border-none`}
          >
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className={
                    "text-emerald-100 hover:text-emerald-200 text-2xl font-semibold hover:underline hover:underline-offset-4"
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
