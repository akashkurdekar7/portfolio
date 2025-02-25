import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 w-[90%] bg-primary text-white rounded-lg shadow-md p-4 font-bold">
      <div className="flex items-center md:justify-center sm:justify-end ">
        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>

        <ul
          className={`absolute md:static top-14 left-0 w-full md:w-auto bg-primary md:bg-transparent flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 rounded-lg md:rounded-none transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li className="p-2">
            <a href="#" className="text-lg hover:text-bgc font-signature">
              Home
            </a>
          </li>
          <li className="p-2">
            <a href="#" className="text-lg hover:text-bgc font-signature">
              About
            </a>
          </li>
          <li className="p-2">
            <a href="#" className="text-lg hover:text-bgc font-signature">
              Work
            </a>
          </li>
          <li className="p-2">
            <a href="#" className="text-lg hover:text-bgc font-signature">
              Skills
            </a>
          </li>
          <li className="p-2">
            <a href="#" className="text-lg hover:text-bgc font-signature">
              Education
            </a>
          </li>
          <li className="p-2">
            <a href="#" className="text-lg hover:text-bgc font-signature">
              Projects
            </a>
          </li>
          <li className="p-2">
            <a href="#" className="text-lg hover:text-bgc font-signature">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
