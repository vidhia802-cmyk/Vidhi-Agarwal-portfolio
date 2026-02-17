
import React from 'react';

const About: React.FC = () => {
  const skills = [
    "Graphic Design", "Illustration", "UI/UX Design", 
    "Visual Storytelling", "Brand Identity", "Photography"
  ];

  const interests = [
    "Traveling", "Stranger Conversations", "New Mediums", 
    "Café Culture", "Experimental Typography"
  ];

  return (
    <div className="py-24 px-6 max-w-6xl mx-auto fade-in">
      <div className="mb-20 text-center">
        <h2 className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-6">Introduction</h2>
        <p className="text-4xl md:text-6xl font-serif italic max-w-4xl mx-auto leading-tight">
          "I believe the best designs happen when you're busy making mistakes and talking to strangers."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        <div className="md:col-span-7 space-y-12">
          <div className="text-gray-700 space-y-8 leading-relaxed text-xl font-light">
            <p className="font-serif italic text-3xl text-black">hellu! I am vidhi,</p>
            <p>
              I am a 4th semester Communication Design student from <span className="font-medium text-black">UID</span>, currently fuelled by equal parts of caffeine and curiosity.
            </p>
            <p>
              When I’m not staring at my laptop screen trying out a new medium, you’ll find me travelling to places I’ve never been, sitting in a cafe probably talking to a stranger or doing something stupid to embarrass myself.
            </p>
            <p className="border-l-2 border-black pl-8 py-2 italic text-gray-500">
              My goal is to stay versatile, and maybe eventually figure out what my 'favourite' thing is. (spoiler: it’s probably whatever I’m working on right now.)
            </p>
            <p className="text-black font-serif italic text-2xl">
              So let’s build something together, or at least grab a coffee and talk about it.
            </p>
          </div>

          <div className="pt-12 border-t border-gray-100 grid grid-cols-2 gap-8">
            <div>
               <h4 className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">Current Location</h4>
               <p className="text-sm font-medium">Gandhinagar / Gujarat</p>
            </div>
            <div>
               <h4 className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">Education</h4>
               <p className="text-sm font-medium">UID, Semester 4</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 space-y-16">
          <section>
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-8 border-b border-gray-100 pb-2">Technical Toolkit</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {skills.map(skill => (
                <span key={skill} className="text-lg font-serif italic hover:tracking-widest transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-8 border-b border-gray-100 pb-2">Heart & Soul</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {interests.map(interest => (
                <span key={interest} className="text-lg font-serif italic hover:tracking-widest transition-all cursor-default">
                  {interest}
                </span>
              ))}
            </div>
          </section>

          <div className="bg-gray-50 p-8 space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest text-black font-bold">The Manifesto</h4>
            <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-widest">
              Design is not a destination. It is a constant state of flux. 
              Be curious. Be loud. Be quiet. Be versatile. 
              But most importantly, be present.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
