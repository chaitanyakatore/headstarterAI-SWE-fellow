import React from "react";
import { motion } from "framer-motion";
import itachiImage from "../assets/Samurai.png";

const Home = () => {
  return (
    <div className="min-h-screen p-4 lg:p-16 bg-off-white relative overflow-hidden flex items-center">
      {/* Subtle Animated Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#0a0a0a 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}></div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-accent-red/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 lg:gap-24">
          {/* Text Content */}
          <div className="lg:w-2/3 space-y-8">
            <div className="space-y-2">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg font-outfit font-medium text-accent-red tracking-widest uppercase"
              >
                Portfolio 2024
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-6xl md:text-8xl lg:text-9xl font-fraunces font-bold text-premium-black leading-[0.9] tracking-tight"
              >
                Creative<br/>
                <span className="text-gray-400 italic font-light">Developer</span>
              </motion.h1>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl"
            >
              <p className="text-xl md:text-2xl text-premium-gray font-outfit font-light leading-relaxed">
                I craft digital experiences that blend <span className="font-medium text-premium-black">technical precision</span> with <span className="font-medium text-premium-black">artistic vision</span>. Currently building the future at UST.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-8 pt-8"
            >
              <a href="#projects" className="group flex items-center gap-2 text-premium-black font-outfit font-medium text-lg hover:text-accent-red transition-colors">
                <span className="border-b-2 border-premium-black group-hover:border-accent-red transition-colors">View Selected Works</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>

          {/* Image Section - Creative Layout */}
          <motion.div 
            className="lg:w-1/3 relative w-full max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative aspect-[3/4]">
              {/* Abstract Shape */}
              <div className="absolute inset-0 bg-premium-gray rounded-t-[100px] rounded-b-[20px] transform rotate-3 opacity-10"></div>
              
              {/* Image Container */}
              <div className="absolute inset-0 overflow-hidden rounded-t-[100px] rounded-b-[20px] shadow-2xl">
                <img
                  src={itachiImage}
                  alt="Chaitanya Katore"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-110"
                />
                
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="font-fraunces italic text-lg">Mumbai, India</p>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-red rounded-full flex items-center justify-center text-white font-outfit font-bold text-xs tracking-widest uppercase animate-spin-slow shadow-lg">
                <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                  <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                  <text>
                    <textPath href="#curve" fill="currentColor">
                      Available for work • Available for work •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Global Styles for this component */}
      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Home;