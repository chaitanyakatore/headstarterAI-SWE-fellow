"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function Contact() {
  return (
    <section id="contact" className="py-28 bg-white">
      <div className="container px-4 md:px-8 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <span className="text-[#D4A853] font-bold tracking-wider uppercase text-sm mb-4 block">
                Get In Touch
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl mb-4 text-[#0A1628]">
                Ready to expand your global business?
              </h2>
              <p className="text-slate-500 md:text-lg leading-relaxed">
                Our logistics and compliance experts are ready to build a custom supply chain strategy for your specific needs. Reach out today for a free consultation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#D4A853]/10 text-[#D4A853]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A1628]">Headquarters</h4>
                  <p className="text-slate-500 text-sm">123 Global Trade Center, Finance Hub, NY</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#D4A853]/10 text-[#D4A853]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A1628]">Phone</h4>
                  <p className="text-slate-500 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#D4A853]/10 text-[#D4A853]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A1628]">Email</h4>
                  <p className="text-slate-500 text-sm">contact@greenleafoverseas.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-[#F8FAFC] border border-slate-200 shadow-xl shadow-slate-900/5 rounded-2xl p-8"
          >
            <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name" className="text-[#0A1628] font-semibold">First Name</Label>
                  <Input id="first-name" placeholder="John" className="border-slate-200 focus:border-[#D4A853] focus:ring-[#D4A853]" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name" className="text-[#0A1628] font-semibold">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" className="border-slate-200 focus:border-[#D4A853] focus:ring-[#D4A853]" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#0A1628] font-semibold">Work Email</Label>
                <Input id="email" type="email" placeholder="john@company.com" className="border-slate-200 focus:border-[#D4A853] focus:ring-[#D4A853]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-[#0A1628] font-semibold">Company</Label>
                <Input id="company" placeholder="Acme Logistics" className="border-slate-200 focus:border-[#D4A853] focus:ring-[#D4A853]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#0A1628] font-semibold">How can we help you?</Label>
                <textarea
                  id="message"
                  className="w-full min-h-[120px] rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D4A853] focus:border-[#D4A853] resize-y"
                  placeholder="Tell us about your import/export requirements..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#D4A853] hover:bg-[#B8922E] text-[#0A1628] font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                size="lg"
              >
                Submit Inquiry
              </Button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
