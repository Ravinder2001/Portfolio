import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Cpu,
  Activity,
  Scan,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { portfolioData } from '../Data';

const iconMap = {
  'smart-connect': Cpu,
  ezengage: Activity,
  'smart-lead-capture': Scan,
};

const ProfessionalProjects = () => {
  const projects = portfolioData.professionalProjects || [];
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id || 'smart-connect');

  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];
  const ProjectIcon = iconMap[activeProject?.id] || Briefcase;

  return (
    <section id="professional-projects" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-400 mb-3">
            <Briefcase size={20} />
            <span className="uppercase tracking-widest text-sm font-bold">
              Work Experience & Client Systems
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Professional Projects
          </h2>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-400 glass px-4 py-2 rounded-full border border-white/10">
          <Lock size={14} className="text-amber-400" />
          <span>Client names & UI screens confidential per NDA</span>
        </div>
      </div>

      {/* 3 Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {projects.map((project, idx) => {
          const isActive = project.id === activeProjectId;
          const CardIcon = iconMap[project.id] || Briefcase;

          return (
            <button
              key={project.id}
              onClick={() => setActiveProjectId(project.id)}
              className={`text-left p-5 rounded-2xl transition-all duration-300 relative border ${
                isActive
                  ? 'glass border-blue-500/70 bg-white/[0.08] shadow-[0_0_25px_rgba(59,130,246,0.18)]'
                  : 'glass border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-t-2xl" />
              )}
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`p-2.5 rounded-xl border ${
                    isActive
                      ? 'bg-blue-500/20 border-blue-500/40 text-blue-300'
                      : 'bg-white/5 border-white/10 text-gray-400'
                  }`}
                >
                  <CardIcon size={20} />
                </div>
                <span className="text-[11px] font-mono font-bold text-gray-400">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                {project.name}
              </h3>
              <p className="text-xs text-blue-400/90 font-medium mb-1.5">
                {project.client}
              </p>
              <div className="flex items-center gap-1 text-[10px] text-gray-400">
                <Lock size={11} className="text-amber-400/90" />
                <span>Client name & UI confidential per NDA</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Project Details Card (Simple, Crisp, Clean) */}
      <AnimatePresence mode="wait">
        {activeProject && (
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-3xl p-6 sm:p-8 md:p-10 border border-white/15 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl glass border border-blue-500/30 text-blue-400 shrink-0">
                  <ProjectIcon size={26} />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeProject.name}
                  </h3>
                  <p className="text-blue-300/90 text-sm font-medium">
                    {activeProject.tagline}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-medium">
                  {activeProject.client}
                </span>
              </div>
            </div>

            {/* Short Project Summary */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              {activeProject.summary}
            </p>

            {/* Key Work Highlights List */}
            <div className="mb-8">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Key Modules & Contributions:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeProject.points.map((pt, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-start gap-2.5 glass p-3 rounded-xl border border-white/5 bg-white/[0.02]"
                  >
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-200 leading-snug">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.techstack.map((tech) => {
                  const techIcon = portfolioData.skills.find(
                    (s) => s.name === tech || tech.includes(s.name)
                  )?.icon;

                  return (
                    <div
                      key={tech}
                      className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-gray-200"
                    >
                      {techIcon && (
                        <img
                          src={techIcon}
                          alt={tech}
                          className={`w-3.5 h-3.5 object-contain ${tech.toLowerCase().includes('next') ? 'bg-white rounded-full p-[1px]' : ''}`}
                        />
                      )}
                      <span>{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProfessionalProjects;
