import React from 'react';
import { User } from 'lucide-react';
import { portfolioData } from '../Data';

const getExactExperience = (startDateStr = '2022-03-07') => {
  const start = new Date(startDateStr);
  const today = new Date();

  let years = today.getFullYear() - start.getFullYear();
  let months = today.getMonth() - start.getMonth();
  let days = today.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonthDays;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
};

const About = () => {
  const { years, months, days } = getExactExperience('2022-03-07');

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center justify-between">
        <div className="w-full md:w-5/12 lg:w-4/12 flex justify-center">
          <div className="relative group w-full max-w-xs sm:max-w-sm">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <img 
              src={portfolioData.about.image} 
              alt="About Me" 
              className="relative rounded-2xl w-full aspect-[4/5] object-cover transition-all duration-700 shadow-2xl"
            />
          </div>
        </div>
        <div className="w-full md:w-7/12 lg:w-8/12">
          <div className="flex items-center gap-2 text-blue-400 mb-4">
            <User size={20} />
            <span className="uppercase tracking-widest text-sm font-bold">About Me</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic underline-offset-8">Engineering with Purpose, Coding with Passion</h2>
          <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed">
            {portfolioData.about.bio}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {portfolioData.about.metrics.map((metric, idx) => {
              if (metric.label.toLowerCase().includes("experience")) {
                return (
                  <div key={idx} className="glass p-6 rounded-2xl text-center group hover:border-blue-500/50 transition-all flex flex-col justify-center">
                    <div className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors flex items-baseline justify-center flex-wrap gap-x-1.5 gap-y-0.5">
                      <span>{years} {years === 1 ? 'Year' : 'Years'}</span>
                      <span>{months} {months === 1 ? 'Month' : 'Months'}</span>
                      <span className="text-xs font-normal text-blue-400/90">
                        {days} {days === 1 ? 'day' : 'days'}
                      </span>
                    </div>
                    <div className="text-gray-400 text-xs md:text-sm font-medium">Experience (since 7 Mar 2022)</div>
                  </div>
                );
              }
              return (
                <div key={idx} className="glass p-6 rounded-2xl text-center group hover:border-blue-500/50 transition-all flex flex-col justify-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {metric.value}
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
