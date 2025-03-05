import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      class="flex flex-col lg:flex-row xl:flex-row lg:justify-center lg:items-center lg:gap-36 min-h-max"
    >
      {/* Title */}
      <div className="flex items-center justify-center py-6">
        <h2 className="title">
          personal
          <span className="subtitle">SKILLS</span>
        </h2>
      </div>

      {/* Skills Container */}
      <div className="flex flex-col items-center justify-center gap-10 mt-10 md:flex-row">
        {/* Programming Languages */}
        <div className="p-6 text-white bg-teal-800 rounded-lg shadow-lg min-h-[500px] w-80">
          <h3 className="mb-4 text-2xl font-semibold">PROGRAMMING LANGUAGES</h3>
          <ul className="space-y-2 tracking-wide uppercase list-disc list-inside">
            <li>C++ Programming</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Angular.js</li>
            <li>Express.js</li>
            <li>node.js</li>
            <li>Java Programming</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>NoSQL</li>
          </ul>
        </div>

        {/* Tools and Tech */}
        <div className="p-6 min-h-[500px] text-white rounded-lg shadow-lg bg-primary w-80">
          <h3 className="mb-4 text-2xl font-semibold">TOOLS AND TECH</h3>
          <ul className="space-y-2 tracking-wide uppercase list-disc list-inside">
            <li>Visual Studio Code</li>
            <li>Postman</li>
            <li>SQL Server</li>
            <li>MongoDB</li>
            <li>Figma</li>
            <li>Canva</li>
            <li>word</li>
            <li>powerpoint</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
