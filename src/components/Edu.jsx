import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col justify-center p-4 text-center gap-9"
    >
      <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
        <h1 className="text-6xl font-signature text-primary sm:text-2xl md:text-5xl">
          educational
        </h1>
        <h1 className="font-serif text-5xl text-black uppercase sm:text-xl md:text-4xl">
          background
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center p-6 mt-10 transition-shadow duration-300 border-4 border-black rounded-lg shadow-md hover:shadow-lg md:flex-row">
        <div className="flex flex-col w-full gap-4 px-6 text-center md:w-1/2 sm:p-4">
          <h3 className="text-lg font-semibold sm:text-base">2018-2020</h3>
          <div className="relative flex items-center justify-center my-2">
            <hr className="w-full h-1 bg-gray-400 border-0" />
            <div className="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 rounded-md bg-primary top-1/2 left-1/2"></div>
          </div>
          <h1 className="text-xl font-bold uppercase sm:text-lg">Science</h1>
          <h4 className="text-md sm:text-sm">
            P C Jabin College of Science, Hubli
          </h4>
          <p className="mt-2 text-gray-700 sm:text-sm">
            Graduated with a percentage of <strong>73%</strong>
          </p>
        </div>

        <div className="flex flex-col w-full gap-4 px-6 text-center md:w-1/2 sm:p-4">
          <h3 className="text-lg font-semibold sm:text-base">2021-2024</h3>
          <div className="relative flex items-center justify-center my-2">
            <hr className="w-full h-1 bg-gray-400 border-0" />
            <div className="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 rounded-md bg-primary top-1/2 left-1/2"></div>
          </div>
          <h1 className="text-xl font-bold uppercase sm:text-lg">
            Bachelors of Engineering
          </h1>
          <h4 className="text-md sm:text-sm">
            Jain College of Engineering and Technology, Hubli
          </h4>
          <p className="text-black sm:text-sm">
            Graduated with a grade of <strong>7.2 CGPA</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
