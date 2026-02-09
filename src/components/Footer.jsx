import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../Data';

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
        <div>
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            {portfolioData.hero.name.split(' ')[0]}<span className="text-white">.</span>
          </div>
          <p className="text-gray-500 max-w-xs text-sm mx-auto md:mx-0">
            Building the future of the web, one pixel at a time. Let's create something extraordinary.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6">
            <a href="https://github.com/Ravinder2001" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ravinder-singh-negi-3444bb1a6/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
              <Linkedin size={20} />
            </a>
            <a href="mailto:rvnegi786@gmail.com" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-gray-600 text-xs uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} {portfolioData.hero.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
