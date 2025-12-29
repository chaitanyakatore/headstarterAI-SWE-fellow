import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  MapPin,
  Instagram,
  Phone,
  Mail,
  ArrowRight,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="font-sans text-gray-800 bg-stone-50 selection:bg-rose-200">
      {/* --- Navigation --- */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={
                isScrolled
                  ? "/logo_black_on_white.png"
                  : "/logo_white_on_black.png"
              }
              alt="AdhyaLakshmi"
              className={`h-24 md:h-28 w-auto transition-all duration-300 ${
                isScrolled ? "mix-blend-multiply" : "mix-blend-screen"
              }`}
            />
          </div>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex space-x-12 text-sm tracking-widest uppercase font-medium ${
              isScrolled ? "text-gray-600" : "text-gray-200"
            }`}
          >
            <a
              href="#collection"
              className="hover:text-rose-500 transition-colors"
            >
              Collections
            </a>
            <a href="#about" className="hover:text-rose-500 transition-colors">
              Our Story
            </a>
            <a href="#visit" className="hover:text-rose-500 transition-colors">
              Visit Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-8 space-y-6">
            <a
              href="#collection"
              className="text-lg tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </a>
            <a
              href="#about"
              className="text-lg tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </a>
            <a
              href="#visit"
              className="text-lg tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Visit Us
            </a>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder - Replace with high quality dark image */}
        <div className="absolute inset-0 bg-stone-900">
          <img
            src="/hero_banner.png"
            alt="Woman in silk robe"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          >
            The Art of Sleep
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-serif mb-8 leading-tight"
          >
            Elegance in <br /> Every Dream
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#collection"
              className="inline-block border border-white px-10 py-3 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm"
            >
              Explore Collection
            </a>
          </motion.div>
        </div>
      </header>



      {/* --- Featured Collections (Infinite Carousel) --- */}
      <section id="collection" className="py-24 bg-white overflow-hidden">
        <div className="text-center mb-16 px-6">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-gray-900">
            Curated Collections
          </h2>
          <div className="w-16 h-0.5 bg-rose-400 mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex">
            {/* Animated Track - Duplicated 4 times for smooth infinite loop */}
            <motion.div
              className="flex gap-8 px-4"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30, // Adjust speed: higher = slower
                  ease: "linear",
                },
              }}
            >
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-8 min-w-max">
                  {/* Item 1: Silk */}
                  <div className="w-[300px] md:w-[400px] cursor-pointer group flex-shrink-0">
                    <div className="relative overflow-hidden h-[400px] md:h-[500px] mb-4">
                      <img
                        src="/collection_silk.png"
                        alt="Silk Collection"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
                    </div>
                    <h3 className="text-xl font-serif text-center mb-1">
                      The Silk Edit
                    </h3>
                    <p className="text-center text-gray-500 text-sm tracking-wide">
                      Pure Luxury
                    </p>
                  </div>

                  {/* Item 2: Bridal */}
                  <div className="w-[300px] md:w-[400px] cursor-pointer group flex-shrink-0">
                    <div className="relative overflow-hidden h-[400px] md:h-[500px] mb-4">
                      <img
                        src="/collection_bridal.png"
                        alt="Bridal Collection"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-serif text-center mb-1">
                      Bridal Trousseau
                    </h3>
                    <p className="text-center text-gray-500 text-sm tracking-wide">
                      For Your Special Day
                    </p>
                  </div>

                  {/* Item 3: Cotton */}
                  <div className="w-[300px] md:w-[400px] cursor-pointer group flex-shrink-0">
                    <div className="relative overflow-hidden h-[400px] md:h-[500px] mb-4">
                      <img
                        src="/collection_cotton.png"
                        alt="Cotton Loungewear"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-serif text-center mb-1">
                      Everyday Comfort
                    </h3>
                    <p className="text-center text-gray-500 text-sm tracking-wide">
                      Premium Cotton
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- About / Vibe Section --- */}
      <section id="about" className="bg-stone-100 py-24">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <img
              src="/serenity_fabric_detail.png"
              alt="Fabric detail"
              className="w-full shadow-xl"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">
              Designed for Serenity
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 font-light">
              We believe that the end of the day deserves to be celebrated. Our
              collection is hand-picked to ensure breathable fabrics, modern
              cuts, and timeless elegance. Located in the heart of the city, we
              bring you nightwear that feels as good as it looks.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 font-light">
              From Italian satin to Egyptian cotton, experience the touch of
              quality before you buy.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-rose-500 font-medium tracking-wide">
              <span>READ OUR STORY</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </section>

      {/* --- Visit Us (Footer replacement) --- */}
      <footer id="visit" className="bg-stone-900 text-stone-300 py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-serif text-white mb-6">AdhyaLakshmi</h3>
            <p className="text-stone-400 font-light leading-relaxed max-w-xs">
              Redefining comfort with a touch of modern luxury. Come visit our
              boutique store.
            </p>
            <div className="flex gap-6 mt-8">
              <Instagram className="hover:text-white cursor-pointer transition-colors" />
              <Phone className="hover:text-white cursor-pointer transition-colors" />
              <Mail className="hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center">
            <MapPin className="text-rose-400 mb-4" size={32} />
            <h4 className="text-white uppercase tracking-widest mb-4">
              Visit Our Store
            </h4>
            <p className="font-light">Opposite PNG jewellers</p>
            <p className="font-light">New Nagar Road, Sangamner</p>
            <a
              href="https://maps.app.goo.gl/Tx2wHJWuRHN5ZZdXA"
              target="_blank"
              className="mt-4 text-rose-400 border-b border-rose-400 pb-1 text-sm"
            >
              Get Directions
            </a>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <Clock className="text-rose-400 mb-4" size={32} />
            <h4 className="text-white uppercase tracking-widest mb-4">
              Opening Hours
            </h4>
            <p className="font-light">Mon - Sat: 10:00 AM - 9:00 PM</p>
            <p className="font-light">Sun: 11:00 AM - 8:00 PM</p>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-16 pt-8 text-center text-xs text-stone-600 tracking-widest">
          © 2025 AdhyaLakshmi. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
};

export default App;
