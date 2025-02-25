import React from "react";
import profile2 from "../assets/IMG_5445.jpeg";

const About = () => {
  return (
    <section id="about" className="py-16 text-center bg-bgc">
      {/* Heading Section */}
      <h1 className="text-4xl font-bold text-gray-800">Introducing</h1>
      <h1 className="mb-6 text-6xl font-signature text-primary">About Me</h1>

      {/* Content Section */}
      <div className="flex flex-col items-center max-w-4xl gap-10 px-6 mx-auto md:flex-row">
        {/* Profile Image */}
        <img
          src={profile2}
          alt="Profile"
          className="object-cover shadow-lg w-72 h-72 md:w-80 md:h-80 rounded-xl"
        />

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
          autem! Alias placeat incidunt veritatis, necessitatibus odio voluptas?
          Odit, neque beatae.
        </p>
      </div>
    </section>
  );
};

export default About;
