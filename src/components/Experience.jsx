import React from "react";
import img from "../assets/experience.jpg";

const experiences = [
  {
    role: "Frontend Developer (Angular)",
    company: "IngeniousPix Creative Studio",
    duration: "03/25 - Present",
    description:
      "Developing and maintaining frontend applications using Angular. Collaborating with designers and backend developers to enhance UI/UX.",
  },
  {
    role: "Tech Intern",
    company: "BeyondChats",
    duration: "02/25 - Present",
    description:
      "Developing UI/UX workflows for chatbot setup using React with Vite. Implementing smooth user interactions.",
  },
  {
    role: "Full Stack Web Developer Intern",
    company: "Varcons Technologies",
    duration: "05/23 - 08/23",
    description:
      "Designed and developed responsive web pages for a Wildlife Conservation site using React.js. Optimized frontend performance.",
  },
  {
    role: "Web Development Intern",
    company: "Deshpande Startups",
    duration: "01/24 - 06/24",
    description:
      "Built an E-commerce website for local artisans using the MERN stack. Designed RESTful APIs and implemented JWT authentication.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center p-10 min-h-max lg:justify-center lg:items-center lg:flex-row"
    >
      <div className="w-full p-4 bg-yellow-500 rounded-lg shadow-lg max-w-xxl">
        <img src={img} alt="Work Experience" className="rounded-md" />
        <div className="flex justify-center mt-4 text-lg font-semibold">
          <span>Web Developer</span>
        </div>
      </div>

      <div className="w-full max-w-2xl mt-10 lg:mt-0 lg:ml-10 ">
        <div className="text-center">
          <h2 className="title">
            Work<span className="subtitle">Experience</span>
          </h2>
        </div>
        <div className="relative w-full mt-10">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-black"></div>
          <div className="pl-10 space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute left-[-2rem] w-4 h-4 bg-black rounded-full"></div>
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <p className="text-gray-700">
                  {exp.company} | {exp.duration}
                </p>
                <p className="mt-2 text-sm text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
