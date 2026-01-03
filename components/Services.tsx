
import React, { useEffect, useRef, useState } from 'react';
import { SERVICES } from '../constants';
import { useLanguage } from '../context/LanguageContext.tsx';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.05 });

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.children[0].clientWidth + 16;
      const index = Math.round(scrollPosition / cardWidth);
      setActiveIndex(index);
    }
  };

  const getTranslatedService = (service: any) => {
    let btnLabel = service.buttonLabel;
    if (btnLabel === 'VER INSTALACIONES') btnLabel = t('services', 'detailsBtn');
    if (btnLabel === 'SERVICIO PREMIUM') btnLabel = t('services', 'premiumBtn');
    if (btnLabel === 'RESERVAR ENTRENAMIENTO') btnLabel = t('nav', 'booking');
    if (btnLabel === 'VISITAR HOTEL') btnLabel = t('services', 'hotelBtn');
    if (btnLabel === 'PERFORMANCE LAB') btnLabel = t('services', 'performanceBtn');

    return { 
      ...service, 
      buttonLabel: btnLabel,
      title: t('services_items', service.title),
      description: t('services_items', service.title + '_desc')
    };
  };

  return (
    <section id="servicios" ref={sectionRef} className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-xs font-black tracking-[0.5em] uppercase mb-4 block italic">{t('services', 'subtitle')}</span>
          <h2 className="text-4xl md:text-7xl font-black uppercase italic mb-6 tracking-tighter">{t('services', 'title')}</h2>
          <p className="text-white/40 max-w-2xl mx-auto text-base font-light uppercase tracking-widest leading-loose">{t('services', 'desc')}</p>
        </div>

        <div className="relative">
          <div ref={scrollContainerRef} onScroll={handleScroll} className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide no-scrollbar pb-4 md:pb-0">
            {SERVICES.map((service, idx) => {
              const s = getTranslatedService(service);
              const hasAction = s.path || s.externalLink;
              return (
                <div key={idx} className={`reveal flex-none w-[85vw] md:w-auto snap-center group p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] transition-all duration-700 flex flex-col justify-between ${hasAction ? 'cursor-pointer hover:border-gold/50 hover:bg-white/[0.04] hover:scale-[1.02]' : 'hover:border-white/10'} delay-${(idx % 4) * 100}`}>
                  <div>
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-500">{s.icon}</div>
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-gold transition-colors italic leading-none">{s.title}</h3>
                    <p className="text-white/40 font-medium leading-relaxed text-sm uppercase tracking-wider group-hover:text-white/70 transition-colors mb-6">{s.description}</p>
                  </div>
                  {hasAction && (
                    <div className="mt-auto flex items-center gap-3 text-gold">
                      <span className="text-[10px] font-black uppercase tracking-widest">{s.buttonLabel}</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7-7 7M3 12h18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
