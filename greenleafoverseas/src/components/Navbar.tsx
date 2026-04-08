"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Global Reach", href: "#global-reach" },
  { name: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="bg-[#D4A853] p-2 rounded-xl transition-transform duration-300 group-hover:scale-105 shadow-md shadow-[#D4A853]/20">
            <Globe className="w-6 h-6 text-[#0A1628]" />
          </div>
          <span className="font-bold text-xl tracking-tight text-[#0A1628]">
            Greenleaf<span className="font-extrabold text-[#D4A853]">Overseas</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#D4A853] after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled ? "text-slate-600 hover:text-[#0A1628]" : "text-slate-700 hover:text-[#0A1628]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="rounded-full px-7 bg-[#D4A853] hover:bg-[#B8922E] text-[#0A1628] font-bold shadow-lg shadow-[#D4A853]/20 border-none transition-all hover:scale-105 hover:shadow-xl">
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#0A1628] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-semibold text-[#0A1628] py-2 border-b border-slate-100 hover:text-[#D4A853] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full mt-2 bg-[#D4A853] hover:bg-[#B8922E] text-[#0A1628] font-bold rounded-full py-6">
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Get a Quote
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
