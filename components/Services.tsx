
import React, { useEffect, useRef } from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleAction = (service: any) => {
    if (service.externalLink) {
      window.open(service.externalLink, '_blank', 'noopener,noreferrer');
    } else if (service.path) {
      if (service.path.startsWith('#')) {
        const id = service.path.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Actualizar hash en URL sin recargar
          window.history.pushState(null, '', service.path);
        }
      } else {
        window.history.pushState({}, '', service.path);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    }
  };

  return (
    <section id="servicios" ref={sectionRef} className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-xs font-black tracking-[0.5em] uppercase mb-4 block italic">Premium Approach</span>
          <h2 className="text-4xl md:text-7xl font-black uppercase italic mb-6 tracking-tighter">NUESTROS SERVICIOS</h2>
          <p className="text-white/40 max-w-2xl mx-auto text-base font-light uppercase tracking-widest leading-loose">
            Un ecosistema integral diseñado para cubrir todas las dimensiones del éxito deportivo y profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {SERVICES.map((service, idx) => {
            const hasAction = service.path || service.externalLink;
            
            return (
              <div 
                key={idx} 
                onClick={() => hasAction && handleAction(service)}
                className={`reveal group p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] transition-all duration-700 flex flex-col justify-between 
                  ${hasAction ? 'cursor-pointer hover:border-gold/50 hover:bg-white/[0.04] hover:scale-[1.02]' : 'hover:border-white/10'} 
                  delay-${(idx % 4) * 100}`}
              >
                <div>
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-gold transition-colors italic leading-none">
                    {service.title}
                  </h3>
                  <p className="text-white/40 font-medium leading-relaxed text-sm uppercase tracking-wider group-hover:text-white/70 transition-colors mb-6">
                    {service.description}
                  </p>
                </div>
                
                {hasAction && (
                  <div className="mt-auto flex items-center gap-3 text-gold">
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {service.buttonLabel || (service.externalLink ? 'Visitar Hotel' : 'Ver Detalles')}
                    </span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M14 5l7 7-7 7M3 12h18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Visual background decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 opacity-[0.02]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold rounded-full blur-[150px]"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default Services;
