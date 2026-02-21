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
      window.open(item.path, "_blank", "noopener,noreferrer");
      return;
    }

    if (item.path === "#projects") {
      // If we're not on home page, first navigate to home
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const projectsSection = document.getElementById("projects");
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // If we're already on home page, just scroll
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
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
      path: "https://drive.google.com/file/d/1eIz-AmPkZwa8AH6UajOQFkjukgW83TPb/view?usp=drivesdk",
      isExternal: true,
    },
  ];

  return (
    <motion.nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`max-w-2xl mx-auto rounded-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border border-white/20 py-3 px-6"
          : "bg-transparent py-4 px-6"
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }}>
            <Link
              to="/"
              className="text-xl font-bold font-fraunces text-premium-black hover:text-accent-red transition-colors duration-300 flex items-center"
            >
              <span>CK</span>
              <span className="ml-1 w-1.5 h-1.5 rounded-full bg-accent-red"></span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <motion.li
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => handleNavigation(item)}
                    className={`relative text-sm font-outfit font-medium transition-colors duration-300 ${
                      location.pathname === item.path
                        ? "text-accent-red"
                        : "text-premium-gray hover:text-accent-red"
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 top-full block h-px w-full bg-accent-red mt-1"
                      />
                    )}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleToggle}
              className="inline-flex items-center justify-center p-2 rounded-full text-premium-black hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-5 w-5" />
              ) : (
                <FaBars className="block h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 md:hidden"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.path}
                  onClick={() => handleNavigation(item)}
                  className={`w-full text-left block px-4 py-3 rounded-xl text-base font-outfit font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "bg-red-50 text-accent-red"
                      : "text-premium-gray hover:bg-gray-50"
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
