import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Edu from "./components/Edu";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="bg-bgc">
        <Home />
        <section className="md:w-[61.8%] mx-auto golden-padding">
          <About />
          <Skills />
          <Edu />
          <Experience />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
