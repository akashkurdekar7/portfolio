import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Edu from "./components/Edu";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="bg-bgc">
        <Home />
        <About />
        <Skills />
        <Edu />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default App;
