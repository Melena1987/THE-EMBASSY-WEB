
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

  return (
    <div ref={sectionRef} className="bg-black text-white min-h-screen pt-24 pb-16 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <header className="mb-16 text-left">
          <button 
            onClick={onBack}
            className="mb-10 inline-flex items-center gap-4 text-gold hover:text-white transition-all uppercase text-[11px] font-black tracking-[0.4em] group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            VOLVER AL HUB
          </button>
          
          <div className="reveal">
            <span className="text-gold text-[12px] font-black tracking-[0.5em] uppercase mb-4 block italic">Elite Calendar</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
              EVENTOS <span className="text-white/20">EMBASSY</span>
            </h1>
          </div>
        </header>

        {/* Grid de Eventos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {EVENTS.map((event) => (
            <div 
              key={event.id} 
              className="reveal group bg-[#0A0A0A] rounded-[3rem] overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-700 flex flex-col h-full shadow-2xl"
            >
              <div className="relative aspect-square overflow-hidden bg-neutral-900">
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                {/* Badge Naranja Estilo Captura */}
                <div className="absolute top-8 left-8">
                  <span className="bg-gold text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                    {event.status === 'upcoming' ? 'PRÓXIMAMENTE' : 'FINALIZADO'}
                  </span>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                {/* Subtítulo Oro */}
                <span className="text-gold text-[11px] font-black tracking-[0.2em] uppercase mb-4 block italic">
                  {event.date}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-6 leading-tight group-hover:text-gold transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-white/40 text-[11px] font-medium uppercase tracking-[0.1em] leading-relaxed mb-10 flex-grow">
                  {event.description}
                </p>
                
                {/* Botón Pill Blanco */}
                <a 
                  href={event.link}
                  onClick={(e) => handleEventClick(e, event.link)}
                  className="inline-flex items-center justify-center gap-4 bg-white text-black px-10 py-5 rounded-full text-[12px] font-black uppercase tracking-[0.15em] hover:bg-gold hover:text-white transition-all w-fit shadow-xl group/btn"
                >
                  DETALLES
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
