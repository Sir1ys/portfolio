import React from "react";
import ProfileIcon from "./ProfileIcon";
import { icons } from "./AboutSection";
import { links } from "./Header";

export default function Footer() {
  return (
    <div className="bg-emerald-800 border-t-4 border-emerald-400 flex flex-col items-center justify-center gap-6 p-4">
      <h2 className="font-bold text-3xl text-emerald-100 tracking-widest">
        Oleksandr Korovii
      </h2>
      <ul className="flex gap-4">
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
      <span className="flex gap-4">
        {icons.map((icon) => (
          <ProfileIcon key={icon.text} {...icon} />
        ))}
      </span>
    </div>
  );
}
