import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="bg-bgc h-auto">
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default App;
