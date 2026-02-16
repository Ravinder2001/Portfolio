import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../Data';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-400 mb-4">
            <Code2 size={20} />
            <span className="uppercase tracking-widest text-sm font-bold">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Personal Projects</h2>
        </div>
        <button className="text-blue-400 font-bold flex items-center gap-2 hover:gap-4 transition-all pb-2 border-b-2 border-blue-400/20">
          View All Projects <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {portfolioData.projects.map((project, idx) => (
          <motion.div 
            key={idx}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="group relative rounded-3xl overflow-hidden glass aspect-video"
          >
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-900/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-4 md:p-8 text-center">
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4 uppercase tracking-wider">{project.title}</h3>
              
              {project.summary && (
                <p className="text-gray-300 text-xs md:text-base mb-4 line-clamp-4 md:line-clamp-none">
                  {project.summary}
                </p>
              )}

              <div className="flex gap-3 mb-4 md:mb-6 flex-wrap justify-center">
                {project.techstack.map((tech) => {
                  const techIcon = portfolioData.skills.find(s => s.name === tech || tech.includes(s.name))?.icon;
                  return (
                    <div key={tech} className="w-8 h-8 bg-white/10 rounded-lg p-1.5 backdrop-blur-md" title={tech}>
                      <img src={techIcon || `https://via.placeholder.com/40?text=${tech}`} alt={tech} className="w-full h-full object-contain" />
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-3 md:gap-4 flex-wrap justify-center">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-4 py-2 md:px-6 rounded-full font-bold text-[10px] md:text-sm flex items-center gap-2 hover:bg-blue-400 hover:text-white transition-all">
                    <ExternalLink size={14} className="md:w-4 md:h-4" /> Live Demo
                  </a>
                )}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="glass px-4 py-2 md:px-6 rounded-full font-bold text-[10px] md:text-sm flex items-center gap-2 hover:bg-white/20 transition-all">
                  <Github size={14} className="md:w-4 md:h-4" /> Source
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
