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
          <h2 className="text-3xl md:text-5xl font-bold">Featured Projects</h2>
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
            <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-8">
              <div className="flex gap-4 mb-6">
                {project.techstack.map((tech) => {
                  const techIcon = portfolioData.skills.find(s => s.name === tech || tech.includes(s.name))?.icon;
                  return (
                    <div key={tech} className="w-10 h-10 bg-white/10 rounded-xl p-2 backdrop-blur-md" title={tech}>
                      <img src={techIcon || `https://via.placeholder.com/40?text=${tech}`} alt={tech} className="w-full h-full object-contain" />
                    </div>
                  );
                })}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 uppercase tracking-wider text-center">{project.title}</h3>
              <div className="flex gap-4">
                <a href={project.liveLink} target="_blank" className="bg-white text-black px-6 py-2 rounded-full font-bold text-xs md:text-sm flex items-center gap-2 hover:bg-blue-400 hover:text-white transition-all">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.githubLink} target="_blank" className="glass px-6 py-2 rounded-full font-bold text-xs md:text-sm flex items-center gap-2 hover:bg-white/20 transition-all">
                  <Github size={16} /> Source
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
