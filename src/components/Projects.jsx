import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { portfolioData } from '../Data';

const Projects = () => {
  const [activeModal, setActiveModal] = useState(null); // { projectIdx, screenIdx }

  // Keyboard navigation for full-screen preview
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeModal) return;
      if (e.key === 'Escape') setActiveModal(null);
      if (e.key === 'ArrowRight') {
        setActiveModal((prev) =>
          prev
            ? {
                ...prev,
                screenIdx:
                  (prev.screenIdx + 1) %
                  portfolioData.projects[prev.projectIdx].screens.length,
              }
            : null
        );
      }
      if (e.key === 'ArrowLeft') {
        setActiveModal((prev) =>
          prev
            ? {
                ...prev,
                screenIdx:
                  (prev.screenIdx -
                    1 +
                    portfolioData.projects[prev.projectIdx].screens.length) %
                  portfolioData.projects[prev.projectIdx].screens.length,
              }
            : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal]);

  const currentProject = activeModal ? portfolioData.projects[activeModal.projectIdx] : null;
  const currentScreen = currentProject && currentProject.screens ? currentProject.screens[activeModal.screenIdx] : null;

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-400 mb-4">
            <Code2 size={20} />
            <span className="uppercase tracking-widest text-sm font-bold">Featured Projects & Architecture</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Personal Projects</h2>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400 glass px-4 py-2 rounded-full">
          <Sparkles size={16} className="text-amber-400" />
          <span>Branching Feature Breakdown • Click Any Screen to Zoom</span>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-24">
        {portfolioData.projects.map((project, pIdx) => (
          <div key={pIdx} className="space-y-12">
            {/* Project Hero Header Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden border border-white/10"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
                    <Layers size={16} /> Flagship Project
                  </div>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {project.techstack.map((tech) => {
                      const techIcon = portfolioData.skills.find(
                        (s) => s.name === tech || tech.includes(s.name)
                      )?.icon;
                      return (
                        <div
                          key={tech}
                          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-200 transition-colors"
                        >
                          {techIcon && (
                            <img src={techIcon} alt={tech} className={`w-4 h-4 object-contain ${tech.toLowerCase().includes('next') ? 'bg-white rounded-full p-[1px]' : ''}`} />
                          )}
                          <span>{tech}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Action Links */}
                <div className="flex flex-row flex-nowrap sm:flex-wrap lg:flex-col gap-2.5 sm:gap-3 w-full lg:w-auto shrink-0">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap hover:bg-gray-200 transition-all shadow-lg hover:shadow-blue-500/20"
                    >
                      <ExternalLink size={16} className="shrink-0" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 lg:flex-none flex items-center justify-center gap-2 glass px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap hover:bg-white/15 transition-all text-white"
                    >
                      <Github size={16} className="shrink-0" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Branching Screens Tree (Visible on all screen sizes) */}
            {project.screens && project.screens.length > 0 && (
              <div className="relative py-2 sm:py-4">
                {/* Central Branch Spine (Desktop & Mobile) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-amber-500 opacity-40"></div>

                <div className="space-y-8 sm:space-y-10 md:space-y-12">
                  {project.screens.map((screen, sIdx) => {
                    const isEven = sIdx % 2 === 0;
                    return (
                      <div
                        key={sIdx}
                        className={`relative flex items-center ${
                          isEven ? 'flex-row' : 'flex-row-reverse'
                        }`}
                      >
                        {/* Step Marker Node on Central Spine */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full glass border border-blue-500/80 bg-[#0a0a0a] flex items-center justify-center font-bold text-[10px] sm:text-xs md:text-sm text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.35)] z-20">
                          {screen.step}
                        </div>

                        {/* Column 1: Phone Mockup with Click-to-Zoom */}
                        <div
                          className={`w-1/2 flex justify-center items-center ${
                            isEven
                              ? 'pr-3.5 sm:pr-8 md:pr-12'
                              : 'pl-3.5 sm:pl-8 md:pl-12'
                          }`}
                        >
                          <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            onClick={() => setActiveModal({ projectIdx: pIdx, screenIdx: sIdx })}
                            className="group relative w-full max-w-[145px] sm:max-w-[175px] md:max-w-[210px] lg:max-w-[230px] mx-auto cursor-pointer"
                          >
                            {/* Subtle Ambient Glow */}
                            <div className="absolute -inset-2.5 bg-gradient-to-r from-blue-600/25 to-purple-600/25 rounded-[2.2rem] blur-xl opacity-20 group-hover:opacity-75 transition-opacity duration-500"></div>

                            {/* Phone Chassis */}
                            <div className="relative rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.4rem] p-1.5 sm:p-2 glass border border-white/25 bg-[#0c0c10] shadow-[0_15px_35px_rgba(0,0,0,0.85)] group-hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                              {/* Dynamic Island / Notch */}
                              <div className="w-14 sm:w-18 md:w-22 h-2.5 sm:h-3.5 bg-black rounded-full mx-auto mb-1.5 sm:mb-2 flex items-center justify-center gap-1 border border-white/10 shadow-inner">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#111e38]"></div>
                                <div className="w-1 h-1 rounded-full bg-[#0a0a0a]"></div>
                              </div>

                              {/* Screen Viewport */}
                              <div className="relative overflow-hidden rounded-[1.1rem] sm:rounded-[1.5rem] md:rounded-[1.8rem] bg-black aspect-[9/19.5] border border-white/10">
                                <img
                                  src={screen.image}
                                  alt={screen.title}
                                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                  loading="lazy"
                                />

                                {/* Hover Zoom Cue Overlay */}
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1.5">
                                  <div className="p-2 rounded-full bg-blue-500 text-white shadow-lg">
                                    <ZoomIn size={16} />
                                  </div>
                                  <span className="text-[10px] sm:text-xs font-bold text-white tracking-wide drop-shadow-md">
                                    View Full Screen
                                  </span>
                                </div>
                              </div>

                              {/* Home Indicator */}
                              <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-white/30 rounded-full mx-auto mt-1.5 sm:mt-2"></div>
                            </div>
                          </motion.div>
                        </div>

                        {/* Column 2: Compact Story & Architecture Card */}
                        <div
                          className={`w-1/2 flex flex-col justify-center ${
                            isEven
                              ? 'pl-3.5 sm:pl-8 md:pl-12'
                              : 'pr-3.5 sm:pr-8 md:pr-12'
                          }`}
                        >
                          <motion.div
                            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="glass p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl border border-white/10 relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300 w-full max-w-lg"
                          >
                            <div className="flex items-center gap-1.5 mb-1.5 sm:mb-2.5">
                              <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] sm:text-[11px] md:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                {screen.tag}
                              </span>
                            </div>

                            <h4 className="text-xs sm:text-base md:text-xl font-bold text-white mb-1.5 group-hover:text-blue-300 transition-colors leading-snug">
                              {screen.title}
                            </h4>

                            <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm leading-relaxed mb-2.5 sm:mb-4 line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
                              {screen.description}
                            </p>

                            {/* Highlight Points */}
                            <div className="space-y-1 sm:space-y-1.5 pt-2 sm:pt-3 border-t border-white/5">
                              {screen.highlights.map((h, hIdx) => (
                                <div
                                  key={hIdx}
                                  className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-xs md:text-sm text-gray-300"
                                >
                                  <CheckCircle2
                                    size={12}
                                    className="text-blue-400 shrink-0 sm:w-3.5 sm:h-3.5"
                                  />
                                  <span className="truncate">{h}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Interactive Lightbox Modal for High-Resolution View */}
      <AnimatePresence>
        {activeModal && currentScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative glass border border-white/20 rounded-3xl p-5 sm:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#0a0a0d] shadow-2xl flex flex-col md:flex-row items-center gap-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-white/20 text-gray-300 hover:text-white transition-all z-20"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Full-Resolution Screenshot View */}
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] shrink-0 mx-auto">
                <div className="relative rounded-[2.2rem] p-2 glass border border-white/25 bg-[#0a0a0d] shadow-2xl overflow-hidden">
                  <img
                    src={currentScreen.image}
                    alt={currentScreen.title}
                    className="w-full h-auto max-h-[68vh] object-contain rounded-[1.8rem] block mx-auto shadow-lg"
                  />
                </div>
              </div>

              {/* Screen Details & Navigation Controls */}
              <div className="flex-1 flex flex-col justify-between w-full">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-500/20 text-blue-400 font-mono text-xs font-bold px-2.5 py-1 rounded-full border border-blue-500/30">
                      Module {currentScreen.step} of 05
                    </span>
                    <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
                      {currentScreen.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {currentScreen.title}
                  </h3>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {currentScreen.description}
                  </p>

                  <div className="space-y-2 mb-8 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <h5 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Key Architecture Highlights:</h5>
                    {currentScreen.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                        <CheckCircle2 size={15} className="text-blue-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next / Previous Screen Navigation Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    onClick={() =>
                      setActiveModal((prev) => ({
                        ...prev,
                        screenIdx:
                          (prev.screenIdx - 1 + currentProject.screens.length) %
                          currentProject.screens.length,
                      }))
                    }
                    className="flex items-center gap-1 text-xs sm:text-sm text-gray-300 hover:text-white glass px-4 py-2 rounded-full transition-all"
                  >
                    <ChevronLeft size={16} /> Previous Screen
                  </button>

                  <button
                    onClick={() =>
                      setActiveModal((prev) => ({
                        ...prev,
                        screenIdx:
                          (prev.screenIdx + 1) % currentProject.screens.length,
                      }))
                    }
                    className="flex items-center gap-1 text-xs sm:text-sm bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-full transition-all"
                  >
                    Next Screen <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

