import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center w-full h-screen gap-[1.618rem] text-center text-black bg-bgc golden-section"
    >
      <motion.h1
        className="font-bold font-signature text-primary text-[5rem] md:text-[8.09rem] lg:text-[9.9rem]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Akash Kurdekar
      </motion.h1>

      <motion.h3
        className="uppercase text-secondary text-[2.5rem] md:text-[4rem] lg:text-[5.5rem]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Portfolio
      </motion.h3>

      <motion.h2 className="px-[1rem] py-[0.618rem] text-lg text-black uppercase border-4 border-black rounded-md bg-primary hover:scale-[1.1] transition-all">
        UI and Frontend Developer
      </motion.h2>

      {/* Animated Dots */}
      <motion.div
        className="flex gap-[1.618rem]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <div className="w-5 h-5 bg-black rounded-full"></div>
        <div className="w-5 h-5 bg-black rounded-full"></div>
        <div className="w-5 h-5 bg-black rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default Home;
