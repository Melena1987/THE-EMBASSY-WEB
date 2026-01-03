import React, { useEffect, useRef, useState } from 'react';
import { EVENTS } from '../constants';

const EventsPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.children[0].clientWidth + 24; // width + gap
      const index = Math.round(scrollPosition / cardWidth);
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0].clientWidth + 24;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleEventClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    if (link.startsWith('http')) {
      window.open(link, '_blank', 'noopener,noreferrer');
      return;
    }
    window.history.pushState({}, '', link);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return { text: 'PRÓXIMAMENTE', classes: 'bg-gold border-gold text-white' };
      case 'private':
        return { text: 'PRIVADO', classes: 'bg-white/10 border-white/20 backdrop-blur-md text-white/80' };
      default:
        return { text: 'FINALIZADO', classes: 'bg-white/5 border-white/20 text-white/40' };
    }
  };

  return (
    <div ref={sectionRef} className="bg-[#050505] text-white min-h-screen pt-24 pb-24 selection:bg-gold selection:text-white">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">
        <header className="mb-16 text-left">
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
          <h1 className="reveal text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-6">
            CALENDARIO <br/> <span className="text-white font-black">DE EVENTOS</span>
          </h1>
          <p className="reveal text-white/30 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed max-w-2xl">
            Desde experiencias exclusivas NBA hasta programas de tecnificación de alto rendimiento. <br className="hidden md:block"/> El epicentro del baloncesto profesional en Europa.
          </p>
        </header>

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide no-scrollbar pb-4 md:pb-0"
          >
            {EVENTS.map((event) => {
              const badge = getStatusBadge(event.status);
              return (
                <div 
                  key={event.id} 
                  className="reveal flex-none w-[85vw] md:w-auto snap-center group relative bg-[#080808] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-700 flex flex-col h-[480px] shadow-2xl"
                >
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-110 transition-all duration-[1.5s]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20"></div>
                  </div>
                  <div className="relative z-10 flex flex-col h-full p-8 justify-between">
                    <div className="flex justify-between items-start">
                      <span className={`inline-block px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-[0.2em] border ${badge.classes}`}>
                        {badge.text}
                      </span>
                    </div>
                    <div className="space-y-5">
                      <div>
                        {event.category && <span className="text-gold text-[9px] font-black italic uppercase tracking-[0.4em] mb-2 block">{event.category}</span>}
                        <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter leading-none text-white">{event.title}</h3>
                        <p className="text-gold text-[9px] font-black tracking-widest uppercase mt-1">{event.date}</p>
                      </div>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.1em] leading-relaxed line-clamp-3">{event.description}</p>
                      <button onClick={(e) => handleEventClick(e as any, event.link)} className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-gold hover:text-white">
                        <span>Ver Detalles</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col md:hidden items-center gap-6 mt-8">
            <div className="flex justify-center gap-2">
              {EVENTS.map((_, i) => (
                <button key={i} onClick={() => scrollToIndex(i)} className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-gold' : 'w-2 bg-white/20'}`} />
              ))}
            </div>
            <div className="flex gap-4">
              <button onClick={() => scrollToIndex(activeIndex - 1)} disabled={activeIndex === 0} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center disabled:opacity-20 text-gold">
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button onClick={() => scrollToIndex(activeIndex + 1)} disabled={activeIndex === EVENTS.length - 1} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center disabled:opacity-20 text-gold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;