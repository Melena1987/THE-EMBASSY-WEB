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
    <section id="servicios" ref={sectionRef} className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24 reveal">
          <span className="text-gold text-xs font-black tracking-[0.5em] uppercase mb-6 block italic">Premium Approach</span>
          <h2 className="text-5xl md:text-8xl font-black uppercase italic mb-8 tracking-tighter">NUESTROS SERVICIOS</h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-light uppercase tracking-widest leading-loose">
            Un ecosistema integral diseñado para cubrir todas las dimensiones del éxito deportivo y profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className={`reveal group p-12 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:border-gold/50 transition-all duration-700 hover:bg-white/[0.04] transition-all delay-${(idx % 3) * 150}`}
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-6 group-hover:text-gold transition-colors italic">
                {service.title}
              </h3>
              <p className="text-white/40 font-medium leading-loose text-sm uppercase tracking-wider group-hover:text-white/70 transition-colors">
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