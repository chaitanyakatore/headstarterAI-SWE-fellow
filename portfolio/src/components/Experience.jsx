import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, GraduationCap } from 'lucide-react';

const experiences = [
  {
    icon: <Building2 className="h-10 w-10 text-gray-900" />,
    title: "I interned at Google.",
    description: "Read about my work there",
    link: "#"
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-gray-900" />,
    title: "I got a Master's in Computer Science",
    description: "from the University of Tech.",
    link: "#"
  }
];

const Experience = () => {
  return (
    <section className="py-12 bg-surface-accent/30 rounded-xl px-8 md:px-12 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-gray-400 italic mb-8 font-serif text-lg">Previously,</h3>
        
        <div className="grid md:grid-cols-2 gap-10">
            {experiences.map((exp, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 mt-1">
                  {exp.icon}
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-lg mb-2 leading-snug">
                    {exp.title.split('Google').map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && <span className="font-bold">Google</span>}
                      </React.Fragment>
                    ))}
                  </p>
                  <a href={exp.link} className="text-primary hover:text-accent inline-flex items-center text-sm font-medium group">
                    {exp.description} <ArrowRight className="ml-1 h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>



        <div className="mt-12">
          <p className="text-gray-600 text-sm font-medium">
            More details are in my <a href="/resume.pdf" className="text-primary hover:underline">resume</a>.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
