
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Index', path: '/' },
    { name: 'Story', path: '/about' },
    { name: 'Works', path: '/work' },
    { name: 'Talk', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md z-[90]">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-serif italic tracking-tight hover:opacity-50 transition-opacity">
          v.agarwal
        </Link>
        <div className="flex space-x-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] uppercase tracking-[0.3em] transition-all relative group ${
                location.pathname === link.path 
                  ? 'text-black font-bold' 
                  : 'text-gray-400 hover:text-black'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-black transition-all duration-500 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
