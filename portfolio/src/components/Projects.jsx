import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Layout, Smartphone } from 'lucide-react';

const projects = [
  {
    icon: <BarChart3 className="h-16 w-16 text-gray-300" />,
    title: 'Power Up',
    subtitle: 'Interview task for D.E. Shaw',
    description: 'Helping traders efficiently analyse data and collaborate with their team.',
    link: '#'
  },
  {
    icon: <Layout className="h-16 w-16 text-gray-300" />,
    title: 'Skipped!',
    subtitle: 'Runner up in the Data Visualization Society Challenge',
    description: 'Identifying ways to improve survey design by analysing survey responses.',
    link: '#'
  },
  {
    icon: <Smartphone className="h-16 w-16 text-gray-300" />,
    title: 'Parental Engagement in Rural India',
    subtitle: '2nd place at the CHI 2020 SRC',
    description: 'Designing and testing an intervention to help low-literate parents in semi-rural India engage with their child\'s education.',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-12">HERE ARE MY PROJECTS</h3>

        <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-10 md:gap-16"
              >
                <div className="flex-shrink-0">
                  {/* Placeholder for project illustration */}
                  <div className="w-full md:w-72 h-48 bg-white rounded-lg flex items-start justify-start">
                    {project.icon}
                  </div>
                </div>
                
                <div className="max-w-xl pt-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{project.subtitle}</p>
                  <p className="text-gray-900 mb-4 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  <a href={project.link} className="text-primary hover:text-accent inline-flex items-center text-sm font-bold group mt-2">
                    View project <ArrowRight className="ml-1 h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
