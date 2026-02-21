import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pb-16 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 tracking-tight">
          Hello! I'm Chaitanya<span className="text-primary">.</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl text-gray-900 mb-1 leading-relaxed font-medium">
          I'm a Software Developer at{" "}
          <span className="text-primary">Headstarter AI</span>.
        </h2>

        {/* Small description link */}
        <a
          href="#projects"
          className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors text-sm md:text-base group"
        >
          Read about my work there
          <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Previously Section (Like Screenshot) */}
        <div className="mt-10 p-6 rounded-xl bg-purple-50">
          <p className="italic text-sm text-gray-500 mb-4">Previously,</p>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Previous experience 1 */}
            <div className="flex items-start space-x-3">
              <img
                src="/google-icon.png"
                alt="Google"
                className="w-6 h-6 mt-1"
              />
              <div>
                <p className="font-medium text-gray-800">I interned at Google.</p>
                <a
                  href="#work"
                  className="text-primary text-sm hover:text-accent font-medium"
                >
                  Read about my work there &gt;
                </a>
              </div>
            </div>

            {/* Previous experience 2 */}
            <div className="flex items-start space-x-3">
              <img
                src="/grad-icon.png"
                alt="Graduation"
                className="w-6 h-6 mt-1"
              />
              <div>
                <p className="font-medium text-gray-800">
                  I completed my Master's in Interaction Design from IDC School of Design.
                </p>
                <a
                  href="#resume"
                  className="text-primary text-sm hover:text-accent font-medium"
                >
                  More details in my resume
                </a>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
