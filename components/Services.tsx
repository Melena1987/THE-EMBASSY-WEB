
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
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className={`reveal group p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:border-gold/50 transition-all duration-700 hover:bg-white/[0.04] transition-all delay-${(idx % 4) * 100}`}
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-gold transition-colors italic leading-none">
                {service.title}
              </h3>
              <p className="text-white/40 font-medium leading-relaxed text-sm uppercase tracking-wider group-hover:text-white/70 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Visual divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default Services;
