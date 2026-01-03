
import React, { useState, useRef } from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.children[0].clientWidth + 32; // width + gap
      const index = Math.round(scrollPosition / cardWidth);
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0].clientWidth + 32;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="equipo" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl reveal active">
            <span className="text-gold text-xs font-black tracking-[0.4em] uppercase mb-4 block italic">Elite Performance Staff</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase italic mb-6 tracking-tighter leading-none">NUESTRO <br/> EQUIPO</h2>
            <p className="text-white/40 text-base font-light uppercase tracking-widest leading-loose">
              Liderado por campeones del mundo y especialistas de élite, uniendo la visión global de la NBA con el rigor táctico europeo.
            </p>
          </div>
        </div>

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide no-scrollbar pb-4 md:pb-0"
          >
            {TEAM.map((member, idx) => (
              <div key={idx} className="reveal flex-none w-[85vw] md:w-auto snap-center group">
                <div className="relative overflow-hidden rounded-[2rem] mb-4 aspect-[4/5] bg-neutral-900 border border-white/5 group-hover:border-gold/30 transition-all duration-700">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                  
                  {/* Social overlay */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-500 delay-100">
                    {member.socials.instagram && (
                      <a href={member.socials.instagram} target="_blank" rel="noopener" className="w-9 h-9 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                      </a>
                    )}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                     <span className="text-gold text-[9px] font-black tracking-[0.3em] uppercase mb-2 block italic">{member.role}</span>
                     <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white leading-none">{member.name}</h3>
                  </div>
                </div>
                
                <div className="px-1">
                  <p className="text-white/40 font-medium text-xs leading-[1.6] uppercase tracking-[0.05em] mb-4 transition-all duration-500 line-clamp-3 group-hover:line-clamp-none">
                    {member.description}
                  </p>
                  <div className="h-[2px] w-8 bg-gold group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls for mobile */}
          <div className="flex flex-col md:hidden items-center gap-6 mt-8">
            <div className="flex justify-center gap-2">
              {TEAM.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => scrollToIndex(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-gold' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => scrollToIndex(activeIndex - 1)}
                disabled={activeIndex === 0}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center disabled:opacity-20 text-gold"
              >
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button 
                onClick={() => scrollToIndex(activeIndex + 1)}
                disabled={activeIndex === TEAM.length - 1}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center disabled:opacity-20 text-gold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;