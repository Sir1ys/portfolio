import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function (props) {
  const { text, link } = props;
  let componentToRender;

  if (text === "GitHub") {
    componentToRender = <GitHubIcon fontSize="large" className="text-white" />;
  } else if (text === "CV") {
    componentToRender = <ArticleIcon fontSize="large" className="text-white" />;
  } else {
    componentToRender = (
      <LinkedInIcon fontSize="large" className="text-white" />
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-32 p-2 flex items-center justify-center gap-2 text-white border border-emerald-300 cursor-pointer rounded-xl hover:bg-emerald-700 active:bg-emerald-900"
    >
      {componentToRender}
      {text}
    </a>
  );
}
