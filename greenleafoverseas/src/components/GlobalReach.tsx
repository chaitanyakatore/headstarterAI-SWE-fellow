"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Countries Served" },
  { value: "10k+", label: "Successful Shipments" },
  { value: "99%", label: "On-Time Delivery" },
  { value: "24/7", label: "Global Support" },
];

export function GlobalReach() {
  return (
    <section id="global-reach" className="relative py-24 overflow-hidden bg-primary text-primary-foreground">
      {/* Decorative World Map Background */}
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-no-repeat grayscale"
      />
      
      <div className="absolute inset-0 z-0 bg-primary/90" /> {/* Overlay to ensure text readability */}

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
              Connecting Continents, <br /> Securing Supply Chains
            </h2>
            <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
              With a vast network of international partners and a deep understanding of local compliance laws, we ensure your goods arrive safely and smoothly—no matter the destination.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-6 w-full max-w-lg">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/10 transition-colors duration-300"
              >
                <div className="text-4xl md:text-5xl font-extrabold mb-2 text-white drop-shadow-sm">{stat.value}</div>
                <div className="text-sm md:text-base font-medium text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
