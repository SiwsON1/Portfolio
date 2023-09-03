import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/views/Header/Header';
import AboutMe from './components/pages/AboutMe/AboutMe';
import Projects from './components/pages/Projects/Projects';
import Masik from './components/pages/Masik/Masik';
import Skills from "./components/features/Skills/Skills";



function App() {


  return (
    <div className="font-neueMontreal text-white bg-site1 h-full w-full bg-cover bg-center min-h-screen">
      <div className="container mx-auto px-4">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Masik />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </Router>
      </div>
    </div>

  );
}

export default App;