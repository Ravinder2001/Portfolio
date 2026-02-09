import React from 'react';
import { portfolioData } from '../Data';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 mx-4 my-4 rounded-2xl flex justify-between items-center text-sm md:text-base">
      <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        {portfolioData.hero.name.split(' ')[0]}<span className="text-white">.</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium">
        {['About', 'Experience', 'Projects', 'Skills', 'Awards'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
            {item}
          </a>
        ))}
      </div>
      <a 
        href="mailto:rvnegi786@gmail.com"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:px-5 md:py-2 rounded-full text-xs md:text-sm transition-all shadow-lg shadow-blue-500/20"
      >
        Contact Me
      </a>
    </nav>
  );
};

export default Navbar;
