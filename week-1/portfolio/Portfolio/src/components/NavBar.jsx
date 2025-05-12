import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // Import for animations

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavigation = (item) => {
    if (item.isExternal) {
      window.open(item.path, '_blank', 'noopener,noreferrer');
      return;
    }

    if (item.path === '#projects') {
      // If we're not on home page, first navigate to home
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const projectsSection = document.getElementById('projects');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // If we're already on home page, just scroll
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(item.path);
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "Projects", path: "#projects" },
    { name: "About", path: "/about" },
    { 
      name: "Resume", 
      path: "/resume.pdf",
      isExternal: true 
    }
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-white py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <Link 
              to="/" 
              className="text-2xl lg:text-3xl font-bold font-playfair text-red-900 hover:text-red-700 transition-colors duration-300 flex items-center"
            >
              <span className="hidden lg:inline">Chaitanya Katore</span>
              <span className="lg:hidden">CK</span>
              <span className="ml-2 w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <motion.li 
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => handleNavigation(item)}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 group ${
                      location.pathname === item.path 
                        ? "text-red-900" 
                        : "text-gray-600 hover:text-red-900"
                    }`}
                  >
                    {item.name}
                    <span className={`absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 transition-all duration-300 ${
                      location.pathname === item.path ? "w-full" : "group-hover:w-full"
                    }`}></span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={handleToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-red-900 hover:text-red-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t border-gray-100">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => handleNavigation(item)}
                    className={`w-full text-left block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
                      location.pathname === item.path
                        ? "text-red-900 bg-red-50"
                        : "text-gray-600 hover:text-red-900 hover:bg-red-50"
                    }`}
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;