import React from "react";
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/html.svg",
    label: "HTML5",
    desc: "Web Structure",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/java.svg",
    label: "Java",
    desc: "Programing Language",
  },
  {
    imgSrc: "/images/vscode.svg",
    label: "VS Code",
    desc: "Code Editor",
  },
  {
    imgSrc: "/images/intellij.svg",
    label: "Intellij idea",
    desc: "Code Editor",
  },
  {
    imgSrc: "/images/postman.svg",
    label: "Postman",
    desc: "API Testing",
  },
  {
    imgSrc: "/images/vite.svg",
    label: "Vite",
    desc: "Next Gen Frontend Tooling",
  },
  {
    imgSrc: "/images/mysql.svg",
    label: "MySQL",
    desc: "SQL Database",
  },
  {
    imgSrc: "/images/npm.svg",
    label: "NPM",
    desc: "Package Manager",
  },
  {
    imgSrc: "/images/materialui.svg",
    label: "Material UI",
    desc: "React Components",
  },
  {
    imgSrc: "/images/chakraui.svg",
    label: "Chakra UI",
    desc: "React Components",
  },
  {
    imgSrc: "/images/photoshop.svg",
    label: "Adobe Photoshop",
    desc: "Image Editing",
  },
  {
    imgSrc: "/images/illustrator.svg",
    label: "Adobe Illustrator",
    desc: "Designing",
  },
  
];

const Skills = () => {
  return (
    <section id="skill" className="section">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>

        <p className="para text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className=" grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
            {
                skillItem.map(({imgSrc,label,desc},key)=>(
                    <SkillCard
                    key={key}
                    imgSrc={imgSrc}
                    label={label}
                    desc={desc}
                    />

                ))
                
            }
        </div>

      </div>
    </section>
  );
};

export default Skills;
