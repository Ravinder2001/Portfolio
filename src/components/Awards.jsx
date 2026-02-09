import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { portfolioData } from '../Data';

const Awards = () => {
  return (
    <section id="awards" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex justify-center items-center gap-2 text-blue-400 mb-4">
          <Award size={20} />
          <span className="uppercase tracking-widest text-sm font-bold">Recognition</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold">Awards & Certifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {portfolioData.awards.map((award, idx) => (
          <motion.div 
            key={idx}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            className="glass group p-6 rounded-[2.5rem] flex flex-col gap-8 transition-all hover:border-blue-500/30"
          >
            <div className="w-full aspect-video rounded-[1.8rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
              <img 
                src={award.image} 
                alt={award.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
            </div>
            <div className="px-4 pb-4">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                {award.title}
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                {award.description}
              </p>
              <div className="flex items-center gap-3 text-blue-400 font-bold text-xs md:text-sm uppercase tracking-[0.2em]">
                <div className="w-10 h-1 bg-blue-500/20 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-blue-500"></div>
                </div>
                <span>Credential Verified</span>
                <span className="text-white/20">•</span>
                <span>{award.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
