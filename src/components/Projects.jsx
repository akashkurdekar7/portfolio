import React from "react";

const Projects = () => {
  return (
    <section className="relative bg-[#F7F0E6] py-16 px-6 text-center">
      {/* Title Section */}
      <div className="mb-12">
        <div className="relative inline-block">
          <h2 className="relative inline-block text-5xl font-bold text-black subtitle">
            <span className="absolute -translate-x-1/2 -top-16 sm:-top-12 md:-top-14 left-1/2 title text-3xl text-[#E84545] italic">
              projects
            </span>
            PORTFOLIO
          </h2>
        </div>
        <p className="mt-4 text-lg text-gray-700">
          Here are some of my works in the following areas of interest.
        </p>
        <hr className="w-1/3 mx-auto mt-4 border-black" />
      </div>

      {/* Buttons Section */}
      <div className="flex flex-wrap justify-center gap-6">
        <button className="px-6 py-3 text-white bg-[#C1272D] rounded-lg text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:bg-opacity-90 active:scale-95">
          FRONTEND DEVELOPMENT
        </button>
        <button className="px-6 py-3 text-white bg-[#2F554E] rounded-lg text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:bg-opacity-90 active:scale-95">
          UI/UX DESIGNS
        </button>
        <button className="px-6 py-3 text-black bg-[#FEC544] rounded-lg text-lg font-semibold transition-transform duration-300 hover:scale-105 hover:bg-opacity-90 active:scale-95">
          FULL STACK DEVELOPMENT
        </button>
      </div>
    </section>
  );
};

export default Projects;
