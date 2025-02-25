import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 w-[90%] bg-primary text-white rounded-lg shadow-md p-4 font-bold">
      <div className="flex justify-between items-center">
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>

        {/* Navbar Links */}
        <ul
          className={`absolute md:static top-14 left-0 w-full md:w-auto bg-primary md:bg-transparent flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 rounded-lg md:rounded-none transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li className="p-2">
            <a href="#" className="hover:text-bgc font-signature text-lg">
              Home
            </a>
          </li>
          <li className="p-2">
            <a href="#" className="hover:text-bgc font-signature text-lg">
              About
            </a>
          </li>
          <li className="p-2">
            <a href="#" className="hover:text-bgc font-signature text-lg">
              Work
            </a>
          </li>
          <li className="p-2">
            <a href="#" className="hover:text-bgc font-signature text-lg">
              Skills
            </a>
          </li>
          <li className="p-2">
            <a href="#" className="hover:text-bgc font-signature text-lg">
              Education
            </a>
          </li>
          <li className="p-2">
            <a href="#" className="hover:text-bgc font-signature text-lg">
              Projects
            </a>
          </li>
          <li className="p-2">
            <a href="#" className="hover:text-bgc font-signature text-lg">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
