import React from 'react';
import { User } from 'lucide-react';
import { portfolioData } from '../Data';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <img 
              src={portfolioData.about.image} 
              alt="About Me" 
              className="relative rounded-2xl w-full aspect-[4/5] object-cover transition-all duration-700 shadow-2xl"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-2 text-blue-400 mb-4">
            <User size={20} />
            <span className="uppercase tracking-widest text-sm font-bold">About Me</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic underline-offset-8">Designing with Purpose, Coding with Passion</h2>
          <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed">
            {portfolioData.about.bio}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {portfolioData.about.metrics.map((metric, idx) => {
              let displayValue = metric.value;
              if (metric.label === "Years Experience") {
                const startDate = new Date('2022-03-07');
                const today = new Date();
                let years = today.getFullYear() - startDate.getFullYear();
                const m = today.getMonth() - startDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
                  years--;
                }
                displayValue = `${years}+`;
              }
              return (
                <div key={idx} className="glass p-6 rounded-2xl text-center group hover:border-blue-500/50 transition-all">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {displayValue}
                  </div>
                  <div className="text-gray-500 text-xs md:text-sm">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
