import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { portfolioData } from '../Data';
import Typewriter from './Typewriter';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 mesh-gradient flex flex-col items-center justify-center text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <div className="mb-6 inline-block glass px-4 py-1.5 rounded-full text-sm font-medium text-blue-300">
          Available for new opportunities
        </div>
        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
          I'm {portfolioData.hero.name}, <br />
          <Typewriter texts={portfolioData.hero.typewriterText} />
        </h1>
        <p className="text-gray-400 text-base md:text-xl mb-10 max-w-2xl mx-auto">
          Crafting premium digital experiences through innovative code and modern design principles.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href={portfolioData.hero.resumeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black px-6 py-3 md:px-8 md:py-3.5 rounded-full font-bold hover:bg-gray-200 transition-all text-sm md:text-base"
          >
            <Download size={20} /> Download Resume
          </a>
          <a 
            href="#projects"
            className="flex items-center gap-2 glass px-6 py-3 md:px-8 md:py-3.5 rounded-full font-bold hover:bg-white/10 transition-all text-sm md:text-base"
          >
            View Work
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-16 md:mt-24 relative"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
        <img 
          src={portfolioData.hero.image} 
          alt="Hero" 
          className="relative w-48 h-48 md:w-64 md:h-64 object-contain animate-float"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
