import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col justify-center text-center"
    >
      <div className="flex items-center justify-center gap-2">
        <h1 className="text-7xl font-signature text-primary">educational</h1>
        <h1 className="font-serif text-6xl text-black uppercase">background</h1>
      </div>

      <div className="flex flex-col items-center justify-center p-6 mt-10 border-4 border-black rounded-lg shadow-md md:flex-row">
        <div className="flex flex-col w-full gap-4 px-6 text-center md:w-1/2">
          <h3 className="text-xl font-semibold">2018-2020</h3>
          <div className="relative flex items-center justify-center my-2">
            <hr className="w-full h-1 bg-black" />
            <div className="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 rounded-md top-1/2 left-1/2"></div>
          </div>
          <h1 className="text-2xl font-bold uppercase">Science</h1>
          <h4 className="text-lg">P C Jabin College of Science, Hubli</h4>
          <p className="mt-2 text-gray-700">
            Graduated with a percentage of <strong>73%</strong>
          </p>
        </div>

        <div className="flex flex-col w-full gap-4 px-6 text-center md:w-1/2">
          <h3 className="text-xl font-semibold">2021-2024</h3>
          <div className="relative flex items-center justify-center my-2">
            <hr className="w-full h-1 bg-black" />
            <div className="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 rounded-md top-1/2 left-1/2 bg-primary"></div>
          </div>
          <h1 className="text-2xl font-bold uppercase">
            Bachelors of Engineering
          </h1>
          <h4 className="text-lg">
            Jain College of Engineering and Technology, Hubli
          </h4>
          <p className="text-black ">
            Graduated with a grade of <strong>7.2 CGPA</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
