
import React, { useState } from 'react';
import { Project } from '../types';

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Illustration',
      category: 'Digital Medium — Character Design',
      // Using the provided header image for the thumbnail
      imageUrl: 'illustration_header.jpg', 
      description: 'An extensive exploration of character design for JK Rowling\'s "The Wizard and the Hopping Pot". This project documents the complete creative process from initial "vomiting phase" sketches to final model sheets and narrative resolution.'
    },
    {
        id: '2',
        title: 'Coming Soon',
        category: 'Graphic Design — Identity',
        imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1000',
        description: 'New work arriving shortly. Currently in the research and prototyping phase.'
    },
    {
        id: '3',
        title: 'Coming Soon',
        category: 'UI/UX — Experience',
        imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000',
        description: 'Stay tuned for a digital experience focused on human connection.'
    }
  ];

  return (
    <div className="py-24 px-6 max-w-6xl mx-auto fade-in">
      <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between space-y-6 md:space-y-0">
        <div>
          <h2 className="text-5xl font-serif italic mb-4 leading-none">The Workspace</h2>
          <p className="text-gray-400 text-[10px] tracking-[0.4em] uppercase">Archive 023 // 024</p>
        </div>
        <p className="text-sm text-gray-400 max-w-xs italic font-light">
          A collection of pixels, sketches, and thoughts brought to life.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div 
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer"
          >
            {/* Aspect ratio changed to 16:9 (aspect-video) */}
            <div className="aspect-video overflow-hidden bg-gray-50 relative mb-6">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0`}
                onError={(e) => {
                  // Fallback if specific local images aren't found
                  if(project.id === '1') (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000';
                }}
              />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity" />
              {project.id === '1' && (
                <div className="absolute bottom-4 left-4">
                   <span className="text-[8px] uppercase tracking-widest bg-black text-white px-2 py-1">Process Scroll</span>
                </div>
              )}
            </div>
            <div className="space-y-2 px-1">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-serif italic leading-none">{project.title}</h3>
                <span className="text-[10px] text-gray-300">0{project.id}</span>
              </div>
              <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">{project.category}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] bg-white flex flex-col overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          {/* Progress bar for long scroll */}
          {selectedProject.id === '1' && (
             <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-[120]">
                <div className="h-full bg-black transition-all duration-300 w-0" id="scroll-progress"></div>
             </div>
          )}

          <button 
            className="fixed top-8 right-8 text-black text-[10px] uppercase tracking-[0.3em] z-[110] bg-white/80 backdrop-blur px-6 py-3 border border-gray-100 hover:bg-black hover:text-white transition-all font-medium"
            onClick={() => setSelectedProject(null)}
          >
            Close Project
          </button>
          
          <div className="max-w-4xl mx-auto py-32 px-6 w-full" onClick={e => e.stopPropagation()}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 items-end">
              <div className="md:col-span-8">
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mb-4">{selectedProject.category}</p>
                <h2 className="text-7xl font-serif italic mb-6 leading-none">{selectedProject.title}</h2>
                <p className="text-lg text-gray-500 max-w-xl font-light leading-relaxed">{selectedProject.description}</p>
              </div>
              <div className="md:col-span-4 text-right">
                 <p className="text-[10px] text-gray-300 uppercase tracking-widest">UID Gandhinagar</p>
                 <p className="text-sm font-serif italic">Communication Design — Semester 4</p>
              </div>
            </div>
            
            <div className="w-full">
              {selectedProject.id === '1' ? (
                <div className="flex flex-col items-center bg-[#fdfdfd] p-4 md:p-12 shadow-inner border border-gray-50">
                  <img 
                    src="scroll.jpg" 
                    alt="Illustration Process Scroll" 
                    className="w-full h-auto grayscale-0 shadow-lg"
                    onError={(e) => {
                       // Visual representation if file is missing in preview
                       (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000';
                    }}
                  />
                  
                  <div className="mt-20 py-12 border-t border-gray-100 w-full text-center">
                    <p className="font-serif italic text-2xl text-gray-400">End of Process</p>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-gray-50 flex items-center justify-center border border-gray-100 italic text-gray-300 text-xl font-serif p-12 text-center">
                   This project domain is currently being curated.<br/>Check back soon.
                </div>
              )}
            </div>

            <footer className="mt-32 pt-12 border-t border-gray-100 flex justify-between items-center">
               <button 
                 onClick={() => setSelectedProject(null)}
                 className="text-[10px] uppercase tracking-widest hover:underline"
               >
                 Back to Archive
               </button>
               <div className="flex items-center space-x-4">
                  <p className="text-[10px] text-gray-400 italic">Vidhi Agarwal</p>
                  <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
               </div>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
