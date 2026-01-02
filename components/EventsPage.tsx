
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
    <div ref={sectionRef} className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="mb-20 text-center lg:text-left">
          <button 
            onClick={onBack}
            className="mb-12 inline-flex items-center gap-3 text-gold hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.3em] group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Volver al Inicio
          </button>
          
          <span className="reveal text-gold text-xs font-black tracking-[0.5em] uppercase mb-6 block italic">Elite Calendar</span>
          <h1 className="reveal text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-8">EVENTOS <br/> <span className="text-white">EMBASSY</span></h1>
          <p className="reveal text-white/40 text-sm md:text-base font-medium uppercase tracking-[0.2em] leading-relaxed max-w-2xl">
            Desde campus de tecnificación hasta eventos exclusivos de la NBA. Descubre dónde se forja el futuro del baloncesto.
          </p>
        </header>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {EVENTS.map((event, idx) => (
            <div 
              key={event.id} 
              className="reveal group bg-neutral-900/50 rounded-[3rem] overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-700 flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-6 left-6">
                  <span className={`px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border ${event.status === 'upcoming' ? 'bg-gold text-white border-gold' : 'bg-white/10 text-white/40 border-white/10'}`}>
                    {event.status === 'upcoming' ? 'PRÓXIMAMENTE' : 'FINALIZADO'}
                  </span>
                </div>
              </div>
              
              <div className="p-10 md:p-12 flex flex-col flex-grow">
                <span className="text-gold text-[10px] font-black tracking-[0.3em] uppercase mb-2 block italic">{event.date}</span>
                <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-6 group-hover:text-gold transition-colors">{event.title}</h3>
                <p className="text-white/40 text-sm font-medium uppercase tracking-widest leading-loose mb-10 flex-grow">
                  {event.description}
                </p>
                
                <a 
                  href={event.link}
                  className="inline-flex items-center gap-4 bg-white text-black px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-white transition-all w-fit"
                >
                  Ver detalles
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
