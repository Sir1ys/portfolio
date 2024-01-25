import CSS from "./src/images/front-end/CSS.png";
import HTML from "./src/images/front-end/HTML.png";
import JS from "./src/images/front-end/JS.png";
import MUI from "./src/images/front-end/MUI.png";
import React from "./src/images/front-end/React.jpg";
import ReactNative from "./src/images/front-end/ReactNative.jpg";
import Redux from "./src/images/front-end/Redux.jpg";
import Sass from "./src/images/front-end/Sass.png";
import Tailwind from "./src/images/front-end/Tailwind.png";

import Axios from "./src/images/back-end/Axios.png";
import Express from "./src/images/back-end/Express.jpg";
import Firebase from "./src/images/back-end/Firebase.png";
import Jest from "./src/images/back-end/Jest.png";
import MongoDB from "./src/images/back-end/MongoDB.jpg";
import NodeJs from "./src/images/back-end/NodeJs.jpg";
import PSQL from "./src/images/back-end/PSQL.png";
import ValidateJS from "./src/images/back-end/ValidateJS.png";

import CloudFlare from "./src/images/others/CloudFlare.png";
import Figma from "./src/images/others/Figma.jpg";
import Git from "./src/images/others/Git.png";
import GitHub from "./src/images/others/GitHub.png";
import Netlify from "./src/images/others/Netlify.png";

import Northcoders from "./src/images/education/northcoders.jpeg";

export const bio = {
  name: "Oleksandr Korovii",
  roles: ["Full Stack Developer"],
  description:
    "Driven by ambition and a deep passion for working with computers, I've taken proactive measures to pivot my career path towards becoming a developer. My progress and achievements since embarking on this tech journey highlight my potential, fueling my motivation to persistently learn and expand my skills. Engaging in paired programming, I adeptly followed Agile ethodologies and embraced Test-Driven Development (TDD) as integral components of my practical experience.",
  github: "https://github.com/Sir1ys",
  resume:
    "https://drive.google.com/file/d/1MG2F8FYyK2SSfSTwDHJW5aiQyi2d-Sy5/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/oleksandr-korovii-7b293a229/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image: React,
      },
      {
        name: "React Native",
        image: ReactNative,
      },
      {
        name: "JavaScript",
        image: JS,
      },
      {
        name: "Redux",
        image: Redux,
      },
      {
        name: "Material UI",
        image: MUI,
      },
      {
        name: "Tailwind CSS",
        image: Tailwind,
      },
      {
        name: "Sass",
        image: Sass,
      },
      {
        name: "CSS",
        image: CSS,
      },
      {
        name: "HTML",
        image: HTML,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: NodeJs,
      },
      {
        name: "Express Js",
        image: Express,
      },
      {
        name: "Jest",
        image: Jest,
      },
      {
        name: "Postgresql",
        image: PSQL,
      },
      {
        name: "MongoDB",
        image: MongoDB,
      },
      {
        name: "Firebase",
        image: Firebase,
      },
      {
        name: "Axios",
        image: Axios,
      },
      {
        name: "Validate.js",
        image: ValidateJS,
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: Git,
      },
      {
        name: "GitHub",
        image: GitHub,
      },
      {
        name: "Netlify",
        image: Netlify,
      },
      {
        name: "Figma",
        image: Figma,
      },
      {
        name: "Cloudflare",
        image: CloudFlare,
      },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: Northcoders,
    school: "Northcoders, Manchester",
    date: "Aug 2023 - Nov 2023",
    desc: "While at Northcoders, I practiced paired programming with Agile methodologies. I gained modern software development skills through collaborative coding, iterative development, and a test-driven approach in web application development. Proficient in constructing web servers, I effectively worked with various databases. Additionally, I mastered the React framework, utilizing its features adeptly.",
  },
];

export const projects = [
  {
    id: 0,
    title: "Collab Hub",
    date: "Nov 2023 - Jan 2024",
    description:
      "a collaborative project with a friend aimed at addressing the challenge developers face in finding the right team members for their projects.",
    image:
      "https://drive.google.com/file/d/1xj5buHWTI2v9I5tUNaMq4m5AxIIbxV33/view?usp=drive_link",
    tags: {
      backEnd: [
        "Axios",
        "Postgresql",
        "Node Js",
        "Express Js",
        "Jest",
        "Javascript",
        "TypeScript",
      ],
      frontEnd: ["React", "TypeScript", "Tailwind", "Axios"],
    },
    category: "back-end & front-end",
    github_be: "https://github.com/JDean8/collab-hub-be",
    github_fe: "https://github.com/Sir1ys/collab-hub-fe",
    webapp_be: "https://collub-hub.onrender.com/api/users",
    webapp_fe: "https://collub-hub.onrender.com/api/users",
    stage: "in progress",
  },
  {
    id: 1,
    title: "Junket",
    date: "Oct 2023 - Nov 2023",
    description:
      "a group project to address the challenge of solo travel. Our aim was to create a mobile app that makes it easier to find friends and events based on your destination.",
    image:
      "https://drive.google.com/file/d/1T3tzTIemU2LuNq4uhT2Ma4KVlrJ60YcF/view?usp=drive_link",
    tags: {
      backEnd: [
        "Supertest",
        "Validate.js",
        "Axios",
        "Postgresql",
        "Node Js",
        "Express Js",
        "Jest",
        "Javascript",
      ],
      frontEnd: ["React Native", "Expo Go", "Axios", "Firebase"],
    },
    category: "back-end & front-end",
    github_be: "https://github.com/JDean8/codecrafters-be",
    github_fe: "https://codecrafters-9qyn.onrender.com/api",
    webapp_be: "https://github.com/Sir1ys/codecrafters-fe",
    webapp_fe: "https://northcoders.com/project-phase/junket/",
    stage: "finished",
  },
  {
    id: 2,
    title: "Nc-News",
    date: "Sep 2023 - Oct 2023",
    description:
      "a web application that I developed independently. It is designed for individuals to read articles and engage in discussions with others.",
    image:
      "https://drive.google.com/file/d/1jLvbuVXpRF7NVowiFsIQj9H8vtthyg7Z/view?usp=drive_link",
    tags: {
      backEnd: [
        "Supertest",
        "Axios",
        "Postgresql",
        "Node Js",
        "Express Js",
        "Jest",
        "Javascript",
      ],
      frontEnd: ["React", "MUI", "Axios", "Sass"],
    },
    category: "back-end & front-end",
    github_be: "https://github.com/Sir1ys/back-end-news",
    github_fe: "https://back-end-news.onrender.com/api",
    webapp_be: "https://github.com/Sir1ys/fe-nc-news",
    webapp_fe: "https://calm-gelato-6eb82e.netlify.app/",
    stage: "finished",
  },
];
