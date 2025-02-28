import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center min-h-screen bg-[#fcebd5] p-10"
    >
      <h2 className="flex items-center gap-2 text-6xl font-bold text-black">
        <span className="italic text-primary font-signature">work</span>{" "}
        EXPERIENCE
      </h2>

      {/* Experience Layout */}
      <div className="flex flex-col items-center gap-10 mt-10 lg:flex-row">
        {/* Image Box */}
        <div className="w-full max-w-lg p-4 bg-yellow-500 rounded-lg shadow-lg">
          <img
            src="../assets/experience.jpg"
            alt="Work Experience"
            className="rounded-md"
          />
          <div className="flex justify-around mt-4 text-lg font-semibold">
            <span>WEB DEVELOPMENT INTERN</span>
          </div>
        </div>

        {/* Experience Details with Timeline */}
        <div className="relative max-w-lg">
          {/* Vertical Line */}
          <div className="absolute left-2 top-0 h-full w-[2px] bg-black"></div>

          {/* Tech Intern Experience */}
          <div className="relative pl-6 mb-6">
            {/* Dot */}
            <div className="absolute left-0 w-4 h-4 bg-black rounded-full"></div>
            <h3 className="text-2xl font-bold">TECH INTERN</h3>
            <p className="text-gray-700">BeyondChats | 02/25 - Present</p>
            <p className="mt-2 text-sm text-gray-600">
              Developing UI/UX workflows for chatbot setup, registration, and
              integration using React with Vite. Implementing smooth user
              interactions.
            </p>
          </div>

          {/* Web Development Intern Experience */}
          <div className="relative pl-6">
            {/* Dot */}
            <div className="absolute left-0 w-4 h-4 bg-black rounded-full"></div>
            <h3 className="text-2xl font-bold">WEB DEVELOPMENT INTERN</h3>
            <p className="text-gray-700">Deshpande Startups | 01/24 - 06/24</p>
            <p className="mt-2 text-sm text-gray-600">
              Built an E-commerce website for local artisans using MERN stack.
              Designed RESTful APIs, implemented JWT authentication, and tested
              APIs with Postman.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
