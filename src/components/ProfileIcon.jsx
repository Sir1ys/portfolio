import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function (props) {
  const { text, link } = props;
  let componentToRender;

  if (text === "GitHub") {
    componentToRender = <GitHubIcon fontSize="large" />;
  } else if (text === "CV") {
    componentToRender = <ArticleIcon fontSize="large" />;
  } else {
    componentToRender = <LinkedInIcon fontSize="large" />;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-26 md:w-32 p-2 text-white hover:bg-emerald-700 active:bg-emerald-900 flex items-center justify-center gap-2 border border-emerald-300 rounded-xl cursor-pointer"
    >
      {componentToRender}
      {text}
    </a>
  );
}
