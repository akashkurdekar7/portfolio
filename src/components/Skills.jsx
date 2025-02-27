import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center min-h-screen bg-[#fcebd5] p-10"
    >
      {/* Title */}
      <h2 className="text-6xl font-bold text-black">
        <span className="italic text-primary font-signature">personal</span>{" "}
        SKILLS
      </h2>

      {/* Skills Container */}
      <div className="flex flex-col gap-10 mt-10 md:flex-row">
        {/* Programming Languages */}
        <div className="p-6 text-white bg-teal-800 rounded-lg shadow-lg w-80">
          <h3 className="mb-4 text-2xl font-semibold">PROGRAMMING LANGUAGES</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>C, C++, C# Programming</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Angular.js</li>
            <li>Express.js</li>
            <li>Java Programming</li>
            <li>Swift Programming</li>
            <li>Python Programming</li>
            <li>HTML, CSS</li>
            <li>SQL, PL/SQL</li>
            <li>NoSQL</li>
          </ul>
        </div>

        {/* Tools and Tech */}
        <div className="p-6 text-white rounded-lg shadow-lg bg-primary w-80">
          <h3 className="mb-4 text-2xl font-semibold">TOOLS AND TECH</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Visual Studio Code</li>
            <li>Visual Studio</li>
            <li>XCode</li>
            <li>Postman</li>
            <li>PostgreSQL</li>
            <li>SQL Server</li>
            <li>MongoDB</li>
            <li>Figma</li>
            <li>Jira, Confluence</li>
            <li>Bitbucket</li>
            <li>Canva</li>
            <li>Taiga.io</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
