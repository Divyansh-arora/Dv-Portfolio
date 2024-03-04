// Enter all your detials in this file
// Logo images
import logogradient from "./assets/Personal/dv.png";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/Personal/IMG_20240302_193817-modified.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
// import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
// import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
// import projectImage2 from "./assets/projects/project2.jpg";
// import projectImage3 from "./assets/projects/project3.jpg";
// import projectImage4 from "./assets/projects/project4.jpg";
// import projectImage5 from "./assets/projects/project5.jpg";
// import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Divyansh Arora",
  tagline: "I build things",
  img: profile,
  about: `I'm a Product Developer at Rezolve.ai, where I focus on building user-friendly software. I specialize in front-end development using React and back-end development with Express.js and Node.js. For databases, I work with PostgreSQL. With 2.6 years of experience and a BTech in Computer Science, I bring both technical skills and practical knowledge to my projects.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/divyansh-arora-b4732218b",
  github: "https://github.com/Divyansh-arora",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Product Developer",
    Company: `Rezolve.ai`,
    Location: "Dehradun",
    Type: "Full Time",
    Duration: "Sep 2021 - Present",
  }
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Computer Science",
    Company: "Roorkee College of Engineering, Roorkee",
    Location: "Roorkee",
    Type: "Full Time",
    Duration: "2017-21",
  },
  {
    Position: "Senior Secondary",
    Company: `J.P Academy`,
    Location: "Meerut",
    Type: "Full Time",
    Duration: "2016-17",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Website Landing Page",
    image: projectImage1,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Divyansh-arora/Squbix-Ui",
  }
];

// Enter your Contact Details here
export const contactDetails = {
  email: "divyansharroraa@gmail.com",
  phone: "+91 8126546521",
};
