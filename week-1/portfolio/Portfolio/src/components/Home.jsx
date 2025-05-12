import React from "react";
import itachiImage from "../assets/Samurai.png";

const Home = () => {
  return (
    <div className="min-h-screen p-8 lg:p-16 bg-white relative overflow-hidden">
      {/* Subtle Animated Background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        animation: 'backgroundMove 60s linear infinite'
      }}></div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-red-100/20 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-20 w-64 h-64 rounded-full bg-blue-100/20 blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto pt-16 lg:pt-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-7/12 space-y-8">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight font-playfair">
                <span className="block text-red-500 text-sm font-mono tracking-widest mb-2">Hello, I'm</span>
                Chaitanya Katore
                <span className="block text-xl lg:text-2xl font-normal text-gray-600 mt-4 font-poppins">
                  Crafting digital experiences as a <span className="text-red-500 font-medium">Software Developer</span> in Mumbai
                </span>
              </h1>
              
              <div className="mt-8 space-y-4">
                <p className="text-lg text-gray-600 font-light font-poppins leading-relaxed">
                  I build elegant solutions to complex problems, focusing on performance, accessibility, and user experience.
                </p>
                <p className="text-base text-gray-500 font-light tracking-wide border-l-2 border-red-500 pl-4 py-1">
                  Currently innovating at <span className="text-red-500 font-medium">UST</span>
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="flex items-center gap-4 mt-8">
              <div className="w-6 h-6 rounded-full bg-red-500/20 animate-pulse"></div>
              <div className="text-xs text-gray-400 font-mono tracking-widest">AVAILABLE FOR FREELANCE WORK</div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-5/12 relative">
            <div className="relative max-w-[400px] mx-auto">
              <div className="absolute -inset-4 rounded-full filter blur-xl animate-float"></div>
              <img
                src={itachiImage}
                alt="Chaitanya Katore"
                className="w-full h-auto relative z-10 rounded-xl transform transition-all hover:scale-105 duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add this to your global CSS or CSS-in-JS */}
      <style jsx global>{`
        @keyframes backgroundMove {
          0% { background-position: 0 0; }
          100% { background-position: 1000px 1000px; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;