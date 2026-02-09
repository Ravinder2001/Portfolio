import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';

function App() {
  return (
    <div className="bg-background text-white selection:bg-blue-500/30 relative overflow-hidden">
      <CursorGlow />
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
