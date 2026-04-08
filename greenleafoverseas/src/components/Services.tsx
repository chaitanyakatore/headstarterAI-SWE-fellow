"use client";

import { motion } from "framer-motion";
import { Plane, Ship, Truck, TrainFront, ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Air Freight",
    description:
      "Comprehensive services for urgent, valuable, and fragile cargo with accelerated delivery by air.",
    icon: Plane,
    image: "/air_freight.png",
  },
  {
    title: "Ocean Freight",
    description:
      "International sea transportation implemented by our largest ocean carrier partners for massive global reach.",
    icon: Ship,
    image: "/ocean_freight.png",
  },
  {
    title: "Road Freight",
    description:
      "Flexible and reliable international road transportation across continents implemented by top carriers.",
    icon: Truck,
    image: "/road_freight.png",
  },
  {
    title: "Railway Logistics",
    description:
      "Cost-effective international rail transportation implemented by our extensive railway network partners.",
    icon: TrainFront,
    image: "/rail_freight.png",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column — Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-40"
          >
            <div>
              <span className="text-[#D4A853] font-bold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A1628] leading-[1.1] tracking-tight">
                World-Class
                <br />
                Logistics Solutions.
              </h2>
            </div>

            <div className="flex flex-col gap-5 text-slate-600 text-lg leading-relaxed">
              <p>
                We provide the absolute best transport and shipping
                services available globally, backed by decades of expertise.
              </p>
              <p>
                Our skilled team leverages the latest tracking technology
                and deep supply chain experience to ensure your goods arrive safely—every time.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-1 self-start mt-2 bg-[#0A1628] hover:bg-[#1A2940] text-white shadow-lg shadow-[#0A1628]/15"
            >
              Partner With Us <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right Column — Photographic Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative rounded-2xl overflow-hidden h-96 flex flex-col justify-end bg-slate-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/10 border border-slate-200/50"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0A1628]/95 via-[#0A1628]/50 to-transparent" />

                {/* Card Content */}
                <div className="relative z-10 p-8 flex flex-col gap-4 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/15 backdrop-blur-md text-white border border-white/20 shadow-lg transition-colors duration-300 group-hover:bg-[#D4A853] group-hover:border-[#D4A853] group-hover:text-[#0A1628]">
                    <service.icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {service.description}
                    </p>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-[#D4A853] opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hover:text-[#F5E6C8] uppercase mt-1"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
