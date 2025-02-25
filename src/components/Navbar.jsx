import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track Scroll Position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 fixed text-white font-bold shadow-md transition-all duration-300 ease-in-out ${
        scrolled
          ? "top-0 left-0 w-full md:w-[100%] bg-bgc p-2 rounded-none"
          : "top-2 left-1/2 transform -translate-x-1/2 w-[70%] md:w-[80%] bg-primary p-4 rounded-lg"
      }`}
    >
      <div className="flex items-center justify-end md:justify-center">
        <button
          className="text-4xl text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>

        <ul
          className={`absolute md:static top-20 left-0 w-full md:w-auto bg-primary md:bg-transparent flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 rounded-lg md:rounded-none transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          {[
            "Home",
            "About",
            "Work",
            "Skills",
            "Education",
            "Projects",
            "Contact",
          ].map((item) => (
            <li key={item} className="p-2">
              <a
                href={`#${item.toLowerCase()}`}
                className="flex justify-end font-mono text-lg hover:text-bgc"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
