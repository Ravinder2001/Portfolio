import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../Data';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter italic">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {portfolioData.skills.filter(s => s.name).map((skill, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-6 rounded-2xl flex flex-col items-center gap-4 group cursor-default"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 relative">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all" />
              </div>
              <span className="text-xs md:text-sm font-bold text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
