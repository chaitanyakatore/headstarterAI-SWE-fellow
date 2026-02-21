"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe2, Ship, Plane } from "lucide-react";
import { Button } from "./ui/button";
import dynamic from "next/dynamic";

const WorldMap = dynamic(() => import("@/components/ui/world-map"), {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background patterns/gradients and World Map */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        <div className="w-full max-w-6xl mt-24">
          <WorldMap
            dots={[
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska
                end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
              },
              {
                start: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat: -15.7975, lng: -47.8919 }, // Brazil
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
            lineColor="hsl(var(--primary))"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
      </div>

      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center pointer-events-none">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center gap-8"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-2">
            <Globe2 className="w-4 h-4 mr-2" />
            Greenleaf Overseas
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground"
          >
            Seamless <span className="text-primary">Import & Export</span> <br className="hidden md:block" />
            Solutions Worldwide
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-semibold text-foreground/90 mt-2"
          >
            Your Premier Partner for Global Sourcing & Supply Chain
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-4"
          >
            We bridge continents with comprehensive logistics, customs clearance, and trade solutions. From agricultural goods to commercial freight, experience end-to-end reliability tailored for modern business.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-4 text-foreground w-full sm:w-auto justify-center pointer-events-auto">
            <Button size="lg" className="rounded-full px-8 text-base h-12 shadow-lg shadow-primary/25">
              Explore Our Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base h-12 border-primary/20 hover:bg-primary/5 bg-background">
              Contact an Expert
            </Button>
          </motion.div>

          {/* Floating Icons */}
          <motion.div 
            variants={itemVariants} 
            className="flex gap-12 mt-16 opacity-50 dark:opacity-30 items-center justify-center"
          >
            <Ship className="w-12 h-12 text-primary" />
            <Plane className="w-12 h-12 text-primary" />
            <Globe2 className="w-12 h-12 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
