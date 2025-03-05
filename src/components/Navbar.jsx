import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`z-50 fixed font-bold shadow-md transition-all duration-300 ease-in-out
        ${
          scrolled
            ? "top-0 left-0 w-full bg-primary text-bgc py-[1.618rem] rounded-none"
            : "top-2 left-1/2 transform -translate-x-1/2 md:w-max w-full bg-bgc text-primary py-[1rem] px-[2.618rem] rounded-lg "
        }`}
    >
      <div
        className={`flex items-center justify-end golden-padding ${
          scrolled ? "md:justify-evenly" : ""
        }`}
      >
        {/* <h1 className="text-xl font-bold tracking-wide font-signature">
          Akash
        </h1> */}

        <button
          className={`text-4xl md:hidden  ${
            scrolled ? "text-bgc" : "text-primary"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>

        <ul
          className={`absolute md:static top-32 left-0 w-full md:w-auto flex flex-col md:flex-row md:space-x-[1.618rem] gap-3 p-4 md:p-0 transition-all duration-300 ease-in-out
            ${isOpen ? "block" : "hidden md:flex md:justify-end"}
            ${scrolled ? "bg-primary text-bgc" : "bg-bgc text-primary"}
          `}
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
            <li key={item} className="p-[0.618rem]">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-lg font-mono transition-all hover:scale-[1.1]"
                onClick={handleLinkClick}
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
