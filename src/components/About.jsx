import React from "react";
import profile from "../assets/IMG_5445.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-50 flex flex-col justify-center text-center bg-center bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(${profile})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      <h1 className="absolute transform -translate-x-1/2 text-8xl top-24 font-signature text-primary left-1/2 w-max">
        Introducing
      </h1>

      <div className="absolute max-w-sm p-5 bg-white right-[5rem] top-[36%] max-h-sm bg-opacity-50 rounded-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-black hover:bg-opacity-100 hover:text-white">
        <h1 className="mt-2 text-4xl ">About Me</h1>
        <p className="mt-4 text-lg leading-relaxed text-justify">
          I’m a Full Stack Developer skilled in MERN Stack, Java, and scalable
          web solutions, building high-performance applications. Passionate
          about innovation, problem-solving, and creativity, I thrive on
          challenges whether in coding, performance optimization, or cricket
          strategy.
        </p>
      </div>
    </section>
  );
};

export default About;
