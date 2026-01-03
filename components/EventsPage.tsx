
import React, { useEffect, useRef } from 'react';
import { EVENTS } from '../constants';

const EventsPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleEventClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    window.history.pushState({}, '', link);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return { text: 'PRÓXIMAMENTE', classes: 'bg-gold border-gold' };
      case 'private':
        return { text: 'PRIVADO', classes: 'bg-white/10 border-white/20 backdrop-blur-md' };
      default:
        return { text: 'FINALIZADO', classes: 'bg-white/5 border-white/10 text-white/40' };
    }
  };

  return (
    <div ref={sectionRef} className="bg-[#050505] text-white min-h-screen pt-24 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <header className="mb-12 text-left">
          <button 
            onClick={onBack}
            className="mb-8 inline-flex items-center gap-3 text-gold hover:text-white transition-all uppercase text-[10px] font-black tracking-[0.4em] group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            BACK TO HUB
          </button>
          
          <span className="reveal text-gold text-[10px] font-black tracking-[0.5em] uppercase mb-4 block italic">Elite Calendar</span>
          <h1 className="reveal text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-6">
            CALENDARIO <br/> <span className="text-white">DE EVENTOS</span>
          </h1>
          <p className="reveal text-white/30 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed max-w-2xl">
            Desde experiencias exclusivas NBA hasta programas de tecnificación de alto rendimiento. <br className="hidden md:block"/> El epicentro del baloncesto profesional en Europa.
          </p>
        </header>

        {/* Events Grid - Redesigned more compact cards for PC */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((event) => {
            const badge = getStatusBadge(event.status);
            return (
              <div 
                key={event.id} 
                className="reveal group relative bg-[#111] rounded-[2rem] overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-700 flex flex-col h-[480px] md:h-[520px] shadow-2xl"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-30 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col h-full p-8 justify-between">
                  {/* Top: Status Badge */}
                  <div>
                    <span className={`inline-block px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-[0.2em] border ${badge.classes}`}>
                      {badge.text}
                    </span>
                  </div>
                  
                  {/* Bottom: Information */}
                  <div className="space-y-5">
                    <div>
                      {event.category && (
                        <span className="text-gold text-[9px] font-black italic uppercase tracking-[0.3em] mb-1.5 block animate-pulse">
                          {event.category}
                        </span>
                      )}
                      <h3 className="text-3xl font-black uppercase italic tracking-tighter leading-none group-hover:text-gold transition-colors duration-500 transform group-hover:-skew-x-6 inline-block origin-left">
                        {event.title}
                      </h3>
                    </div>

                    <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.15em] leading-relaxed line-clamp-2 md:line-clamp-3">
                      {event.description}
                    </p>
                    
                    <button 
                      onClick={(e) => handleEventClick(e as any, event.link)}
                      className="group/btn flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-[9px] font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-white transition-all transform hover:scale-105 shadow-xl"
                    >
                      Ver Detalles
                      <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M14 5l7 7-7 7M3 12h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
