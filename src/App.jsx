import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Navbar />
      <main className=" bg-bgc">
        <Home />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default App;
