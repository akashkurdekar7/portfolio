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
    </section>
  );
};

export default Home;
