import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-surface-accent/30 rounded-xl px-8 md:px-12 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-12">A BIT ABOUT ME</h3>

        <div className="space-y-12">
            <div>
              <h4 className="text-gray-500 text-sm mb-3 font-medium">What kind of work do I do?</h4>
              <p className="text-gray-900 font-serif italic text-lg leading-relaxed">
                I like to work within complex spaces to create simple experiences for users. My work always focuses on the end-to-end experience for users that addresses all touchpoints. I enjoy and often find myself optimising processes within the team.
              </p>
            </div>

            <div>
              <h4 className="text-gray-500 text-sm mb-3 font-medium">What do I do other than my full-time job?</h4>
              <p className="text-gray-900 font-serif italic text-lg leading-relaxed">
                I <span className="font-bold not-italic font-sans">volunteer as a designer and developer</span> with The Apprentice Project - I taught middle school kids coding on Scratch, developed a tool for other mentors like me to give personalised badges to kids, and help out however else I can.
              </p>
            </div>

            <div>
              <h4 className="text-gray-500 text-sm mb-3 font-medium">What am I doing when I am not in front of a screen?</h4>
              <p className="text-gray-900 font-serif italic text-lg leading-relaxed">
                Mostly DIYing something either with pliers, crochet needles, brushes or sandpaper, figuring out when to water plants (still trying to get it right) or reading fiction.
              </p>
            </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8">
          <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">THANKS FOR STOPPING BY!</p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
