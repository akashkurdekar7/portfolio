import React from "react";
import profile from "../assets/IMG_5445.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col justify-center text-center "
    >
      <div className="absolute top-0 left-0 bg-center bg-no-repeat bg-cover">
        <img
          src={profile}
          className="hidden bg-cover md:block img-fluid"
          alt="Akash K"
        />
      </div>

      <h1 className="absolute transform -translate-x-1/2 text-8xl top-24 font-signature text-primary left-1/2 w-max">
        Introducing
      </h1>
      <div className="flex flex-col sm:flex-row-reverse items-center max-w-sm p-5 bg-white right-[5rem] top-[36%] max-h-sm bg-opacity-50 rounded-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-black hover:bg-opacity-100 hover:text-white">
        <div className="sm:hidden">
          <img
            src={profile}
            alt="Profile"
            className="block w-full mb-4 rounded-md md:hidden"
          />
        </div>

        <div className="sm:w-2/3 sm:ml-4">
          <h1 className="mt-2 text-4xl ">About Me</h1>
          <ul className="nav-items">
            <li className="nav-list">photography </li>
            <li>traveller </li>
            <li>cook </li>
            <li>frontend developer </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
