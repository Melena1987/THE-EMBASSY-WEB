
import React, { useEffect, useRef } from 'react';
import { EVENTS, LOGOS } from '../constants';

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

  return (
    <div ref={sectionRef} className="bg-black text-white min-h-screen pt-24 pb-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <header className="mb-12 text-left">
          <button 
            onClick={onBack}
            className="mb-8 inline-flex items-center gap-3 text-gold hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.3em] group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Volver al Inicio
          </button>
          
          <span className="reveal text-gold text-[10px] font-black tracking-[0.4em] uppercase mb-4 block italic">Elite Calendar</span>
          <h1 className="reveal text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-none mb-6 whitespace-nowrap overflow-hidden text-ellipsis">
            EVENTOS EMBASSY
          </h1>
          <p className="reveal text-white/40 text-[11px] md:text-xs font-medium uppercase tracking-[0.15em] leading-relaxed max-w-xl">
            Desde campus de tecnificación hasta eventos exclusivos de la NBA. <br className="hidden md:block"/> Descubre dónde se forja el futuro del baloncesto.
          </p>
        </header>

        {/* Events Grid - Ahora más compacto en PC */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {EVENTS.map((event) => (
            <div 
              key={event.id} 
              className="reveal group bg-neutral-900/40 rounded-[2rem] overflow-hidden border border-white/5 hover:border-gold/40 transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest border ${event.status === 'upcoming' ? 'bg-gold text-white border-gold' : 'bg-white/10 text-white/40 border-white/10'}`}>
                    {event.status === 'upcoming' ? 'PRÓXIMAMENTE' : 'FINALIZADO'}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-gold text-[9px] font-black tracking-[0.2em] uppercase mb-1 block italic">{event.date}</span>
                <h3 className="text-xl font-black uppercase italic tracking-tighter mb-4 group-hover:text-gold transition-colors leading-tight">{event.title}</h3>
                <p className="text-white/40 text-[10px] font-medium uppercase tracking-wider leading-relaxed mb-6 flex-grow line-clamp-3">
                  {event.description}
                </p>
                
                <a 
                  href={event.link}
                  className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.15em] hover:bg-gold hover:text-white transition-all w-fit"
                >
                  Ver detalles
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 5l7 7-7 7M3 12h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
