"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import dynamic from "next/dynamic";
import { GlobeConfig } from "./ui/globe";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  const globeConfig: GlobeConfig = {
    pointSize: 1.2,
    globeColor: "#0A1628",
    showAtmosphere: true,
    atmosphereColor: "#1E40AF",
    atmosphereAltitude: 0.15,
    emissive: "#0A1628",
    emissiveIntensity: 0.15,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#ffffff",
    directionalLeftLight: "#1E40AF",
    directionalTopLight: "#ffffff",
    pointLight: "#D4A853",
    arcTime: 2000,
    arcLength: 0.9,
    rings: 2,
    maxRings: 4,
    autoRotate: true,
    autoRotateSpeed: 1.2,
  };

  const arcs = [
    { order: 1, startLat: 40.7128, startLng: -74.006, endLat: 51.5074, endLng: -0.1278, arcAlt: 0.3, color: "#D4A853" },
    { order: 2, startLat: 51.5074, startLng: -0.1278, endLat: 31.2304, endLng: 121.4737, arcAlt: 0.4, color: "#D4A853" },
    { order: 3, startLat: 31.2304, startLng: 121.4737, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.5, color: "#FFFFFF" },
    { order: 4, startLat: -33.8688, startLng: 151.2093, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.3, color: "#D4A853" },
    { order: 5, startLat: 25.2048, startLng: 55.2708, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: "#FFFFFF" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1628]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      {/* Radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#1E40AF]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]"
        >
          {/* Left Column — Content */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A853]/10 text-[#D4A853] text-xs font-bold tracking-wider uppercase mb-8 w-max border border-[#D4A853]/20">
              <Globe className="w-3.5 h-3.5" /> Your Global Logistics Partner
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Your Trusted
              <br />
              Partner in{" "}
              <span className="text-[#D4A853] relative inline-block">
                Global Trade
                <svg className="absolute w-full h-2 -bottom-1 left-0 text-[#D4A853]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 8 Q 50 0 100 8" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              <span className="font-semibold text-slate-300">Greenleaf Overseas</span>{" "}
              delivers end-to-end logistics, customs clearance, and comprehensive trade solutions—ensuring your supply chain runs seamlessly across borders.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 bg-[#D4A853] hover:bg-[#B8922E] text-[#0A1628] shadow-lg shadow-[#D4A853]/25"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors group"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-4 mt-12 pt-8 border-t border-white/10">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#0A1628] bg-slate-600 overflow-hidden"><div className="w-full h-full bg-[url('https://i.pravatar.cc/100?img=1')] bg-cover" /></div>
                <div className="w-10 h-10 rounded-full border-2 border-[#0A1628] bg-slate-700 overflow-hidden"><div className="w-full h-full bg-[url('https://i.pravatar.cc/100?img=2')] bg-cover" /></div>
                <div className="w-10 h-10 rounded-full border-2 border-[#0A1628] bg-slate-800 overflow-hidden"><div className="w-full h-full bg-[url('https://i.pravatar.cc/100?img=3')] bg-cover" /></div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">24,000+</span>
                <span className="text-xs text-slate-500 font-medium">Trusted Partners Worldwide</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Interactive 3D Globe */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center h-[400px] sm:h-[500px] lg:h-[700px] w-full z-10 order-1 lg:order-2"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-[#1E40AF]/8 blur-[100px] -z-10" />
            <div className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing">
              <World globeConfig={globeConfig} data={arcs} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
