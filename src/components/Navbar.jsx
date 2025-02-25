import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 w-[70%] bg-primary text-white rounded-lg shadow-md p-7  font-bold">
      <div className="flex items-center md:justify-center sm:justify-end ">
        <button
          className="text-4xl text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>

        <ul
          className={`absolute md:static top-24 left-0 w-full md:w-auto bg-primary md:bg-transparent flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 rounded-lg md:rounded-none transition-all duration-400 ease-in-out   ${
            isOpen ? "block" : "hidden md:flex "
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
