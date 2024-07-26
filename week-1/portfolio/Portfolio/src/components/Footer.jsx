// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-4 mt-10 mb-2">
      <div className="container mx-auto text-center">
        <p className="sm">© design & build ♥️ Chaitanya Katore.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://github.com/chaitanyakatore"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
            aria-label="GitHub"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/chaitanya-katore-87964921b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a
            href="mailto:chaitanyakatore.email@example.com"
            className="hover:text-gray-500"
            aria-label="Email"
          >
            <i className="fas fa-envelope fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
