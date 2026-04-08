"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award, Globe2, Clock } from "lucide-react";

const stats = [
  { value: "50+", label: "Countries Served", icon: Globe2 },
  { value: "10k+", label: "Successful Shipments", icon: TrendingUp },
  { value: "99%", label: "On-Time Delivery", icon: Clock },
  { value: "24/7", label: "Global Support", icon: Award },
];

export function GlobalReach() {
  return (
    <section id="global-reach" className="relative py-28 overflow-hidden bg-[#0A1628]">
      {/* Grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-[#1E40AF]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 space-y-8 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-white leading-tight">
              Connecting Continents,<br />
              <span className="text-[#D4A853]">Securing Supply Chains.</span>
            </h2>
            <p className="text-slate-400 md:text-lg leading-relaxed font-medium">
              With a vast network of international partners and a deep understanding of local compliance laws, we ensure your goods arrive safely and smoothly—no matter the destination.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-2"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg transition-all duration-300 hover:-translate-y-1 bg-[#D4A853] hover:bg-[#B8922E] text-[#0A1628] hover:shadow-[#D4A853]/25"
              >
                Expand Your Reach
              </a>
            </motion.div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:ml-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/8 hover:border-[#D4A853]/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#D4A853]/10 rounded-xl group-hover:bg-[#D4A853]/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-[#D4A853]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
