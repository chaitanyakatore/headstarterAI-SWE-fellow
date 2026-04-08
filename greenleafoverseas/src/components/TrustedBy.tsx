"use client";

import { motion } from "framer-motion";

const brands = [
  "Maersk", "DHL International", "FedEx Logistics", "CMA CGM", "Hapag-Lloyd",
  "Emirates SkyCargo", "DB Schenker", "Kuehne+Nagel", "COSCO Shipping", "Evergreen Marine",
];

export function TrustedBy() {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 md:px-8 text-center mb-8">
        <p className="text-sm font-bold tracking-widest uppercase text-slate-400">
          Trusted by industry leaders worldwide
        </p>
      </div>

      {/* Scrolling marquee */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll gap-16 w-max">
          {[...brands, ...brands].map((brand, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center px-6 py-3 text-slate-300 text-xl font-bold tracking-wide whitespace-nowrap select-none hover:text-[#D4A853] transition-colors duration-300"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
