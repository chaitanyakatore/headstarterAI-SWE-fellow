"use client";

import { motion } from "framer-motion";
import { Ship, Plane, PackageCheck, FileSpreadsheet } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    title: "Ocean Freight",
    description: "Cost-effective, reliable sea transport for full container loads (FCL) and less than container loads (LCL).",
    icon: Ship,
  },
  {
    title: "Air Freight",
    description: "Express global delivery solutions for time-sensitive payloads requiring premium handling.",
    icon: Plane,
  },
  {
    title: "Customs Clearance",
    description: "Expert navigation of international trade regulations to ensure smooth border crossings.",
    icon: FileSpreadsheet,
  },
  {
    title: "Warehousing & Logistics",
    description: "Secure storage and efficient distribution networks to streamline your supply chain.",
    icon: PackageCheck,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/40">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Our Expertise
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
            Comprehensive Trade Services
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From initial consultation to final delivery, we provide end-to-end import and export solutions tailored to your unique business requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background/40 backdrop-blur-xl border border-white/10 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.1)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
