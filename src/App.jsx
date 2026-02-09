import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  ExternalLink, 
  Github, 
  Mail, 
  Linkedin, 
  ChevronRight, 
  Award, 
  Code2, 
  Briefcase, 
  User 
} from 'lucide-react';
import { portfolioData } from './Data';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 mx-4 my-4 rounded-2xl flex justify-between items-center">
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
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
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm transition-all shadow-lg shadow-blue-500/20"
      >
        Contact Me
      </a>
    </nav>
  );
};

const Typewriter = ({ texts }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentIndex % texts.length];
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setSpeed(50);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex(currentIndex + 1);
        setSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, texts, speed]);

  return (
    <span className="text-blue-400 typewriter-cursor">{currentText}</span>
  );
};

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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          I'm {portfolioData.hero.name}, <br />
          <Typewriter texts={portfolioData.hero.typewriterText} />
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Crafting premium digital experiences through innovative code and modern design principles.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href={portfolioData.hero.resumeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-gray-200 transition-all"
          >
            <Download size={20} /> Download Resume
          </a>
          <a 
            href="#projects"
            className="flex items-center gap-2 glass px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition-all"
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
              className="relative rounded-2xl w-full aspect-[4/5] object-cover transition-all duration-700"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-2 text-blue-400 mb-4">
            <User size={20} />
            <span className="uppercase tracking-widest text-sm font-bold">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Designing with Purpose, Coding with Passion</h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            {portfolioData.about.bio}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {portfolioData.about.metrics.map((metric, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl text-center group hover:border-blue-500/50 transition-all">
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{metric.value}</div>
                <div className="text-gray-500 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0c0c0c]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 text-blue-400 mb-4">
            <Briefcase size={20} />
            <span className="uppercase tracking-widest text-sm font-bold">Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Professional Experience</h2>
        </div>

        <div className="relative">
          <div className="timeline-trunk"></div>
          
          <div className="space-y-12 md:space-y-0">
            {portfolioData.experience.map((exp, expIdx) => (
              <div key={expIdx} className={`relative flex flex-col md:flex-row items-center md:items-start ${expIdx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Connector Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 w-4 h-4 rounded-full bg-blue-500 border-4 border-background z-10"></div>
                
                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${expIdx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: expIdx % 2 === 0 ? -50 : 50 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass p-8 rounded-3xl relative overflow-hidden group"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-xl object-contain bg-white/5 p-2" />
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-wide">{exp.company}</h3>
                      </div>
                    </div>
                    
                    <div className="space-y-8">
                      {exp.roles.map((role, roleIdx) => (
                        <div key={roleIdx} className="relative pl-6 border-l-2 border-white/10 group/role">
                          <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-gray-600 group-hover/role:bg-blue-400 transition-colors"></div>
                          <h4 className="text-lg font-bold text-white">{role.title}</h4>
                          <span className="text-blue-400/80 text-xs font-bold uppercase tracking-widest">{role.period}</span>
                          <p className="text-gray-500 mt-2 text-sm leading-relaxed">{role.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-400 mb-4">
            <Code2 size={20} />
            <span className="uppercase tracking-widest text-sm font-bold">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
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
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">{project.title}</h3>
              <div className="flex gap-4">
                <a href={project.liveLink} className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-blue-400 hover:text-white transition-all">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.githubLink} className="glass px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-white/20 transition-all">
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

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter italic">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {portfolioData.skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-6 rounded-2xl flex flex-col items-center gap-4 group cursor-default"
            >
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all" />
              </div>
              <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Awards = () => {
  return (
    <section id="awards" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex justify-center items-center gap-2 text-blue-400 mb-4">
          <Award size={20} />
          <span className="uppercase tracking-widest text-sm font-bold">Recognition</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">Awards & Certifications</h2>
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
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                {award.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {award.description}
              </p>
              <div className="flex items-center gap-3 text-blue-400 font-bold text-sm uppercase tracking-[0.2em]">
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

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            {portfolioData.hero.name.split(' ')[0]}<span className="text-white">.</span>
          </div>
          <p className="text-gray-500 max-w-xs text-sm">
            Building the future of the web, one pixel at a time. Let's create something extraordinary.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6">
            <a href="https://github.com/Ravinder2001" target="_blank" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ravinder-singh-negi-3444bb1a6/" target="_blank" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
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

function App() {
  return (
    <div className="bg-background text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Awards />
      <Footer />
    </div>
  );
}

export default App;
