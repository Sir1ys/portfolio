import React from "react";
import ProfileIcon from "./ProfileIcon";
import { icons } from "./AboutSection";

export default function Footer() {
  return (
    <div className="p-4 flex flex-col items-center justify-center gap-6 border-t-4 border-emerald-400">
      <h2 className="text-emerald-100 text-3xl font-bold tracking-widest">
        Oleksandr Korovii
      </h2>
      <span className="flex gap-4">
        {icons.map((icon) => (
          <ProfileIcon key={icon.text} {...icon} />
        ))}
      </span>
    </div>
  );
}
