import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="p-4 flex items-center justify-between mt-4">
      {/* Logo/Name */}
      <div className="text-2xl font-bold lg:flex lg:flex-col lg:items-start lg:mr-56 ml-4 lg:ml-32">
        <a href="#" className="hover:text-gray-700">
          <span className="block lg:hidden">Chaitanya</span>
          <span className="block lg:hidden">Katore</span>
          <span className="hidden lg:block">Chaitanya Katore</span>
        </a>
      </div>

      {/* Menu Icon for Mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={handleToggle} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`lg:flex lg:items-center lg:space-x-6 mr-16 ${
          isOpen
            ? "flex flex-col items-center absolute top-16 right-0 w-full bg-white"
            : "hidden"
        }`}
      >
        <li>
          <a href="#projects" className="p-2 hover:text-gray-700">
            Projects
          </a>
        </li>
        <li>
          <a href="#about" className="p-2 hover:text-gray-700">
            About
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1ZEgcXcSRVmbWkbVBLeFdisFsbUFMlFQh/view?usp=share_link"
            className="p-2 hover:text-gray-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/chaitanya-katore-87964921b/"
            className="p-2 hover:text-gray-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
