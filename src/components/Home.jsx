import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center w-full h-screen pt-[80px] gap-4 "
    >
      <h1 className="text-6xl text-center font-signature text-primary md:text-7xl lg:text-8xl xl:text-9xl">
        Akash Kurdekar
      </h1>
      <h3 className="font-serif text-3xl text-center text-purple-700 uppercase md:text-4xl lg:text-5xl">
        Portfolio
      </h3>
      <h2 className="p-2 text-black uppercase border-4 border-black rounded-md bg-bgc ">
        UI and frontend developer
      </h2>
      {/* Three visible dots */}
      <div className="flex items-center justify-center space-x-4 pointer-events-none">
        <div className="w-5 h-5 bg-black rounded-full"></div>
        <div className="w-5 h-5 bg-black rounded-full"></div>
        <div className="w-5 h-5 bg-black rounded-full"></div>
      </div>
    </section>
  );
};

export default Home;
