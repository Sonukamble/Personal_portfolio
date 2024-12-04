import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/navbar/Header"

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element="Home" />
        <Route path="/about" element="About" />
        <Route path="/projects" element="projects" />
        <Route path="/skills" element="skills" />
        <Route path="/contact" element="contact" />
      </Routes>
    </Router>
  );
};

export default App
