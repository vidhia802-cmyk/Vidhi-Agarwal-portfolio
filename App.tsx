
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white selection:bg-black selection:text-white">
        <Navbar />
        <main className="flex-grow mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="py-12 px-6 border-t border-gray-100">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-[10px] uppercase tracking-[0.2em]">
            <div>© {new Date().getFullYear()} Vidhi Agarwal</div>
            <div className="mt-4 md:mt-0">Communication Design | UID Gandhinagar</div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
