// import React from "react";
// import { techStackDetails } from "../Details";

// function Technologies() {
//   const {
//     html,
//     css,
//     js,
//     react,
//     redux,
//     tailwind,
//     bootstrap,
//     sass,
//     vscode,
//     git,
//     github,
//     npm,
//     postman,
//     figma,
//   } = techStackDetails;
//   return (
//     <main className="container mx-auto max-width pt-10 pb-20 ">
//       <section>
//         <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
//           Tech Stack
//         </h1>
//         <p className="text-content py-2 lg:max-w-3xl">
//           Technologies I've been working with recently
//         </p>
//       </section>
//       <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
//         <img src={html} title="html" alt="" />
//         <img src={css} title="CSS" alt="" />
//         <img src={js} title="JavaScript" alt="" />
//         <img src={react} title="React" alt="" />
//         <img src={redux} title="Redux" alt="" />
//         <img src={tailwind} title="Tailwind CSS" alt="" />
//         {/* <img src={bootstrap} title="Bootstrap" alt="" /> */}
//         {/* <img src={sass} title="SASS" alt="" /> */}
//       </section>
//       <section>
//         <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
//           Tools
//         </h1>
//       </section>
//       <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
//         <img src={vscode} title="Visual Studio Code" alt="" />
//         <img src={git} title="Git" alt="Git" />
//         <img src={github} title="Github" alt="Github" />
//         <img src={figma} title="Figma" alt="Figma" />
//         <img src={npm} title="NPM" alt="NPM" />
//         <img src={postman} title="Postman" alt="Postman" />
//       </section>
//     </main>
//   );
// }

// export default Technologies;


import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;

  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <TechItem src={html} title="HTML" />
        <TechItem src={css} title="CSS" />
        <TechItem src={js} title="JavaScript" />
        <TechItem src={react} title="React Js" />
        <TechItem src={redux} title="Redux" />
        <TechItem src={tailwind} title="Tailwind CSS" />
        {/* <TechItem src={bootstrap} title="Bootstrap" /> */}
        {/* <TechItem src={sass} title="SASS" /> */}
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <TechItem src={vscode} title="Visual Studio Code" />
        <TechItem src={git} title="Git" />
        <TechItem src={github} title="Github" />
        {/* <TechItem src={figma} title="Figma" /> */}
        <TechItem src={npm} title="NPM" />
        <TechItem src={postman} title="Postman" />
      </section>
    </main>
  );
}

// const TechItem = ({ src, title }) => (
//   <div className="flex items-center">
//     <img src={src} alt={title} title={title} className="mr-2" />
//     <span className="text-sm text-dark-heading dark:text-light-heading">{title}</span>
//   </div>
// );
const TechItem = ({ src, title }) => (
  <div className="flex flex-col items-center">
    <div className="h-20 overflow-hidden ">

    <img src={src} alt={title} title={title} className="h-full object-fit-fill " />
    </div>
    <div className="mt-3 text-center  text-sm text-dark-heading dark:text-light-heading">{title}</div>
  </div>
);




export default Technologies;
