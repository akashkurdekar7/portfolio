import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Edu from "./components/Edu";

const App = () => {
  return (
    <>
      <Navbar />
      <main className=" bg-bgc">
        <Home />
        <About />
        <Skills />
        <Edu />
      </main>
      <Footer />
    </>
  );
};

export default App;
