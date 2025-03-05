import React, { useState } from "react";
import profile from "../assets/IMG_5445.jpeg";

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center p-6 text-center md:p-12"
    >
      {/* Background Image for Large Screens */}
      <div className="absolute top-0 left-0 hidden w-full h-full bg-center bg-no-repeat bg-cover md:block">
        <img
          src={profile}
          className="object-cover w-full h-full"
          alt="Akash K"
        />
        {/* Dark Overlay when hovering */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            hoveredIndex !== null ? "opacity-50" : "opacity-0"
          }`}
        ></div>
      </div>

      {/* Intro Heading */}
      <div className="flex flex-col md:absolute md:top-24 md:left-1/2 md:-translate-x-1/2 md:w-max">
        <h1 className="flex text-3xl sm:text-5xl md:text-6xl font-signature text-primary sm:flex-row sm:gap-2">
          Introducing{" "}
          <span className="font-mono text-black uppercase text-bold">
            About Me
          </span>
        </h1>
      </div>

      {/* Image for Small Screens */}
      <div className="flex flex-col items-center w-full mt-6 md:mt-0">
        <div className="w-full sm:block md:hidden">
          <img
            src={profile}
            alt="Profile"
            className="block w-full mb-4 rounded-md border-[1rem] border-primary"
          />
        </div>

        {/* About Content Box */}
        <div className="relative flex flex-col items-center w-full p-5 bg-opacity-50 rounded-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-opacity-100 hover:text-bgc md:w-[50%] text-primary">
          <ul className="relative z-10 nav-items">
            {["Photography", "Traveller", "Cook", "Frontend Developer"].map(
              (item, index) => (
                <li
                  key={index}
                  className={`relative p-2 text-lg font-semibold transition-all duration-300 ease-in-out md:text-xl ${
                    hoveredIndex === index
                      ? "md:text-primary text-primary" // Highlight the hovered item
                      : "md:text-bgc  text-black" // Dim other items
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
