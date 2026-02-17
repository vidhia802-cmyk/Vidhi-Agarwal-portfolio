
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 max-w-6xl mx-auto fade-in relative overflow-hidden">
      {/* Background Decorative Quote */}
      <div className="absolute top-1/4 right-0 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <h2 className="text-[12rem] font-serif italic leading-none whitespace-nowrap">
          Caffeine & Curiosity
        </h2>
      </div>

      <div className="z-10 flex flex-col space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-8">
           <div className="space-y-2">
             <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400">Design Portfolio — Vol. 01</p>
             <h1 className="text-6xl md:text-9xl font-serif italic leading-[0.85] reveal-text">
               Vidhi Agarwal
             </h1>
           </div>
           <div className="mt-8 md:mt-0 text-right md:text-left">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">Status</p>
              <p className="text-sm font-medium italic">Exploring new mediums @ UID</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <p className="text-xl md:text-3xl font-light leading-relaxed text-gray-800">
              A Communication Design student currently fuelled by <span className="font-serif italic underline decoration-gray-200 underline-offset-8">equal parts</span> caffeine and curiosity.
            </p>
          </div>
          <div className="md:col-span-5 md:pl-12 flex flex-col justify-between h-full space-y-8">
            <p className="text-sm text-gray-400 leading-relaxed font-light italic">
              "The goal isn't just to make things look good, but to make them feel like they belong to a story."
            </p>
            <div className="flex items-center space-x-6">
              <Link 
                to="/work" 
                className="group relative inline-flex items-center overflow-hidden border border-black px-10 py-4 transition-all hover:bg-black"
              >
                <span className="relative z-10 text-xs uppercase tracking-widest transition-colors group-hover:text-white">Enter Space</span>
              </Link>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Gandhinagar, IN</span>
                <span className="text-sm font-serif italic">{time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
