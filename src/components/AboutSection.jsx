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
      className="w-11/12 xl:w-9/12 p-4 md:p-8 border-b-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center border-emerald-700"
    >
      <div className="flex-1 order-last md:order-first flex flex-col gap-4 text-center md:text-left">
        <h2 className="text-emerald-50 text-5xl font-bold tracking-wider">
          {bio.name}
        </h2>
        <h3 className="text-emerald-100 text-3xl font-bold">
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
        className="w-64 xl:w-72 h-64 xl:h-72 border-2 border-emerald-50 rounded-full shadow-2xl"
      />
    </section>
  );
}
