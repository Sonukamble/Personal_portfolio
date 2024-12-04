import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/navbar/Header"
import Home from './components/pages/Home';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div style={{ minHeight: '100vh', overflowY: 'auto', padding: 0 }}> {/* Added to allow scrolling */}
        {/* Sections that can be scrolled to */}
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </Router>
  );
};

export default App
