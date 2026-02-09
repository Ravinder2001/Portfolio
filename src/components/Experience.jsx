import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../Data';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0c0c0c]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 text-blue-400 mb-4">
            <Briefcase size={20} />
            <span className="uppercase tracking-widest text-sm font-bold">Journey</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Professional Experience</h2>
        </div>

        <div className="relative">
          <div className="timeline-trunk"></div>
          
          <div className="space-y-12 md:space-y-0">
            {portfolioData.experience.map((exp, expIdx) => (
              <div key={expIdx} className={`relative flex flex-col md:flex-row items-center md:items-start ${expIdx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Connector Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 w-4 h-4 rounded-full bg-blue-500 border-4 border-background z-10"></div>
                
                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${expIdx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: expIdx % 2 === 0 ? -50 : 50 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass p-8 rounded-3xl relative overflow-hidden group"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-xl object-contain bg-white/5 p-2" />
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-wide">{exp.company}</h3>
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      {exp.roles.map((role, roleIdx) => (
                        <div key={roleIdx} className="relative pl-6 border-l-2 border-white/10 group/role">
                          <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-gray-600 group-hover/role:bg-blue-400 transition-colors"></div>
                          <h4 className="text-lg font-bold text-white">{role.title}</h4>
                          <span className="text-blue-400/80 text-xs font-bold uppercase tracking-widest">{role.period}</span>
                          <p className="text-gray-500 mt-2 text-sm leading-relaxed">{role.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
