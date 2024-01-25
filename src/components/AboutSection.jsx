import React from "react";
import { bio } from "../../data";
import MyPicture from "../images/about/portfolio.jpg";
import ProfileIcon from "./ProfileIcon";

export const icons = [
  { text: "LinkedIn", link: bio.linkedin },
  { text: "CV", link: bio.resume },
  { text: "GitHub", link: bio.github },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-11/12 xl:w-8/12 text-center flex items-center justify-between gap-4 p-8 flex-col md:flex-row border-b-4 border-emerald-700"
    >
      <div className="flex-1 order-last md:order-first flex flex-col gap-4 text-center md:text-left">
        <h2 className="text-emerald-50 font-bold text-5xl tracking-wider">
          {bio.name}
        </h2>
        <h3 className="text-emerald-100 font-bold text-3xl">
          I'm a <span className="text-emerald-300">{bio.roles}</span>
        </h3>
        <span className="text-lime-50 text-lg">{bio.description}</span>
        <span className="flex items-center justify-center md:justify-start gap-2">
          {icons.map((icon) => (
            <ProfileIcon key={icon.text} {...icon} />
          ))}
        </span>
      </div>
      <img
        src={MyPicture}
        alt="This is the picture of me."
        className="w-72 h-72 rounded-full shadow-2xl border-2 border-emerald-50"
      />
    </section>
  );
}
