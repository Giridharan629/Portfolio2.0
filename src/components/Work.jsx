import React from "react";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "Full stack diat Monitoring app",
    tags: ["API", "Secure", "Development"],
    projectLink: "https://github.com/Giridharan629/Nutrition_tracker",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Chat Assistant app",
    tags: ["API", "SPA"],
    projectLink: "https://chat-gpt-git-master-giridharans-projects-8a89e26d.vercel.app/",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Free Text Formating app",
    tags: ["Development", "API"],
    projectLink: "https://formate-text-online.vercel.app/",
  },
  // {
  //   imgSrc: "/images/project-4.jpg",
  //   title: "Real state website",
  //   tags: ["Web-design", "Development"],
  //   projectLink: "https://github.com/codewithsadee-org/wealthome",
  // },
  // {
  //   imgSrc: "/images/project-5.jpg",
  //   title: "eCommerce website",
  //   tags: ["eCommerce", "Development"],
  //   projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  // },
  // {
  //   imgSrc: "/images/project-6.jpg",
  //   title: "vCard Personal portfolio",
  //   tags: ["Web-design", "Development"],
  //   projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
  // },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">
            My portfolio highlights
        </h2>

        <div className=" grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {
                works.map(({imgSrc,title,tags,projectLink},key)=>(
                    <ProjectCard
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    />
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default Work;
